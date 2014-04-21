function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    __p.require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __alloyId18 = [];
    $.__views.__alloyId20 = Alloy.createController("list", {
        id: "__alloyId20"
    });
    $.__views.__alloyId19 = Ti.UI.createTab({
        window: $.__views.__alloyId20.getViewEx({
            recurse: true
        }),
        title: "List",
        icon: __p.file("KS_nav_ui.png"),
        id: "__alloyId19"
    });
    __alloyId18.push($.__views.__alloyId19);
    $.__views.__alloyId23 = Alloy.createController("search", {
        id: "__alloyId23"
    });
    $.__views.__alloyId22 = Ti.UI.createTab({
        window: $.__views.__alloyId23.getViewEx({
            recurse: true
        }),
        title: "Search",
        icon: __p.file("KS_nav_views.png"),
        id: "__alloyId22"
    });
    __alloyId18.push($.__views.__alloyId22);
    $.__views.__alloyId26 = Alloy.createController("add", {
        id: "__alloyId26"
    });
    $.__views.__alloyId25 = Ti.UI.createTab({
        window: $.__views.__alloyId26.getViewEx({
            recurse: true
        }),
        title: "Add",
        icon: __p.file("KS_nav_ui.png"),
        id: "__alloyId25"
    });
    __alloyId18.push($.__views.__alloyId25);
    $.__views.__alloyId29 = Alloy.createController("contactImport", {
        id: "__alloyId29"
    });
    $.__views.__alloyId28 = Ti.UI.createTab({
        window: $.__views.__alloyId29.getViewEx({
            recurse: true
        }),
        title: "Import",
        icon: __p.file("KS_nav_views.png"),
        id: "__alloyId28"
    });
    __alloyId18.push($.__views.__alloyId28);
    $.__views.index = __ui.createTabGroup({
        tabs: __alloyId18,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    _.extend($, exports);
}

var Alloy = __p.require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;