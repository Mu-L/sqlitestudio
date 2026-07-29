find_package(Qt6 REQUIRED COMPONENTS Core Widgets)

set(PROJECT_HEADERS
    fusionlightplugin.h
)

set(PROJECT_SOURCES
    fusionlightplugin.cpp
)

add_library(FusionLightStyle SHARED ${PROJECT_HEADERS} ${PROJECT_SOURCES})
letos_set_style_properties(FusionLightStyle)
target_compile_definitions(FusionLightStyle PRIVATE
    QT_DEPRECATED_WARNINGS
)
target_link_libraries(FusionLightStyle PRIVATE
    Qt::Core
    Qt::Widgets
)
