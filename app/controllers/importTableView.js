var args = arguments[0] || {};

var contactData = args.contactData;


$.importTableRow.text = contactData.fullName;
$.importTableRow.email = contactData.email;
$.importTableRow.allData = contactData;



var checkClick = function(e){
	
	if(this.checkBtn=='true'){
		$.checkbox.color = 'gray';
		this.checkBtn = 'false';
			
	}else{
		this.checkBtn = 'true';		
		$.checkbox.color = 'red';
	};
	//Ti.API.debug(contactData.address);
};
