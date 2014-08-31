var args = arguments[0] || {};
var contacts;
var data = [];

var performAddressBookFunction = function() {	
	contacts = Ti.Contacts.getAllPeople();
    for (var i = 0; i < contacts.length; i++) {
        var contactData = contacts[i];        
        var title = contacts[i].fullName;   
        if (!title || title.length === 0) {
            title = "(no name)";
        }
        var row = Alloy.createController('importTableView',{
        	index: i,
        	fullName: title
        }).getView();
    	data.push(row);
    }
    $.importTable.data = data;
};

var addressBookDisallowed = function(){
	alert('testaaaaa1222daf');
};

if (Ti.Contacts.contactsAuthorization == Ti.Contacts.AUTHORIZATION_AUTHORIZED){
    performAddressBookFunction();
} else if (Ti.Contacts.contactsAuthorization == Ti.Contacts.AUTHORIZATION_UNKNOWN){
    Ti.Contacts.requestAuthorization(function(e){
        if (e.success) {
            performAddressBookFunction();
        } else {
            addressBookDisallowed();
        }
    });
} else {
    addressBookDisallowed();
};

var buttonImportCancel = Ti.UI.createButton({
	title: 'Cancel',
	color: 'red',
});

$.contactImport.leftNavButton = null;

var clickImportDone = function(e){		
		var importData = $.importTable.getData();
		for(var i=0;i<importData.length;i++) {
			var section = importData[i];
			for(var j=0;j<section.rowCount;j++) {
				var row = section.rows[j];
				if(row.checkBtn === true){
					var people = Alloy.Collections.people;

					var personalInfo = contacts[row.index];
					var birthday = "",
						email = "",
						text = "";
						phoneNumber = "";
						organization = "";
						address1 = "";
						address2 = "";
						address3 = "";


						if( personalInfo['birthday'] && personalInfo['birthday'].length > 0 ) {
							var splitBirthday = personalInfo['birthday'].split('T');
							birthday = splitBirthday[0];	
						}

						if( personalInfo['phone'] ) {
							_.map(personalInfo['phone'], function(value){
								if (phoneNumber == "" && value && value.length > 0){
									phoneNumber = value[0];
								};
							});
						}

						if( personalInfo['organization'] ){
							organization = personalInfo['organization'];
						};
							
							
						
						_.map(personalInfo['address'], function(value, key){
							_.map(value[0], function(val, subkey) {

								if( address1 == "" && subkey == "Street" ) {
									address1 = val;
								} else if( address2 == "" && subkey == "State" ) {
									address2 = val;
								} else if( address3 == "" && subkey == "City" ) {
									address3 = val;
								};
								
							});
									
						});
							

						_.map(personalInfo['email'], function(value) {
							if( email == "" && value && value.length > 0 ) {
								email = value[0];
							}
						});
						
						text = personalInfo['fullName'];

					
					var detailInfo = Alloy.createModel("people",{
					name: text,
					email: email,
					birthday: birthday,
					phoneNumber: phoneNumber,
					job: organization,
					address1: address1,
					address2: address2,
					address3: address3
							
					});	 		
				  detailInfo.save();
				  people.add(detailInfo);
				 					
					}
				}			
			}
				
		
	for(var i=0;i<importData.length;i++) {
		var section = importData[i];
		
		for(var j=0;j<section.rowCount;j++) {	
			var row = section.rows[j];
			row.children[0].color='gray';
			row.children[0].checkBtn='false';
			
		};
	};
	
	$.contactImport.leftNavButton = null;
};





buttonImportCancel.addEventListener('click', function(e){
		var importData = $.importTable.getData();
	for(var i=0;i<importData.length;i++) {
		var section = importData[i];
		
		for(var j=0;j<section.rowCount;j++) {	
			var row = section.rows[j];
			row.children[0].color='gray';
			row.children[0].checkBtn='false';
			
		};
	};
	$.contactImport.leftNavButton = null;
});

function transformfunction(item) {
	Ti.API.debug('testdfasdfas');
	var item = item.toJSON();	
};

$.importTable.addEventListener('click',function(e){
	var importData = $.importTable.getData();
	var isChecked = false;
	
for(var i=0;i<importData.length;i++) {
	var section = importData[i];
					
	for(var j=0;j<section.rowCount;j++) {	
		var row = section.rows[j];		
		if(row.children[0].checkBtn===true){			
			 isChecked = true;
			 break;
		};
	};
	if( isChecked == true ) {
		$.contactImport.leftNavButton=buttonImportCancel;	
	} else {
		$.contactImport.leftNavButton=null;
	}
	
};
});





