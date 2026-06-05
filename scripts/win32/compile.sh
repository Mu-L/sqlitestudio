#!/usr/bin/env bash

# This script is intended for compilation from MSYS2 bash shell (dedicated for clang64, clangarm64 or mingw64).

set -Eeuo pipefail
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
pushd "$SCRIPT_DIR/../.." > /dev/null || exit 1
TOP_DIR="$(pwd)"

cleanup() {
    popd > /dev/null || true
}
trap cleanup EXIT

REQUIRED_TOOLS=(
    gendef
    dlltool
    cmake
    ninja
	ntldd
	windeployqt6
	realpath
)

for tool in "${REQUIRED_TOOLS[@]}"; do
    if ! command -v "$tool" >/dev/null 2>&1; then
        echo "Error: required command '$tool' is not in PATH"
        exit 1
    fi
done

SQLITE_DIR="$(realpath -m "$(pwd)/../sqlite")"
EXT_DIR="$(realpath -m "$(pwd)/../ext")"

if [[ ! -d "$SQLITE_DIR" ]]; then
    echo "Error: directory $SQLITE_DIR does not exist. You should have this directory and sqlite3.dll in it."
	echo "You can use compile_sqlite_and_ext.sh to do it for you."
    exit 1
fi

if [[ ! -f "$SQLITE_DIR/sqlite3.dll" ]]; then
    echo "Error: file $SQLITE_DIR/sqlite3.dll does not exist."
	echo "You can use sqlite3.dll from official https://sqlite.org, or you can use Letos-dedicated compilation from https://github.com/pawelsalawa/sqlite3-letos/releases"
	echo "You can use compile_sqlite_and_ext.sh to do it for you."
    exit 1
fi

if [[ ! -f "$SQLITE_DIR/sqlite3.def" ]]; then
    gendef - $SQLITE_DIR/sqlite3.dll > $SQLITE_DIR/sqlite3.def
fi
if [[ ! -f "$SQLITE_DIR/libsqlite3.dll.a" ]]; then
	dlltool -d $SQLITE_DIR/sqlite3.def -l $SQLITE_DIR/libsqlite3.dll.a
fi
if [[ ! -d "$EXT_DIR" ]]; then
    echo "Warning: directory $EXT_DIR does not exist. If you want default extensions available in Letos, you should have this directory and SQLite extension dll files in it."
	echo "You can use compile_sqlite_and_ext.sh to do it for you."
	echo "It's okay to skip this."
fi

#########################################################################
echo "Compile Letos"

mkdir -p output/build output/build-plugins output/Letos

cd output/build
cmake ../../Letos/ -G Ninja \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX=../Letos \
    -DWITH_PORTABLE=1 \
    -DWITH_UPDATER=1 \
    -DBUILD_TESTING=0 \
    -DCUSTOM_SQLITE3="$SQLITE_DIR"
cmake --build .
cmake --install .

#########################################################################
echo "Compile Plugins"

cd ../build-plugins
cmake ../../Plugins/ -G Ninja \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX=../Letos \
    -DWITH_PORTABLE=1 \
    -DWITH_DYNAMIC_PYTHON=1 \
    -DWITH_ALL_PLUGINS=1 \
    -DCUSTOM_SQLITE3="$SQLITE_DIR"
cmake --build .
cmake --install .

#########################################################################
echo "Prepare portable directory"

cd $TOP_DIR/output
mkdir -p portable
cp -R Letos portable/
cd portable/Letos
ABSOLUTE_PORTABLE_DIR=$(pwd)

rm -rf lib
rm -f *.a
rm -f plugins/*.a
rm -f styles/*.a

if [[ -d "$TOP_DIR/../ext" ]]; then
	echo "Copying SQLite extensions from $TOP_DIR/../ext"
	cp -R $TOP_DIR/../ext ./
fi

#########################################################################
echo "Assemble portable distribution"

windeployqt6 Letos.exe \
  --release \
  --no-translations \
  --no-system-d3d-compiler \
  -printsupport -xml -qml

rm Qt6Quick*.dll Qt6QmlMeta.dll Qt6QmlModels.dll Qt6QmlWorkerScript.dll
rm tls/qcertonlybackend.dll
rm -r qml qmltooling generic networkinformation


cd $TOP_DIR/../sqlite
cp *.dll "$ABSOLUTE_PORTABLE_DIR"

cd ${ABSOLUTE_PORTABLE_DIR}

# Copy dependencies of letos.exe
ntldd -R letos.exe | \
 sed 's/.*=> \(.*\) (0x.*/\1/' | \
 sed 's/\\/\//g' | grep ${MINGW_PREFIX} | \
 xargs -I {} cygpath -u {} | \
 xargs -I {} cp -u {} .

# Copy dependencies of plugins
ntldd -R plugins/*.dll | \
  sed -n 's/.*=> \(.*\) (0x.*/\1/p' | \
  tr '\\' '/' | \
  awk -v pfx="${MINGW_PREFIX}" 'index($0, pfx)' | \
  xargs -r -I {} cygpath -u {} | \
  xargs -r -I {} cp -u {} .

# Copy dependencies of extensions
if [[ -d "./ext" ]]; then
	ntldd -R ext/*.dll | \
	  sed -n 's/.*=> \(.*\) (0x.*/\1/p' | \
	  tr '\\' '/' | \
	  awk -v pfx="${MINGW_PREFIX}" 'index($0, pfx)' | \
	  xargs -r -I {} cygpath -u {} | \
	  xargs -r -I {} cp -u {} .
fi
