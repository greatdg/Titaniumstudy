function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "add";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.add = Ti.UI.createWindow({
        backgroundColor: "#FFF",
        id: "add"
    });
    $.__views.add && $.addTopLevelView($.__views.add);
    $.__views.__alloyId0 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId0"
    });
    $.__views.add.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createView({
        layout: "horizontal",
        height: 80,
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createView({
        id: "__alloyId2"
    });
    $.__views.__alloyId1.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createView({
        layout: "vertical",
        height: 80,
        id: "__alloyId3"
    });
    $.__views.__alloyId1.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId4"
    });
    $.__views.__alloyId3.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        text: "Name",
        id: "__alloyId5"
    });
    $.__views.__alloyId4.add($.__views.__alloyId5);
    $.__views.nameAdd = Ti.UI.createTextField({
        id: "nameAdd",
        value: "John Dow"
    });
    $.__views.__alloyId4.add($.__views.nameAdd);
    $.__views.__alloyId6 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId6"
    });
    $.__views.__alloyId3.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        text: "Date of Birth",
        id: "__alloyId7"
    });
    $.__views.__alloyId6.add($.__views.__alloyId7);
    $.__views.bdayAdd = Ti.UI.createTextField({
        id: "bdayAdd",
        value: "04/07/1969"
    });
    $.__views.__alloyId6.add($.__views.bdayAdd);
    $.__views.__alloyId8 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId8"
    });
    $.__views.__alloyId3.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createLabel({
        text: "Gendar",
        id: "__alloyId9"
    });
    $.__views.__alloyId8.add($.__views.__alloyId9);
    $.__views.genderAdd = Ti.UI.createTextField({
        id: "genderAdd",
        value: "Male"
    });
    $.__views.__alloyId8.add($.__views.genderAdd);
    $.__views.__alloyId10 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId10"
    });
    $.__views.__alloyId3.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createLabel({
        text: "Phone Number",
        id: "__alloyId11"
    });
    $.__views.__alloyId10.add($.__views.__alloyId11);
    $.__views.phoneAdd = Ti.UI.createTextField({
        id: "phoneAdd",
        value: "+64 21 85 7700"
    });
    $.__views.__alloyId10.add($.__views.phoneAdd);
    $.__views.__alloyId12 = Ti.UI.createView({
        id: "__alloyId12"
    });
    $.__views.add.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createView({
        id: "__alloyId13"
    });
    $.__views.__alloyId12.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createView({
        id: "__alloyId14"
    });
    $.__views.__alloyId13.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createLabel({
        text: "Title",
        id: "__alloyId15"
    });
    $.__views.__alloyId14.add($.__views.__alloyId15);
    $.__views.addtionalValue = Ti.UI.createTextField({
        id: "addtionalValue",
        value: "Wine"
    });
    $.__views.__alloyId14.add($.__views.addtionalValue);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;