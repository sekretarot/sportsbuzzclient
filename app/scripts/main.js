/*global sports-buzz-client, $*/


window.SportsBuzzClient = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  CachedData: {},
  APIRoot: 'http://localhost:33333/RestServiceImpl.svc/',
  init: function () {
    'use strict';
    console.log('Hello from Backbone!');       
    new SportsBuzzClient.Routers.Router;
    Backbone.history.start();
  }
};

$(document).ready(function () {
  'use strict';
  SportsBuzzClient.init();
});
