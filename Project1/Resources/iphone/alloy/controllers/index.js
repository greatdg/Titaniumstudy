function Controller() {
    function doClick2() {
        var win = Alloy.createController("window_modal", {
            abc: "2"
        }).getView();
        win.open({
            transition: Titanium.UI.iPhone.AnimationStyle.CURL_UP
        });
    }
    function doClick3(e) {
        Ti.API.info("e.text: " + e.text);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.__alloyId0 = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        title: "Windows",
        id: "__alloyId0"
    });
    $.__views.__alloyId2 = Ti.UI.createButton({
        title: "Modal",
        index: "asdf",
        id: "__alloyId2"
    });
    leftClick ? $.__views.__alloyId2.addEventListener("click", leftClick) : __defers["$.__views.__alloyId2!click!leftClick"] = true;
    $.__views.__alloyId0.leftNavButton = $.__views.__alloyId2;
    $.__views.__alloyId4 = Ti.UI.createButton({
        title: "Nav",
        id: "__alloyId4"
    });
    rightClick ? $.__views.__alloyId4.addEventListener("click", rightClick) : __defers["$.__views.__alloyId4!click!rightClick"] = true;
    $.__views.__alloyId0.rightNavButton = $.__views.__alloyId4;
    $.__views.label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        top: 120,
        text: "Window 1",
        id: "label"
    });
    $.__views.__alloyId0.add($.__views.label);
    doClick3 ? $.__views.label.addEventListener("click", doClick3) : __defers["$.__views.label!click!doClick3"] = true;
    $.__views.__alloyId5 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        top: 120,
        text: "Window2",
        id: "__alloyId5"
    });
    $.__views.__alloyId0.add($.__views.__alloyId5);
    doClick2 ? $.__views.__alloyId5.addEventListener("click", doClick2) : __defers["$.__views.__alloyId5!click!doClick2"] = true;
    var __alloyId7 = [];
    __alloyId7.push("Confirm");
    __alloyId7.push("Cancel");
    __alloyId7.push("Help");
    $.__views.dialog = Ti.UI.createAlertDialog({
        buttonNames: __alloyId7,
        id: "dialog",
        title: "Delete",
        message: "Would you like to delete the file?",
        cancel: "1"
    });
    doClick3 ? $.__views.dialog.addEventListener("click", doClick3) : __defers["$.__views.dialog!click!doClick3"] = true;
    $.__views.nav = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.__alloyId0,
        id: "nav"
    });
    $.__views.nav && $.addTopLevelView($.__views.nav);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.nav.open();
    var leftClick = function() {
        var win = Alloy.createController("window_modal").getView();
        win.open({
            modal: "true"
        });
    };
    var rightClick = function() {
        var win = Alloy.createController("window_modal").getView();
        $.nav.openWindow(win);
    };
    $.dialog.show();
    __defers["$.__views.__alloyId2!click!leftClick"] && $.__views.__alloyId2.addEventListener("click", leftClick);
    __defers["$.__views.__alloyId4!click!rightClick"] && $.__views.__alloyId4.addEventListener("click", rightClick);
    __defers["$.__views.label!click!doClick3"] && $.__views.label.addEventListener("click", doClick3);
    __defers["$.__views.__alloyId5!click!doClick2"] && $.__views.__alloyId5.addEventListener("click", doClick2);
    __defers["$.__views.dialog!click!doClick3"] && $.__views.dialog.addEventListener("click", doClick3);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;