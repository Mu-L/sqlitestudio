cmake_minimum_required(VERSION 3.16)

list(APPEND CMAKE_MODULE_PATH "${CMAKE_CURRENT_LIST_DIR}/cmake")

include(version)

letos_find_version()
project(Letos VERSION "${LETOS_VERSION_STRING}")

add_custom_target(MiscFiles)
target_sources(MiscFiles PRIVATE
	../ChangeLog.md
	../README.md
)

if(WIN32 OR APPLE)
    set(WITH_PORTABLE_DEFAULT ON)
endif()

option(WITH_GUI "Build GUI application" ON)

option(WITH_PORTABLE "Create portable bundle" ${WITH_PORTABLE_DEFAULT})
option(WITH_UPDATER "Enable update manager" ${WITH_PORTABLE})
option(WITH_SHARED_RES "Install resources as separate files (distro packaging only)" OFF)

if(NOT WITH_CLI AND NOT WITH_GUI)
    message(FATAL_ERROR "At least one of WITH_CLI or WITH_GUI must be enabled")
endif()

include(CTest)
include(common)
include(custom_sqlite3)

if(NOT WITH_PORTABLE)
    set(SYS_PLUGINS_DIR_DEFAULT "${LETOS_INSTALL_PLUGINDIR}")
endif()
set(SYS_PLUGINS_DIR "${SYS_PLUGINS_DIR_DEFAULT}" CACHE PATH "Path to system plugins directory")

add_subdirectory(core)
if(WITH_GUI)
    add_subdirectory(gui)
    add_subdirectory(letos)
endif()

if(BUILD_TESTING)
    add_subdirectory(Tests)
endif()
