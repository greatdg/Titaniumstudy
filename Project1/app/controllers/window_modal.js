var args = arguments[0] || {};
Ti.API.debug(args);
var abc = args.abc;

var backWin = function(e){
	if(abc=='1'){
	$.winModal.close({
		transition: Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT
	});}else if(abc=='2'){
		$.winModal.close({
			transition: Ti.UI.iPhone.AnimationStyle.CURL_DOWN
		})
	}else{
		$.winModal.close();
	}
}
