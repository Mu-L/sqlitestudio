#!/bin/sh
# shellcheck shell=dash

set -eu

SCRIPT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
FILE="${SCRIPT_DIR}/../Letos/core/letos.cpp"

version_num=$(
    grep -E 'static const int letosVersion *= *[0-9]+;' "$FILE" |
    sed -E 's/.*= *([0-9]+).*/\1/'
)

major=$(( version_num / 10000 ))
minor=$(( (version_num / 100) % 100 ))
patch=$(( version_num % 100 ))

echo "${major}.${minor}.${patch}"
