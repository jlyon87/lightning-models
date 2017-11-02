/*
	Include with any sObjects that use a compound Address field
*/
var models = (function Address(models) {

	var initAddress = function() {
		return {
			sobjectType: "Address",
			City: "",
			Country: "",
			State: "",
			Street: "",
			PostalCode: "",
			CountryCode: "",
			StateCode: ""
		};
	};

	models.initAddress = initAddress;

	return models;
})(models || {});