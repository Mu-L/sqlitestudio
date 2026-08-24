find_package(Qt6 REQUIRED COMPONENTS Core Gui Network Widgets)

set(PROJECT_HEADERS
    singleapplication/singleapplication.h
    singleapplication/singleapplication_p.h
)

set(PROJECT_SOURCES
    main.cpp
    singleapplication/singleapplication.cpp
)
qt_add_resources(PROJECT_SOURCES
    letos.qrc
)

if(WIN32)
    string(TIMESTAMP YEAR "%Y")
    configure_file(windows.rc.in windows.rc @ONLY)
    list(APPEND PROJECT_SOURCES
        ../gui/img/letos.ico
        Letos.exe.manifest
        "${CMAKE_CURRENT_BINARY_DIR}/windows.rc"
    )
elseif(APPLE)
    list(APPEND PROJECT_SOURCES ../gui/img/letos.icns)
    set_source_files_properties(../gui/img/letos.icns PROPERTIES
        MACOSX_PACKAGE_LOCATION "Resources"
    )

    set(CMAKE_INSTALL_RPATH "@executable_path/../Frameworks")
    set(CMAKE_BUILD_WITH_INSTALL_RPATH TRUE)
endif()

add_executable(letos ${PROJECT_HEADERS} ${PROJECT_SOURCES})
letos_set_output_properties(letos)
set_target_properties(letos PROPERTIES
    WIN32_EXECUTABLE ON
)

if(APPLE)
    string(TIMESTAMP YEAR "%Y")
    configure_file(Info.plist.in Info.plist @ONLY)

    set_target_properties(letos PROPERTIES
        MACOSX_BUNDLE ON
        MACOSX_BUNDLE_INFO_PLIST "${CMAKE_CURRENT_BINARY_DIR}/Info.plist"
        OUTPUT_NAME "Letos"
    )
endif()

target_compile_definitions(letos PRIVATE
    QAPPLICATION_CLASS=QApplication
)
target_link_libraries(letos PRIVATE
    Qt::Core
    Qt::Gui
    Qt::Network
    Qt::Widgets
    coreLetos
    guiLetos
)

if(WIN32)
    if(MSVC)
        target_link_libraries(letos PRIVATE
            Advapi32.lib
            User32.lib
        )
    else()
        target_link_libraries(letos PRIVATE
            Advapi32
            User32
        )
    endif()
endif()

install(
    TARGETS letos
    BUNDLE DESTINATION .
    RUNTIME DESTINATION "${CMAKE_INSTALL_BINDIR}"
)

if(UNIX AND NOT APPLE)
    file(GLOB ICONS "../gui/img/letos_[0-9]*.png")
    if(NOT WITH_UNIX_FAV)
        install(
            FILES
            letos.desktop
            ../gui/img/letos.svg
            ${ICONS}
            DESTINATION "${CMAKE_INSTALL_DATADIR}"
        )
    else()
        install(
            FILES letos.desktop
            DESTINATION "${CMAKE_INSTALL_DATADIR}/applications"
        )
        install(
            FILES ../gui/img/letos.svg
            DESTINATION "${CMAKE_INSTALL_DATADIR}/icons/hicolor/scalable/apps"
        )
        foreach(ICON ${ICONS})
            if(NOT (ICON MATCHES "_([0-9]+).png"))
                message(WARNING "Could not extract icon size from '${ICON}'")
            else()
                set(ICON_SIZE ${CMAKE_MATCH_1})
                install(
                    FILES "${ICON}"
                    DESTINATION "${CMAKE_INSTALL_DATADIR}/icons/hicolor/${ICON_SIZE}x${ICON_SIZE}/apps"
                )
            endif()
        endforeach()
    endif()
endif()
