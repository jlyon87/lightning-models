# Lightning Models

Add this static resource to your Salesforce org to quickly initialize sObject records in custom Lightning Components.

Including the static resources

```html

	<ltng:require scripts="{!join(',',
		$Resource.LightningModels + '/lightning-models/address.js',
		$Resource.LightningModels + '/lightning-models/account.js',
		$Resource.LightningModels + '/lightning-models/case.js',
		$Resource.LightningModels + '/lightning-models/contact.js')}"
		afterScriptsLoaded="{!c.scriptsLoaded}" />

```

> (!) Include the address.js model alongside any sobjects like Account that use the standard compound Address field.

Usage

```javascript

	// MyComponentHelper.js
	({
	initializeAccount: function(cmp) {
		var account = models.initAccount();
		account.Name = "New Account";
		cmp.set("v.account", account);
		console.log("account: ", account);
	},

	initializeCase: function(cmp) {
		// `case` is a reserved word in JS.
		var myCase = models.initCase();
		myCase.Subject = "New Case";
		myCase.Description = "I'm a new case description.";
		cmp.set("v.case", myCase);
		console.log("case: ", myCase);
	},

	initializeContact: function(cmp) {
		var contact = models.initContact();
		contact.FirstName = "Justin";
		contact.LastName = "Lyon";
		contact.Phone = "555.123.1234";
		cmp.set("v.contact", contact);
		console.log("contact: ", contact);
	}
	})

```
