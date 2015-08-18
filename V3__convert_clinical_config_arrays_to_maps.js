migrate("openmrs/apps/clinical/app.json", function (jsonObject) {
    return jsonObject[0];
});

migrate("openmrs/apps/clinical/dashboard.json", function (jsonObject) {
    var dashboardMap = {};
    jsonObject.forEach(function (tab) {
        var tabKey = tab.dashboardName.toLowerCase().replace(/\s/g, "_"); //Replace all spaces with _
        dashboardMap[tabKey] = tab;

        //Convert the sections in a tab to map
        var sectionsMap = {};
        tab.sections.forEach(function (section) {
            var sectionKey = section.title.toLowerCase().replace(/\s/g, "_"); //Replace all spaces with _
            sectionsMap[sectionKey] = section;
        });
        tab.sections = sectionsMap;
    });
    return dashboardMap;
});

migrate("openmrs/apps/clinical/extension.json", function (jsonObject) {
    var extensionMap = {};
    jsonObject.forEach(function (extension) {
        var extensionKey = extension.id.toLowerCase().replace(/\./g, "_"); //Replace all . with _
        extensionMap[extensionKey] = extension;
    });
    return extensionMap;
});

migrate("openmrs/apps/clinical/visit.json", function (jsonObject) {
    var visitMap = {};
    jsonObject.forEach(function (tab) {
        var tabKey = tab.title.toLowerCase().replace(/\s/g, "_"); //Replace all spaces with _
        visitMap[tabKey] = tab;

        //Covert the sections in a tab to map
        var sectionsMap = {};
        tab.sections.forEach(function (section) {
            var sectionKey = section.type.toLowerCase().replace(/\s/g, "_"); //Replace all spaces with _
            sectionsMap[sectionKey] = section;
        });
        tab.sections = sectionsMap;
    });
    return visitMap;
});