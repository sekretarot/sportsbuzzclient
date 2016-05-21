/*global SportsBuzzClient, Backbone, JST*/

SportsBuzzClient.Views = SportsBuzzClient.Views || {};

(function () {
  'use strict';

  SportsBuzzClient.Views.Tweet = Backbone.View.extend({

    template: JST['app/scripts/templates/tweet.ejs'],

    tagName: 'div',

    id: '',

    className: '',

    events: {},

    $el: '#tweets',

    initialize: function () {
      this.model = new SportsBuzzClient.Models.Tweet();
      this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
    }

  });

})();
