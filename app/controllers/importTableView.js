var args = arguments[0] || {};

var contactData = args.contactData;
$.importTableRow.checkBtn = false;

$.importTableRow.text = contactData.fullName;
$.importTableRow.email = contactData.email;
$.importTableRow.allData = contactData;

var importCheck = Ti.UI.createButton({
    backgroundImage: 'untick.png',    
    //title: "clickme",
    top: 11,
    left: 11,
    width: 22,
    height: 22,
    
});


$.importTableRow.addEventListener('click',function(e){
   if($.importTableRow.checkBtn==true){
		$.importTableRow.checkBtn = false;
        importCheck.backgroundImage = 'untick.png';
			
	}else{
        importCheck.backgroundImage = 'tick.png';
		$.importTableRow.checkBtn = true;		
	}
});

$.importTableRow.add(importCheck);
