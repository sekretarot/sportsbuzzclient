/*global SportsBuzzClient, Backbone, JST*/

SportsBuzzClient.Views = SportsBuzzClient.Views || {};

(function () {
  'use strict';

  SportsBuzzClient.Views.Tweets = Backbone.View.extend({

    template: JST['app/scripts/templates/tweets.ejs'],

    tagName: 'div',

    id: 'tweets',

    className: '',

    el: '#tweets',

    events: {},

    initialize: function (options) {
      this.collection = options.collection;
      this.collection.on('change add reset', this.render, this);
    },

    render: function () {      
      this.$('#feed').html(this.template({tweets: this.collection.toJSON()}));
      this.setLoadMoreUrl();
    },

    renderMore: function () {      
      this.$('#feed').html(this.template({tweets: this.collection.toJSON()}));
    },

    setLoadMoreUrl: function() {
      var newLoadMoreHref = window.location.hash;
      if (newLoadMoreHref.indexOf('/') === -1) {
        newLoadMoreHref = newLoadMoreHref + '/more/' +  this.collection.getLastModelTimestamp();
      }     
      else {
        newLoadMoreHref =  newLoadMoreHref.substring(0, newLoadMoreHref.indexOf('/')) + '/more/' +  this.collection.getLastModelTimestamp();
      } 
      this.$('#loadMore').attr("href", newLoadMoreHref);
    }

  });

})();
