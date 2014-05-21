var args = arguments[0] || {};

var title = args.title;
var address = args.address;

$.importTableRow.text = title;



var checkClick = function(e){
	//Ti.API.debug(e);
	if(this.checkBtn=='true'){
		$.checkbox.color = 'gray';
		this.checkBtn = 'false';
			
	}else{
		this.checkBtn = 'true';		
		$.checkbox.color = 'red';
	};
};
