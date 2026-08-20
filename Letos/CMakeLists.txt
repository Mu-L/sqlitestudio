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

option(WITH_UNIX_FAV "Enable Unix favored layout (i.e. FHS) and install it system-wide. Select this only if you are a system administrator or distro packager." OFF)
if(NOT WITH_UNIX_FAV)
    set(WITH_UPDATER_DEFAULT ON)
endif()
option(WITH_UPDATER "Enable update manager" ${WITH_UPDATER_DEFAULT})
option(WITH_SUPPORT_REMINDERS "Enable occasional support reminders" ON)
option(WITH_SHARED_RES "Install resources as separate files (distro packaging only)" ${WITH_UNIX_FAV})

set(QRC_EXTRA_ICONSETS "" CACHE STRING "Additional icon sets as .qrc files, separated by semicolons")

include(letos_sqlite3)
include(CTest)
include(common)

add_subdirectory(core)
add_subdirectory(gui)
add_subdirectory(letos)

if(BUILD_TESTING)
    add_subdirectory(Tests)
endif()
