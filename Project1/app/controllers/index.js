function doClick(e) {
var win = Alloy.createController("window_modal", {
	abc: "1"
}).getView();
win.open({
	transition: Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT,
})
}

$.nav.open();

var leftClick = function(e){
	var win = Alloy.createController("window_modal").getView();
	win.open({
		modal: "true",
	});
};

var rightClick = function(e){
	var win = Alloy.createController("window_modal").getView();
	$.nav.openWindow(win);
}

function doClick2(e){
	var win = Alloy.createController("window_modal",{
		abc: '2'
	}).getView();
win.open({
	transition: Titanium.UI.iPhone.AnimationStyle.CURL_UP,
})
}

function showDialog(){
    $.dialog.show();
};
$.dialog.show();
function doClick3(e){
    Ti.API.info('e.text: ' + e.text);
};