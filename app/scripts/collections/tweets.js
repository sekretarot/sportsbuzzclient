/*global SportsBuzzClient, Backbone*/

SportsBuzzClient.Collections = SportsBuzzClient.Collections || {};

(function () {
  'use strict';

  SportsBuzzClient.Collections.Tweets = Backbone.Collection.extend({

    model: SportsBuzzClient.Models.Tweet,

    url: SportsBuzzClient.APIRoot + 'json/All/' + Date.now(),



    parse:function(response) {
	    return response.JSONDataResult;
	},

	getLastModelTimestamp: function() {
		var lastModel = this.min(function(model) {
		    return model.get("datePosted")
		});
		return lastModel.get("datePosted");
	},

	updateUrlWithLastModelTimestamp: function() {
		this.url = this.url.replace(/\/[^\/]+$/, '/' + this.getLastModelTimestamp());
	}

  });

})();
