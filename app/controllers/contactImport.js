var args = arguments[0] || {};



// $.importTable.setData(importTableData);


var data = [];

var performAddressBookFunction = function(){
	var contacts = Ti.Contacts.getAllPeople();
    
    for (var i = 0; i < contacts.length; i++) {
        var contactData = contacts[i];
        var title = contacts[i].fullName;
       Ti.API.debug(contacts[i]);
        if (!title || title.length === 0) {
            title = "(no name)";
        }
        var row = Alloy.createController('importTableView',{
        	contactData : contactData
        	
        	
        }).getView();
    	data.push(row);
    }
    $.importTable.data = data;
};
var addressBookDisallowed = function(){
	alert('test12222asdfdaf');
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
}



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
				
				
				if(row.children[0].checkBtn==='true'){
					//Ti.API.debug(row.children);
					var people = Alloy.Collections.people;
					
					var personalInfo = row.children[1];
					Ti.API.debug(personalInfo.allData.fullName);
					var email_string = JSON.stringify(personalInfo.email);
					
					
					var detailInfo = Alloy.createModel("people",{
					name: personalInfo.text,
					email: email_string
					 
					// gender:$.genderAdd.value,
					// birthday:$.bdayAdd.value,
					// address:$.addressAdd.value,
					// job:$.nameAdd.value,	
					// custom:	$.nameAdd.value,
					
					// hairStyle:$.hairStyle.value,	
					// hairColor:$.hairColor.value,
// 					
					// skinColor:$.skinColor.value,	
					// faceShape:$.faceShape.value,							
					// eyeShape:$.eyeShape.value,		
// 					
					// extraGlassess:$.extraGlasses.value,	
					// extraMustache:$.extraMustache.value,
					// extraExtra:$.extraExtra.value,
							
					});
					
					

// 			 		
				  detailInfo.save();
				  people.add(detailInfo);
				 					
					}

				}

				
			}
				
		
	for(var i=0;i<importData.length;i++) {
		var section = importData[i];
		
		for(var j=0;j<section.rowCount;j++) {	
			var row = section.rows[j];
			//Ti.API.debug(row.children[0]);
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
			//Ti.API.debug(row.children[0]);
			row.children[0].color='gray';
			row.children[0].checkBtn='false';
			
		};
	};
	$.contactImport.leftNavButton = null;
});
		// <LeftNavButton>
			// <Button title="Cancel" id="buttonImportCancel" onClick="clickImportCancel">
		// </LeftNavButton>
// 		
// 		


$.importTable.addEventListener('click',function(e){
	var importData = $.importTable.getData();
	var isChecked = false;
	
for(var i=0;i<importData.length;i++) {
	var section = importData[i];
					
	for(var j=0;j<section.rowCount;j++) {	
		var row = section.rows[j];		
		if(row.children[0].checkBtn==='true'){
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





