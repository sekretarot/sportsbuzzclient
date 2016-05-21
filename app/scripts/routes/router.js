/*global SportsBuzzClient, Backbone*/

SportsBuzzClient.Routers = SportsBuzzClient.Routers || {};

(function () {
  'use strict';

  SportsBuzzClient.Routers.Router = Backbone.Router.extend({
	routes: {
		'all': 'index',
		'NBA': 'nba',
		'NFL': 'nfl',
		'NBAStories/:type': 'nbaStories',
		'NFLStories/:type': 'nflStories',
		'story/:id': 'story',
		'all/more/:timestamp' : 'allLoadMore',
		'NBA/more/:timestamp': 'nbaLoadMore',
		'NFL/more/:timestamp': 'nflLoadMore',
		'archive': 'archive',
		'archivedStories/:category/:type/:timestamp': 'archivedStories',
		// '*default': 'index'
	},

	index: function(){
		if (SportsBuzzClient.CachedData.allTweets === undefined){
	  		SportsBuzzClient.CachedData.allTweets = new SportsBuzzClient.Collections.Tweets(); 	  		
			SportsBuzzClient.CachedData.allTweets.tweetsType = SportsBuzzClient.tweetsCategory.All;
		    SportsBuzzClient.Views.tweetsView = new SportsBuzzClient.Views.Tweets({collection: SportsBuzzClient.CachedData.allTweets});
		    SportsBuzzClient.CachedData.allTweets.fetch({reset: true});			
		}
		else{
			SportsBuzzClient.Views.tweetsView = new SportsBuzzClient.Views.Tweets({collection: SportsBuzzClient.CachedData.allTweets});
			SportsBuzzClient.Views.tweetsView.render();
		}
	},

	nba:   function(){
		if (SportsBuzzClient.CachedData.nbaTweets === undefined){
			SportsBuzzClient.CachedData.nbaTweets = new SportsBuzzClient.Collections.Tweets(); 
			SportsBuzzClient.CachedData.nbaTweets.url = SportsBuzzClient.APIRoot + 'tweets/NBA/' + Date.now();
			SportsBuzzClient.CachedData.nbaTweets.tweetsType = SportsBuzzClient.tweetsCategory.NBA;
		    SportsBuzzClient.Views.tweetsView = new SportsBuzzClient.Views.Tweets({collection: SportsBuzzClient.CachedData.nbaTweets});
		    SportsBuzzClient.CachedData.nbaTweets.fetch({reset: true});
		}
		else{
			SportsBuzzClient.Views.tweetsView = new SportsBuzzClient.Views.Tweets({collection: SportsBuzzClient.CachedData.nbaTweets});
			SportsBuzzClient.Views.tweetsView.render();
		}
	},

	nfl:   function(){
		if (SportsBuzzClient.CachedData.nflTweets === undefined){
	  		SportsBuzzClient.CachedData.nflTweets = new SportsBuzzClient.Collections.Tweets(); 
			SportsBuzzClient.CachedData.nflTweets.url = SportsBuzzClient.APIRoot + 'tweets/NFL/' + Date.now();
			SportsBuzzClient.CachedData.nflTweets.tweetsType = SportsBuzzClient.tweetsCategory.NFL;
		    SportsBuzzClient.Views.tweetsView = new SportsBuzzClient.Views.Tweets({collection: SportsBuzzClient.CachedData.nflTweets});
		    SportsBuzzClient.CachedData.nflTweets.fetch({reset: true});
		}
		else{
			SportsBuzzClient.Views.tweetsView = new SportsBuzzClient.Views.Tweets({collection: SportsBuzzClient.CachedData.nflTweets});
			SportsBuzzClient.Views.tweetsView.render();
		}
	},

	nbaStories:   function(type){
		var currentStoriesType;
		switch(type) {
		    case 'daily':
		        currentStoriesType = SportsBuzzClient.storiesType.daily;
		        break;
		    case 'weekly':
		        currentStoriesType = SportsBuzzClient.storiesType.weekly;
		        break;
	        case 'monthly':
		        currentStoriesType = SportsBuzzClient.storiesType.monthly;
		        break;
		    default:
		        return;
		}
  		SportsBuzzClient.CachedData.nbaStories = new SportsBuzzClient.Collections.Stories(); 
		SportsBuzzClient.CachedData.nbaStories.url = SportsBuzzClient.APIRoot + 'stories/NBA/' + currentStoriesType;
		SportsBuzzClient.CachedData.nbaStories.tweetsType = SportsBuzzClient.tweetsCategory.NBA;
		SportsBuzzClient.Views.tweetsView = new SportsBuzzClient.Views.Stories({collection: SportsBuzzClient.CachedData.nbaStories});
    	SportsBuzzClient.CachedData.nbaStories.fetch({reset: true});
	},

	nflStories:   function(type){
		var currentStoriesType;
		switch(type) {
		    case 'daily':
		        currentStoriesType = SportsBuzzClient.storiesType.daily;
		        break;
		    case 'weekly':
		        currentStoriesType = SportsBuzzClient.storiesType.weekly;
		        break;
	        case 'monthly':
		        currentStoriesType = SportsBuzzClient.storiesType.monthly;
		        break;
		    default:
		        return;
		}
  		SportsBuzzClient.CachedData.nflStories[type] = new SportsBuzzClient.Collections.Stories(); 
		SportsBuzzClient.CachedData.nflStories[type].url = SportsBuzzClient.APIRoot + 'stories/NFL/' + currentStoriesType;
	    SportsBuzzClient.Views.tweetsView = new SportsBuzzClient.Views.Stories({collection: SportsBuzzClient.CachedData.nflStories[type], headerText:'Story tweets'});
	    SportsBuzzClient.CachedData.nflStories[type].fetch({reset: true});
	},

	story: function(id){
		SportsBuzzClient.CachedData.currentStoryTweets = new SportsBuzzClient.Collections.Tweets(); 
		SportsBuzzClient.CachedData.currentStoryTweets.url = SportsBuzzClient.APIRoot + 'stories/' + id;
	    SportsBuzzClient.CachedData.currentStoryTweets.feedType = SportsBuzzClient.feedType.story;
	    SportsBuzzClient.Views.currentStoryTweetsView = new SportsBuzzClient.Views.Tweets({collection: SportsBuzzClient.CachedData.currentStoryTweets});
	    SportsBuzzClient.CachedData.currentStoryTweets.fetch({reset: true});
	},

	allLoadMore:   function(){
		SportsBuzzClient.CachedData.allTweets.updateUrlWithLastModelTimestamp();
		// SportsBuzzClient.Views.tweetsView = new SportsBuzzClient.Views.Tweets({collection: SportsBuzzClient.CachedData.allTweets});
		SportsBuzzClient.CachedData.allTweets.fetch({remove: false});		
	},

	nbaLoadMore:   function(){
		SportsBuzzClient.CachedData.nbaTweets.updateUrlWithLastModelTimestamp();
		// SportsBuzzClient.Views.tweetsView = new SportsBuzzClient.Views.Tweets({collection: SportsBuzzClient.CachedData.nbaTweets});
		SportsBuzzClient.CachedData.nbaTweets.fetch({remove: false});
	},

	nflLoadMore:   function(){
		SportsBuzzClient.CachedData.nflTweets.updateUrlWithLastModelTimestamp();
		// SportsBuzzClient.Views.tweetsView = new SportsBuzzClient.Views.Tweets({collection: SportsBuzzClient.CachedData.nflTweets});
		SportsBuzzClient.CachedData.nflTweets.fetch({remove: false});
	},

	archive: function(){
		SportsBuzzClient.Views.tweetsView = new SportsBuzzClient.Views.Archive();
	},

	archivedStories:   function(category, type, timestamp){
		var currentStoriesType;
		switch(type.toLowerCase()) {
		    case 'daily':
		        currentStoriesType = SportsBuzzClient.storiesType.daily;
		        break;
		    case 'weekly':
		        currentStoriesType = SportsBuzzClient.storiesType.weekly;
		        break;
	        case 'monthly':
		        currentStoriesType = SportsBuzzClient.storiesType.monthly;
		        break;
		    default:
		        return;
		}

		var archivedStories = new SportsBuzzClient.Collections.Stories(); 
		archivedStories.url = SportsBuzzClient.APIRoot + 'archived/stories/'+category+'/'+ currentStoriesType + '/' + timestamp;
		SportsBuzzClient.Views.tweetsView = new SportsBuzzClient.Views.Stories({collection: archivedStories});
    	archivedStories.fetch({reset: true});


  // 		SportsBuzzClient.CachedData.nbaStories = new SportsBuzzClient.Collections.Stories(); 
		// SportsBuzzClient.CachedData.nbaStories.url = SportsBuzzClient.APIRoot + 'stories/NBA/' + currentStoriesType;
		// SportsBuzzClient.CachedData.nbaStories.tweetsType = SportsBuzzClient.tweetsCategory.NBA;
		// SportsBuzzClient.Views.tweetsView = new SportsBuzzClient.Views.Stories({collection: SportsBuzzClient.CachedData.nbaStories});
  //   	SportsBuzzClient.CachedData.nbaStories.fetch({reset: true});
	},


  });

})();
