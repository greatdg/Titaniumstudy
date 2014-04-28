function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "list";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.list = Ti.UI.createWindow({
        backgroundColor: "red",
        title: "List",
        id: "list"
    });
    $.__views.list && $.addTopLevelView($.__views.list);
<<<<<<< HEAD
    $.__views.__alloyId36 = Ti.UI.createView({
        id: "__alloyId36"
    });
    $.__views.list.add($.__views.__alloyId36);
    $.__views.yellowHead = Ti.UI.createImageView({
        top: 50,
        left: 100,
        width: 120,
        height: 60,
        zIndex: 2,
        visible: false,
        id: "yellowHead",
        image: "yellow.png"
    });
    $.__views.__alloyId36.add($.__views.yellowHead);
    $.__views.__alloyId37 = Ti.UI.createImageView({
        top: 50,
        left: 0,
        zIndex: 1,
        image: "person.png",
        id: "__alloyId37"
    });
    $.__views.__alloyId36.add($.__views.__alloyId37);
    $.__views.redCloth = Ti.UI.createImageView({
        top: 190,
        left: 110,
        width: 100,
        height: 120,
        zIndex: 3,
        id: "redCloth",
        image: "red.png"
    });
    $.__views.__alloyId36.add($.__views.redCloth);
    click ? $.__views.redCloth.addEventListener("click", click) : __defers["$.__views.redCloth!click!click"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var click = function() {
        $.yellowHead.visible = true;
        $.yellowHead.width = "10%";
    };
    __defers["$.__views.redCloth!click!click"] && $.__views.redCloth.addEventListener("click", click);
=======
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
>>>>>>> 1c8b4c774d930b55da82625131ec1ec3c7489025
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;