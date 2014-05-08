var args = arguments[0] || {};

var title = args.title;

$.importTableRow.text = title;

var checkBtn = false;

var checkClick = function(e){
	checkBtn =! checkBtn;
	if(checkBtn===true){
		$.checkbox.color = 'blue';
	}else{
		$.checkbox.color = 'red';
	};
};
