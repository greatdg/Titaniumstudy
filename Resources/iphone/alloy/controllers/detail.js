function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "detail";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.detail = Ti.UI.createWindow({
        title: "Detail",
        backgroundColor: "gray",
        id: "detail"
    });
    $.__views.detail && $.addTopLevelView($.__views.detail);
<<<<<<< HEAD
    $.__views.__alloyId19 = Ti.UI.createView({
        id: "__alloyId19"
    });
    $.__views.detail.add($.__views.__alloyId19);
=======
    $.__views.imageBody = Ti.UI.createImageView({
        id: "imageBody",
        image: "body.png",
        width: "150",
        height: "50",
        left: "15",
        top: "150"
    });
    $.__views.detail.add($.__views.imageBody);
    $.__views.imageFace = Ti.UI.createImageView({
        id: "imageFace",
        image: "face.png",
        width: "120",
        height: "150",
        left: "25",
        top: "15"
    });
    $.__views.detail.add($.__views.imageFace);
    $.__views.imageHair = Ti.UI.createImageView({
        id: "imageHair",
        image: "hair.png",
        width: "130",
        height: "30",
        left: "20",
        top: "15"
    });
    $.__views.detail.add($.__views.imageHair);
    $.__views.__alloyId17 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId17"
    });
    $.__views.detail.add($.__views.__alloyId17);
    $.__views.titleTop = Ti.UI.createLabel({
        left: "180",
        top: "10",
        color: "#FFF",
        text: "name",
        id: "titleTop"
    });
    $.__views.__alloyId17.add($.__views.titleTop);
    $.__views.name = Ti.UI.createLabel({
        text: "James Shin",
        id: "name",
        left: "180"
    });
    $.__views.__alloyId17.add($.__views.name);
    $.__views.titleTop = Ti.UI.createLabel({
        left: "180",
        top: "10",
        color: "#FFF",
        text: "age",
        id: "titleTop"
    });
    $.__views.__alloyId17.add($.__views.titleTop);
    $.__views.age = Ti.UI.createLabel({
        text: "25",
        id: "age",
        left: "180"
    });
    $.__views.__alloyId17.add($.__views.age);
    $.__views.titleTop = Ti.UI.createLabel({
        left: "180",
        top: "10",
        color: "#FFF",
        text: "gender",
        id: "titleTop"
    });
    $.__views.__alloyId17.add($.__views.titleTop);
    $.__views.gender = Ti.UI.createLabel({
        text: "Male",
        id: "gender",
        left: "180"
    });
    $.__views.__alloyId17.add($.__views.gender);
    $.__views.titleTop = Ti.UI.createLabel({
        left: "180",
        top: "10",
        color: "#FFF",
        text: "phone number",
        id: "titleTop"
    });
    $.__views.__alloyId17.add($.__views.titleTop);
    $.__views.phone = Ti.UI.createLabel({
        text: "+64 21 123 4567",
        id: "phone",
        left: "180"
    });
    $.__views.__alloyId17.add($.__views.phone);
    $.__views.titleBottom = Ti.UI.createLabel({
        left: "5",
        top: "10",
        color: "#FFF",
        text: "address",
        id: "titleBottom"
    });
    $.__views.__alloyId17.add($.__views.titleBottom);
    $.__views.address = Ti.UI.createLabel({
        text: "123 James Street, Riccarton, Christchurch",
        id: "address",
        left: "5"
    });
    $.__views.__alloyId17.add($.__views.address);
    $.__views.titleBottom = Ti.UI.createLabel({
        left: "5",
        top: "10",
        color: "#FFF",
        text: "relationship",
        id: "titleBottom"
    });
    $.__views.__alloyId17.add($.__views.titleBottom);
    $.__views.relationship = Ti.UI.createLabel({
        text: "relationship",
        id: "relationship",
        left: "5"
    });
    $.__views.__alloyId17.add($.__views.relationship);
    $.__views.titleBottom = Ti.UI.createLabel({
        left: "5",
        top: "10",
        color: "#FFF",
        text: "email",
        id: "titleBottom"
    });
    $.__views.__alloyId17.add($.__views.titleBottom);
    $.__views.email = Ti.UI.createLabel({
        text: "james@jamesshine.com",
        id: "email",
        left: "5"
    });
    $.__views.__alloyId17.add($.__views.email);
>>>>>>> 1c8b4c774d930b55da82625131ec1ec3c7489025
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;