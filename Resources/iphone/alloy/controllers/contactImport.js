function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "contactImport";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.contactImport = Ti.UI.createWindow({
        title: "Import",
        backgroundColor: "blue",
        id: "contactImport"
    });
    $.__views.contactImport && $.addTopLevelView($.__views.contactImport);
    $.__views.__alloyId18 = Ti.UI.createView({
        id: "__alloyId18"
    });
    $.__views.contactImport.add($.__views.__alloyId18);
    $.__views.importSearch = Ti.UI.createSearchBar({
        hintText: "Search",
        id: "importSearch",
        showCancel: "false",
        height: "43",
        top: "0",
        color: "red",
        barColor: "#ABC"
    });
    $.__views.importTable = Ti.UI.createTableView({
        search: $.__views.importSearch,
        id: "importTable"
    });
    $.__views.__alloyId18.add($.__views.importTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var importTableData = [ {
        title: "John"
    }, {
        title: "Mary"
    } ];
    $.importTable.setData(importTableData);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;