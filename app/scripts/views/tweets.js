/*global SportsBuzzClient, Backbone, JST*/

SportsBuzzClient.Views = SportsBuzzClient.Views || {};

(function () {
  'use strict';

  SportsBuzzClient.Views.Tweets = Backbone.View.extend({

    template: JST['app/scripts/templates/tweets.ejs'],

    templateDigestButtons: JST['app/scripts/templates/digest-buttons.ejs'],

    tagName: 'div',

    id: 'tweets',

    className: '',

    el: '#tweets-container',

    events: {},

    initialize: function (options) {      
      this.collection = options.collection;
      this.collection.on('reset', this.render, this);
      // this.collection.on('add', this.renderMore, this);
      this.collection.on('add', this.addNewTweetToCollection, this);
      $(window).bind('scroll', _.bind(this.loadMore, this));
      this.newCollection = new SportsBuzzClient.Collections.Tweets();
    },

    render: function () {      
      var headerText = 'Here are the latest tweets from the world of sports!!!';
      if(this.collection.feedType === SportsBuzzClient.feedType.story){
        headerText = 'Story tweets';
      }
      this.$('#feed').html(this.template({tweets: this.collection.toJSON(),
                                          type: this.collection.tweetsType,
                                          headerText: headerText}));
      // this.$('#digest-buttons').html(this.templateDigestButtons({type: this.collection.tweetsType}));
      this.setLoadMoreUrl();
    },

    renderMore: function () {      
      this.$('#feed').append(this.template({tweets: this.newCollection.toJSON(), type: null, headerText: ''}));   
      this.newCollection.reset();
      this.setLoadMoreUrl();   
    },

    addNewTweetToCollection: function(model) {
      this.newCollection.add(model);
      if(this.newCollection.length === 24) {
        this.renderMore();
      }
    },

    setLoadMoreUrl: function() {
      var newLoadMoreHref = window.location.hash;
      if (newLoadMoreHref.indexOf('/') === -1) {
        newLoadMoreHref = newLoadMoreHref + '/more/' +  this.collection.getLastModelTimestamp();
      }     
      else {
        newLoadMoreHref =  newLoadMoreHref.substring(0, newLoadMoreHref.indexOf('/')) + '/more/' +  this.collection.getLastModelTimestamp();
      } 
      this.$('#loadMore').attr('href', newLoadMoreHref);
    },

    loadMore: function() {
      if(this.isScrolledToLoadMore()){
        // window.location = document.getElementById('#loadMore').href
        this.$('#loadMore')[0].click();
      }
        
    },

    isScrolledToLoadMore: function()
    {
        var $elem = this.$('#loadMore');
        var $window = $(window);

        
        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();

        if($elem.offset()){
          var elemTop = $elem.offset().top;
          return ((elemTop - $window.height()/2) <= docViewBottom);
        }
        return false;
    }

  });

})();
