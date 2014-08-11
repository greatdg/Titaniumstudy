var args = arguments[0] || {};

var contactData = args.contactData;


$.importTableRow.text = contactData.fullName;
$.importTableRow.email = contactData.email;
$.importTableRow.allData = contactData;

var importCheck = Ti.UI.createButton({
    backgroundImage: 'untick.png',
    backgroundSelectedImage:'tick.png',
    //title: "clickme",
    top: 11,
    left: 11,
    width: 22,
    height: 22,
    checkBtn: 'false'
});


importCheck.addEventListener('click',function(e){
   if(this.checkBtn=='true'){
		//$.checkbox.color = 'gray';
		this.checkBtn = 'false';
			
	}else{
		this.checkBtn = 'true';		
		//$.checkbox.color = 'red';
	};
});


