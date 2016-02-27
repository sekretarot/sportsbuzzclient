/*global SportsBuzzClient, Backbone*/

SportsBuzzClient.Models = SportsBuzzClient.Models || {};

(function () {
  'use strict';

  SportsBuzzClient.Models.Tweet = Backbone.Model.extend({

    url: '',

    initialize: function() {
    },

    defaults: {      
      ProfileImageUrl: '',
      ScreenName: '',
      TweetText: '',
      id: '',
      datePosted: ''
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      return response;
    }
  });

})();
