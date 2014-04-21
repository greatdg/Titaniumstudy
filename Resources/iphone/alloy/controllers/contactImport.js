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
    this.__controllerPath = "contactImport";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.contactImport = Ti.UI.createWindow({
        title: "Import",
        backgroundColor: "blue",
        id: "contactImport"
    });
    $.__views.contactImport && $.addTopLevelView($.__views.contactImport);
    $.__views.__alloyId16 = Ti.UI.createView({
        id: "__alloyId16"
    });
    $.__views.contactImport.add($.__views.__alloyId16);
    $.__views.importTable = Ti.UI.createTableView({
        id: "importTable"
    });
    $.__views.__alloyId16.add($.__views.importTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    alert("import window");
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