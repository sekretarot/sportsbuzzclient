/*global SportsBuzzClient, Backbone*/

SportsBuzzClient.Models = SportsBuzzClient.Models || {};

(function () {
  'use strict';

  SportsBuzzClient.Models.Story = Backbone.Model.extend({

    url: '',

    initialize: function() {
    },

    defaults: {
      Title: '',
      Type: '',
      StartDate: '',
      EndDate: '',
      id: ''
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      return response;
    }
  });

})();
