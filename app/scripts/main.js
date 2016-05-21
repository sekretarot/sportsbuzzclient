
window.SportsBuzzClient = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  CachedData: {
    nbaStories: {},
    nflStories: {}
  },
  APIRoot: 'http://192.168.1.4:33333/RestServiceImpl.svc/', //APIRoot: 'http://localhost:33333/RestServiceImpl.svc/',
  tweetsCategory: {
    All: 1,
    NBA: 2,
    NFL: 3,
  },
  storiesType: {
    daily: 0,
    weekly: 1,
    monthly: 2,
  },
  feedType: {
    regular: 0,
    story: 1
  },
  init: function () {
    'use strict';
    console.log('Hello from Backbone!');       
    new SportsBuzzClient.Routers.Router();
    Backbone.history.start();
    if(SportsBuzzClient.Routers.Router.route) {
      SportsBuzzClient.Routers.Router.route('all'); 
    }  
  }
};

$(document).ready(function () {
  'use strict';
  SportsBuzzClient.init();
});
