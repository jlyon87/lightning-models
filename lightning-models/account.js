var models = (function Account(models) {

	var initAccount = function() {
		var billingAddress = models.initAddress();
		var shippingAddress = models.initAddress();

		return {
			sobjectType: "Account",
			Name: "",
			Id: "",
			BillingAddress: billingAddress,
			ShippingAddress: shippingAddress,
			Phone: "",
			Fax: "",
			Type: "",
			Industry: "",
			Ownership: "",
			AccountSource: "",
			ParentId: "",
			OwnerId: "",
			Description: ""
		};
	};

	models.initAccount = initAccount;

	return models;
})(models || {});