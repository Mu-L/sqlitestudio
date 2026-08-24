if(NOT WITH_UNIX_FAV)
    # flatten everything
    set(CMAKE_INSTALL_BINDIR ".")
    set(CMAKE_INSTALL_LIBDIR "lib")
    set(CMAKE_INSTALL_DATADIR ".")
endif()

include(GNUInstallDirs)

if(NOT WITH_UNIX_FAV)
    set(LETOS_INSTALL_DATADIR ".")
    set(LETOS_INSTALL_PLUGINDIR "plugins")
    set(LETOS_INSTALL_STYLEDIR "styles")
else()
    set(LETOS_INSTALL_DATADIR "${CMAKE_INSTALL_DATADIR}/letos")
    set(LETOS_INSTALL_PLUGINDIR "${CMAKE_INSTALL_LIBDIR}/letos")
    set(LETOS_INSTALL_STYLEDIR "${LETOS_INSTALL_PLUGINDIR}/styles")
endif()
