exports.definition = {
	config: {
		columns: {
		    "name": "text",
		    "gender": "integer",
		    "birthday": "text",
		    "phoneNumber": "text",
		    "address": "text",
		    "job": "text",
		    "hairStyle":"text",
		    "eyeColor":"text",
		    "hairColor":"text",
 		    "skinColor": "text",
 		    "glasses": "integer",
 		    "bodyShape":"text",
 		    "cloth": "text",
		    "custom": "text",		       		    
		},
		adapter: {
			type: "sql",
			collection_name: "people"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};