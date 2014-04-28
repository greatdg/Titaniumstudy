exports.definition = {
	config: {
		columns: {
		    "name": "varchar",
		    "gender": "integer",
		    "birthday": "varchar(10)",
		    "phoneNumber": "varchar(20)",
		    "address": "varchar",
		    "job": "Varchar(80)",
		    "hairStyle":"varchar",
		    "eyeColor":"varchar",
		    "hairColor":"varchar",
 		    "skinColor": "varchar",
 		    "glasses": "boolean",
 		    "bodyShape":"varchar",
 		    "cloth": "varchar",
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