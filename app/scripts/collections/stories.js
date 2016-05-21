/*global SportsBuzzClient, Backbone*/

SportsBuzzClient.Collections = SportsBuzzClient.Collections || {};

(function () {
  'use strict';

  SportsBuzzClient.Collections.Stories = Backbone.Collection.extend({

    model: SportsBuzzClient.Models.Story,

    url: SportsBuzzClient.APIRoot + 'stories/NBA',

    parse:function(response) {
	    return response.slice(0,20);
	}

  });

})();
