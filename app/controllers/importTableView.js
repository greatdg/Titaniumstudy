var args = arguments[0] || {};

var title = args.title;

$.importTableRow.text = title;


var checkBtn = false;
//Alloy.Globals.checkArry = [];

var checkClick = function(e){
	checkBtn =! checkBtn;
	$.importTableView.importCheck = checkBtn;
	if(checkBtn===true){
		$.checkbox.color = 'blue';
		
	}else{
		$.checkbox.color = 'gray';
	};
};
