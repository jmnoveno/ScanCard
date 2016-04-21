sap.ui.controller("scancard.scan", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf scancard.scan
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf scancard.scan
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf scancard.scan
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf scancard.scan
*/
//	onExit: function() {
//
//	}
	scanNow : function() {
		var cardIOResponseFields = [
	        "card_type",
	        "redacted_card_number",
	        "card_number",
	        "expiry_month",
	        "expiry_year",
	        "cvv",
	        "zip"
        ];
 
        var onCardIOComplete = function(response) {
            console.log("card.io scan complete");
        for (var i = 0, len = cardIOResponseFields.length; i < len; i++) {
          var field = cardIOResponseFields[i];
          console.log(field + ": " + response[field]);
            }
          };
 
        var onCardIOCancel = function() {
            console.log("card.io scan cancelled");
          };
 
        var onCardIOCheck = function (canScan) {
            console.log("card.io canScan? " + canScan);
            CardIO.scan({
                "expiry": true,
                "cvv": true,
                "zip": true,
                "suppressManual": false,
                "suppressConfirm": false,
                "hideLogo": true
                },
                onCardIOComplete,
                onCardIOCancel
              );
          };
 
          CardIO.canScan(onCardIOCheck);
	},
});