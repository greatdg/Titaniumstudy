function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "list";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.list = Ti.UI.createWindow({
        backgroundColor: "red",
        title: "List",
        id: "list"
    });
    $.__views.list && $.addTopLevelView($.__views.list);
    $.__views.__alloyId31 = Ti.UI.createView({
        id: "__alloyId31"
    });
    $.__views.list.add($.__views.__alloyId31);
    $.__views.listTable = Ti.UI.createTableView({
        id: "listTable"
    });
    $.__views.__alloyId31.add($.__views.listTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var listTableData = [ {
        title: "James"
    }, {
        title: "Amy"
    } ];
    $.listTable.setData(listTableData);
    $.listTable.addEventListener("click", function() {
        var win = Alloy.createController("detail").getView();
        Alloy.Globals.openNav.openWindow(win);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;