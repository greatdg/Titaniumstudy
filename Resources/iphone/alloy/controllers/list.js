function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "list";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.list = Ti.UI.createWindow({
        backgroundColor: "red",
        title: "List",
        id: "list"
    });
    $.__views.list && $.addTopLevelView($.__views.list);
    $.__views.__alloyId16 = Ti.UI.createView({
        id: "__alloyId16"
    });
    $.__views.list.add($.__views.__alloyId16);
    $.__views.table = Ti.UI.createTableView({
        id: "table"
    });
    $.__views.__alloyId16.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var tableData = [ {
        title: "James"
    }, {
        title: "Amy"
    } ];
    $.table.setData(tableData);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;