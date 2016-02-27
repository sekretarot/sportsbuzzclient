/*global SportsBuzzClient, Backbone*/

SportsBuzzClient.Routers = SportsBuzzClient.Routers || {};

(function () {
  'use strict';

  SportsBuzzClient.Routers.Router = Backbone.Router.extend({
	routes: {
		'all': 'index',
		'NBA': 'nba',
		'NFL': 'nfl',
		'NBAStories': 'nbaStories',
		'NFLStories': 'nflStories',
		'all/more/:timestamp' : 'allLoadMore',
		'NBA/more/:timestamp': 'nbaLoadMore',
		'NFL/more/:timestamp': 'nflLoadMore'
		// '*default': 'index'
	},

	index: function(){
		console.log("Index route has been called..");
		if (SportsBuzzClient.CachedData.allTweets == undefined){
	  		SportsBuzzClient.CachedData.allTweets = new SportsBuzzClient.Collections.Tweets(); 
		    SportsBuzzClient.Views.tweetsView = new SportsBuzzClient.Views.Tweets({collection: SportsBuzzClient.CachedData.allTweets});
		    SportsBuzzClient.CachedData.allTweets.fetch({reset: true});			
		}
		else{
			SportsBuzzClient.Views.tweetsView = new SportsBuzzClient.Views.Tweets({collection: SportsBuzzClient.CachedData.allTweets});
			SportsBuzzClient.Views.tweetsView.render();
		}
	},

	nba:   function(){
		console.log("NBA route has been called..");
		if (SportsBuzzClient.CachedData.nbaTweets == undefined){
			SportsBuzzClient.CachedData.nbaTweets = new SportsBuzzClient.Collections.Tweets(); 
			SportsBuzzClient.CachedData.nbaTweets.url = SportsBuzzClient.APIRoot + 'json/NBA/' + Date.now();
		    SportsBuzzClient.Views.tweetsView = new SportsBuzzClient.Views.Tweets({collection: SportsBuzzClient.CachedData.nbaTweets});
		    SportsBuzzClient.CachedData.nbaTweets.fetch({reset: true});
		}
		else{
			SportsBuzzClient.Views.tweetsView = new SportsBuzzClient.Views.Tweets({collection: SportsBuzzClient.CachedData.nbaTweets});
			SportsBuzzClient.Views.tweetsView.render();
		}
	},

	nfl:   function(){
		console.log("NFL route has been called..");
		if (SportsBuzzClient.CachedData.nflTweets == undefined){
	  		SportsBuzzClient.CachedData.nflTweets = new SportsBuzzClient.Collections.Tweets(); 
			SportsBuzzClient.CachedData.nflTweets.url = SportsBuzzClient.APIRoot + 'json/NFL/' + Date.now();
		    SportsBuzzClient.Views.tweetsView = new SportsBuzzClient.Views.Tweets({collection: SportsBuzzClient.CachedData.nflTweets});
		    SportsBuzzClient.CachedData.nflTweets.fetch({reset: true});
		}
		else{
			SportsBuzzClient.Views.tweetsView = new SportsBuzzClient.Views.Tweets({collection: SportsBuzzClient.CachedData.nflTweets});
			SportsBuzzClient.Views.tweetsView.render();
		}
	},

	nbaStories:   function(){
		console.log("NBA stories route has been called..");
  		SportsBuzzClient.CachedData.nbaStories = new SportsBuzzClient.Collections.Stories(); 
		SportsBuzzClient.CachedData.nbaStories.url = SportsBuzzClient.APIRoot + 'stories/NBA';
	    SportsBuzzClient.Views.tweetsView = new SportsBuzzClient.Views.Stories({collection: SportsBuzzClient.CachedData.nbaStories});
	    SportsBuzzClient.CachedData.nbaStories.fetch({reset: true});
	},

	nflStories:   function(){
		console.log("NFL stories route has been called..");
  		SportsBuzzClient.CachedData.nflStories = new SportsBuzzClient.Collections.Stories(); 
		SportsBuzzClient.CachedData.nflStories.url = SportsBuzzClient.APIRoot + 'stories/NFL';
	    SportsBuzzClient.Views.tweetsView = new SportsBuzzClient.Views.Stories({collection: SportsBuzzClient.CachedData.nflStories});
	    SportsBuzzClient.CachedData.nflStories.fetch({reset: true});
	},

	allLoadMore:   function(){
		console.log("All load more route has been called..");
		SportsBuzzClient.CachedData.allTweets.updateUrlWithLastModelTimestamp();
		SportsBuzzClient.Views.tweetsView = new SportsBuzzClient.Views.Tweets({collection: SportsBuzzClient.CachedData.allTweets});
		SportsBuzzClient.CachedData.allTweets.fetch({remove: false});
	},

	nbaLoadMore:   function(){
		console.log("NBA load more route has been called..");
		SportsBuzzClient.CachedData.nbaTweets.updateUrlWithLastModelTimestamp();
		SportsBuzzClient.Views.tweetsView = new SportsBuzzClient.Views.Tweets({collection: SportsBuzzClient.CachedData.nbaTweets});
		SportsBuzzClient.CachedData.nbaTweets.fetch({remove: false});
	},

	nflLoadMore:   function(){
		console.log("NFL load more route has been called..");
		SportsBuzzClient.CachedData.nflTweets.updateUrlWithLastModelTimestamp();
		SportsBuzzClient.Views.tweetsView = new SportsBuzzClient.Views.Tweets({collection: SportsBuzzClient.CachedData.nflTweets});
		SportsBuzzClient.CachedData.nflTweets.fetch({remove: false});
	}

  });

})();
