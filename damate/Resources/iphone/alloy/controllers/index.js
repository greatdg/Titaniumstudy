function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __alloyId0 = [];
    $.__views.__alloyId2 = Alloy.createController("list", {
        id: "__alloyId2"
    });
    $.__views.__alloyId1 = Ti.UI.createTab({
        window: $.__views.__alloyId2.getViewEx({
            recurse: true
        }),
        title: "List",
        icon: "KS_nav_ui.png",
        id: "__alloyId1"
    });
    __alloyId0.push($.__views.__alloyId1);
    $.__views.__alloyId5 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Tab 2",
        id: "__alloyId5"
    });
    $.__views.__alloyId6 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "I am Window 2",
        id: "__alloyId6"
    });
    $.__views.__alloyId5.add($.__views.__alloyId6);
    $.__views.__alloyId4 = Ti.UI.createTab({
        window: $.__views.__alloyId5,
        title: "Search",
        icon: "KS_nav_views.png",
        id: "__alloyId4"
    });
    __alloyId0.push($.__views.__alloyId4);
    $.__views.__alloyId8 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Tab 3",
        id: "__alloyId8"
    });
    $.__views.__alloyId9 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "I am Window 3",
        id: "__alloyId9"
    });
    $.__views.__alloyId8.add($.__views.__alloyId9);
    $.__views.__alloyId7 = Ti.UI.createTab({
        window: $.__views.__alloyId8,
        title: "Add",
        icon: "KS_nav_ui.png",
        id: "__alloyId7"
    });
    __alloyId0.push($.__views.__alloyId7);
    $.__views.__alloyId11 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Tab 4",
        id: "__alloyId11"
    });
    $.__views.__alloyId12 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "I am Window 4",
        id: "__alloyId12"
    });
    $.__views.__alloyId11.add($.__views.__alloyId12);
    $.__views.__alloyId10 = Ti.UI.createTab({
        window: $.__views.__alloyId11,
        title: "Import",
        icon: "KS_nav_views.png",
        id: "__alloyId10"
    });
    __alloyId0.push($.__views.__alloyId10);
    $.__views.__alloyId14 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Tab 5",
        id: "__alloyId14"
    });
    $.__views.__alloyId15 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "I am Window 5",
        id: "__alloyId15"
    });
    $.__views.__alloyId14.add($.__views.__alloyId15);
    $.__views.__alloyId13 = Ti.UI.createTab({
        window: $.__views.__alloyId14,
        title: "Settings",
        icon: "KS_nav_views.png",
        id: "__alloyId13"
    });
    __alloyId0.push($.__views.__alloyId13);
    $.__views.index = Ti.UI.createTabGroup({
        tabs: __alloyId0,
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