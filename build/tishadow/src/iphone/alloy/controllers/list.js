function Controller() {
    __p.require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "list";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.list = __ui.createWindow({
        backgroundColor: "red",
        title: "List",
        id: "list"
    });
    $.__views.list && $.addTopLevelView($.__views.list);
    $.__views.__alloyId34 = Ti.UI.createView({
        id: "__alloyId34"
    });
    $.__views.list.add($.__views.__alloyId34);
    $.__views.listSearch = Ti.UI.createSearchBar({
        hintText: "Search",
        id: "listSearch",
        showCancel: "false",
        height: "43",
        top: "0",
        color: "red",
        barColor: "#ABC"
    });
    $.__views.listTable = Ti.UI.createTableView({
        search: $.__views.listSearch,
        id: "listTable"
    });
    $.__views.__alloyId34.add($.__views.listTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var listTableData = [ {
        title: "James"
    }, {
        title: "Amy"
    } ];
    $.listTable.setData(listTableData);
    $.listTable.addEventListener("click", function(e) {
        var win = Alloy.createController("detail").getView();
        alert("detail" + e.index);
        index.openWindow(win);
    });
    _.extend($, exports);
}

var Alloy = __p.require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;