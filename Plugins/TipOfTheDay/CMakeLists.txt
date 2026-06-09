find_package(Qt6 REQUIRED COMPONENTS Core Gui Network Widgets)

set(PROJECT_HEADERS
    tipofthedayplugin.h
    TipOfTheDay_global.h
    tipofthedaydialog.h
)

set(PROJECT_SOURCES
    tipofthedayplugin.cpp
    tipofthedaydialog.cpp
)

qt_add_resources(PROJECT_SOURCES
    tipoftheday.qrc
)
qt_wrap_ui(PROJECT_SOURCES
    tipofthedayconfig.ui
    tipofthedaydialog.ui
)


add_library(TipOfTheDay SHARED ${PROJECT_HEADERS} ${PROJECT_SOURCES}
)
letos_set_plugin_properties(TipOfTheDay)
target_compile_definitions(TipOfTheDay PRIVATE
    TIPOFTHEDAY_LIBRARY
)
target_link_libraries(TipOfTheDay PRIVATE
    Qt::Core
    Qt::Gui
    Qt::Widgets
    Qt::Network
)
