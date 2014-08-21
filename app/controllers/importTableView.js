var args = arguments[0] || {};

var index = args.index;
var fullName = args.fullName || "";

$.importTableView.checkBtn = false;
$.importTableView.index = index;

var importCheck = Ti.UI.createButton({
    backgroundImage: 'untick.png',    
    //title: "clickme",
    top: 11,
    left: 11,
    width: 22,
    height: 22,
    
});

$.importTableRow.text = fullName;


$.importTableRow.addEventListener('click',function(e){
   if($.importTableRow.checkBtn==true){
		$.importTableView.checkBtn = false;
        importCheck.backgroundImage = 'untick.png';
			
	}else{
        importCheck.backgroundImage = 'tick.png';
		$.importTableView.checkBtn = true;		
	}
});

$.importTableRow.add(importCheck);
