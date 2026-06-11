# Custom SQLite (dedicated for Letos official builds)
set(CUSTOM_SQLITE3 "" CACHE PATH "Path to directory where you placed your custom SQLite3 files (both library and header)")

if(TARGET Letos::SQLite3)
    return()
endif()

if(CUSTOM_SQLITE3)
    message(STATUS "Using custom SQLite3 from: ${CUSTOM_SQLITE3}")

    set(_sqlite_include "${CUSTOM_SQLITE3}")

    if(WIN32)
        set(_sqlite_lib "${CUSTOM_SQLITE3}/libsqlite3.dll.a")
    elseif(APPLE)
        set(_sqlite_lib "${CUSTOM_SQLITE3}/libsqlite3.0.dylib")
    else()
        set(_sqlite_lib "${CUSTOM_SQLITE3}/libsqlite3.so")
    endif()

    if(NOT EXISTS "${_sqlite_lib}")
        message(FATAL_ERROR "SQLite3 library not found: ${_sqlite_lib}")
    endif()

    if(NOT EXISTS "${_sqlite_include}/sqlite3.h")
        message(FATAL_ERROR "SQLite3 header not found: ${_sqlite_include}/sqlite3.h")
    endif()

    add_library(LetosSQLite3 INTERFACE)
    add_library(Letos::SQLite3 ALIAS LetosSQLite3)

    target_include_directories(LetosSQLite3 INTERFACE
        "${_sqlite_include}"
    )

    target_link_libraries(LetosSQLite3 INTERFACE
        "${_sqlite_lib}"
    )
else()
    find_package(SQLite3 REQUIRED)

    add_library(LetosSQLite3 INTERFACE)
    add_library(Letos::SQLite3 ALIAS LetosSQLite3)

    if(TARGET SQLite3::SQLite3)
        target_link_libraries(LetosSQLite3 INTERFACE SQLite3::SQLite3)
    elseif(TARGET SQLite::SQLite3)
        target_link_libraries(LetosSQLite3 INTERFACE SQLite::SQLite3)
    else()
        message(FATAL_ERROR "SQLite3 found, but no known SQLite CMake target exists")
    endif()
endif()
