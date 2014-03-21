function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "window_modal";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.winModal = Ti.UI.createWindow({
        id: "winModal",
        title: "test"
    });
    $.__views.winModal && $.addTopLevelView($.__views.winModal);
    $.__views.__alloyId11 = Ti.UI.createView({
        backgroundColor: "#112233",
        id: "__alloyId11"
    });
    $.__views.winModal.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createButton({
        title: "Back",
        id: "__alloyId12"
    });
    $.__views.__alloyId11.add($.__views.__alloyId12);
    backWin ? $.__views.__alloyId12.addEventListener("click", backWin) : __defers["$.__views.__alloyId12!click!backWin"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    Ti.API.debug(args);
    var abc = args.abc;
    var backWin = function() {
        "1" == abc ? $.winModal.close({
            transition: Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT
        }) : "2" == abc ? $.winModal.close({
            transition: Ti.UI.iPhone.AnimationStyle.CURL_DOWN
        }) : $.winModal.close();
    };
    __defers["$.__views.__alloyId12!click!backWin"] && $.__views.__alloyId12.addEventListener("click", backWin);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;