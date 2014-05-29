var args = arguments[0] || {};

var importTableData = [{title: 'John'}, {title: 'Mary'}];

// $.importTable.setData(importTableData);


var data = [];

var performAddressBookFunction = function(){
	var contacts = Ti.Contacts.getAllPeople();
    
    for (var i = 0; i < contacts.length; i++) {
        var title = contacts[i].fullName;
        if (!title || title.length === 0) {
            title = "(no name)";
        }
        var row = Alloy.createController('importTableView',{
        	title: title,
        	address: contacts[i].address
        	
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


var clickImportDone = function(e){
	
		var importData = $.importTable.getData();
		for(var i=0;i<importData.length;i++) {
			var section = importData[i];
			for(var j=0;j<section.rowCount;j++) {
				var row = section.rows[j];
				
				
				if(row.children[0].checkBtn==='true'){
					//Ti.API.debug(row.children);
					var people = Alloy.Collections.people;
					var detailInfo = Alloy.createModel("people",{
					name: row.children[1].text 
					// gender:$.genderAdd.value,
					// birthday:$.bdayAdd.value,
					// address:$.addressAdd.value,
					// job:$.nameAdd.value,	
					// custom:	$.nameAdd.value,
// 
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
};



var buttonImportCancel = Ti.UI.createButton({
	title: 'Cancel',
	color: 'red',
});

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
$.contactImport.leftNavButton = null;

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





