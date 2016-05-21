/*global SportsBuzzClient, Backbone*/

SportsBuzzClient.Collections = SportsBuzzClient.Collections || {};

(function () {
  'use strict';

  SportsBuzzClient.Collections.Tweets = Backbone.Collection.extend({

    model: SportsBuzzClient.Models.Tweet,

    url: SportsBuzzClient.APIRoot + 'tweets/All/' + Date.now(),


 //    parse:function(response) {
 //    	if(response.JSONDataResult) {
 //    		return response.JSONDataResult;
 //    	}	    	
	//     if(response.GetStoryTweetsByIDResult) {
	//     	return response.GetStoryTweetsByIDResult;
	//     }	    	
	// },

	getLastModelTimestamp: function() {
		if(!this.length) { return; }
		var lastModel = this.min(function(model) {
		    return model.get('datePosted');
		});
		return lastModel.get('datePosted');
	},

	updateUrlWithLastModelTimestamp: function() {
		this.url = this.url.replace(/\/[^\/]+$/, '/' + this.getLastModelTimestamp());
	}

  });

})();
