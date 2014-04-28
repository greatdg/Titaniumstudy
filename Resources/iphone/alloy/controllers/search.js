function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "search";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.search = Ti.UI.createWindow({
        backgroundColor: "#FFF",
        id: "search"
    });
    $.__views.search && $.addTopLevelView($.__views.search);
    $.__views.__alloyId38 = Ti.UI.createView({
        id: "__alloyId38"
    });
    $.__views.search.add($.__views.__alloyId38);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;