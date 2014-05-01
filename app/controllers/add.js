var args = arguments[0] || {};

function addItem(){
	var people = Alloy.Collections.people;
	var infoAdd = Alloy.createModel("people",{
		name:$.nameAdd.value,
		gender:$.genderAdd.value,
		birthday:$.bdayAdd.value,
		address:$.addressAdd.value,
		job:$.nameAdd.value,	
		hairStyle:$.nameAdd.value,			
		eyeColor:$.nameAdd.value,		
		hairColor:$.nameAdd.value,		
		skinColor:$.nameAdd.value,	
		glasses:$.nameAdd.value,
		bodyShape:$.nameAdd.value,
		cloth:$.nameAdd.value,
		custom:	$.nameAdd.value,
		
	});
	
	
	infoAdd.save();
	people.add(infoAdd);
	// people.fetch();
	closeWindow();
	
};


function closeWindow(){
	
	
	
}
