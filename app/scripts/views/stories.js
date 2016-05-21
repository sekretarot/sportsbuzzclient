/*global SportsBuzzClient, Backbone, JST*/

SportsBuzzClient.Views = SportsBuzzClient.Views || {};

(function () {
  'use strict';

  SportsBuzzClient.Views.Stories = Backbone.View.extend({

    template: JST['app/scripts/templates/stories.ejs'],

    tagName: 'div',

    id: 'tweets-container',

    className: '',

    el: '#tweets-container',

    events: {},

    initialize: function (options) {
      this.collection = options.collection;
      this.listenTo(this.collection, 'change reset', this.render);
    },

    render: function () {
      this.$('#feed').html(this.template({stories: this.collection.toJSON()}));
    }

  });

})();
