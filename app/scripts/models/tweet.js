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
      UserName: '',
      TweetText: '',
      id: '',
      datePosted: ''
    },

    validate: function() {
    },

    parse: function(response)  {
      return response;
    }
  });

})();
