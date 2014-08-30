var args = arguments[0] || {};

var index = args.index;
var fullName = args.fullName || "";

$.importTableView.checkBtn = false;
$.importTableView.index = index;
$.importTableView.text = fullName;

$.importTableRow.text = fullName;

$.importTableView.addEventListener('click',function(e){
	
   if($.importTableView.checkBtn==true){
	
		$.importTableView.checkBtn = false;
        $.importCheck.backgroundImage = 'untick.png';
			
	}else{
		
        $.importCheck.backgroundImage = 'tick.png';
		$.importTableView.checkBtn = true;		
	}
});

// $.importTableRow.add(importCheck);
