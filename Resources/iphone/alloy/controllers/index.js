function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __alloyId20 = [];
    $.__views.__alloyId22 = Alloy.createController("list", {
        id: "__alloyId22"
    });
    $.__views.__alloyId21 = Ti.UI.createTab({
        window: $.__views.__alloyId22.getViewEx({
            recurse: true
        }),
        title: "List",
        icon: "KS_nav_ui.png",
        id: "__alloyId21"
    });
    __alloyId20.push($.__views.__alloyId21);
    $.__views.__alloyId25 = Alloy.createController("search", {
        id: "__alloyId25"
    });
    $.__views.__alloyId24 = Ti.UI.createTab({
        window: $.__views.__alloyId25.getViewEx({
            recurse: true
        }),
        title: "Search",
        icon: "KS_nav_views.png",
        id: "__alloyId24"
    });
    __alloyId20.push($.__views.__alloyId24);
    $.__views.__alloyId28 = Alloy.createController("add", {
        id: "__alloyId28"
    });
    $.__views.__alloyId27 = Ti.UI.createTab({
        window: $.__views.__alloyId28.getViewEx({
            recurse: true
        }),
        title: "Add",
        icon: "KS_nav_ui.png",
        id: "__alloyId27"
    });
    __alloyId20.push($.__views.__alloyId27);
    $.__views.__alloyId31 = Alloy.createController("contactImport", {
        id: "__alloyId31"
    });
    $.__views.__alloyId30 = Ti.UI.createTab({
        window: $.__views.__alloyId31.getViewEx({
            recurse: true
        }),
        title: "Import",
        icon: "KS_nav_views.png",
        id: "__alloyId30"
    });
    __alloyId20.push($.__views.__alloyId30);
    $.__views.__alloyId34 = Ti.UI.createWindow({
        id: "__alloyId34"
    });
    $.__views.__alloyId35 = Ti.UI.createView({
        id: "__alloyId35"
    });
    $.__views.__alloyId34.add($.__views.__alloyId35);
    $.__views.__alloyId33 = Ti.UI.createTab({
        window: $.__views.__alloyId34,
        title: "Settings",
        icon: "KS_nav_views.png",
        id: "__alloyId33"
    });
    __alloyId20.push($.__views.__alloyId33);
    $.__views.index = Ti.UI.createTabGroup({
        tabs: __alloyId20,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;