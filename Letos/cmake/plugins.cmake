include(common)

# hack ui_*.h
find_package(Qt6 REQUIRED COMPONENTS Widgets)
file(GLOB_RECURSE gui_FORMS "${CMAKE_CURRENT_LIST_DIR}/../gui/*.ui")
qt_wrap_ui(gui_UI ${gui_FORMS})
add_custom_target(generate_ui DEPENDS ${gui_UI})

function(letos_set_plugin_properties target)
    letos_set_common_properties(${target})
    letos_set_translations(${target})

    add_dependencies(${target} generate_ui)

    target_include_directories(${target} PRIVATE
        "${CMAKE_CURRENT_SOURCE_DIR}/.."
        "${CMAKE_BINARY_DIR}"
        "${DIR_OF_COMMON_CMAKE}/../core"
        "${DIR_OF_COMMON_CMAKE}/../gui"
    )

    add_custom_target(${target}_miscFiles)
    file(GLOB JSON_FILES "${CMAKE_CURRENT_SOURCE_DIR}/*.json")
    target_sources(${target}_miscFiles PRIVATE ${JSON_FILES})

    if(WIN32 OR APPLE)
        if(APPLE)
            target_link_directories(${target} PRIVATE "${CMAKE_INSTALL_PREFIX}/lib")
        else()
            target_link_directories(${target} PRIVATE "${CMAKE_INSTALL_PREFIX}")
        endif()

        target_link_libraries(${target} PRIVATE coreLetos)
        if(Qt6Gui_FOUND)
            target_link_libraries(${target} PRIVATE guiLetos)
        endif()
    endif()

    target_link_libraries(${target} PRIVATE Letos::SQLite3)

    install(
        TARGETS ${target}
        LIBRARY DESTINATION "${LETOS_INSTALL_PLUGINDIR}" # macOS/Linux (.dylib/.so)
        RUNTIME DESTINATION "${LETOS_INSTALL_PLUGINDIR}" # Windows (.dll)
    )
endfunction()


function(letos_set_style_properties target)
    letos_set_common_properties(${target})

    target_include_directories(${target} PRIVATE
        "${DIR_OF_COMMON_CMAKE}/../core"
        "${DIR_OF_COMMON_CMAKE}/../gui"
    )

    install(
        TARGETS ${target}
        LIBRARY DESTINATION "${LETOS_INSTALL_STYLEDIR}" # macOS/Linux (.dylib/.so)
        RUNTIME DESTINATION "${LETOS_INSTALL_STYLEDIR}" # Windows (.dll)
    )
endfunction()
