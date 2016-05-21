this["JST"] = this["JST"] || {};

this["JST"]["app/scripts/templates/archive.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if(headerText) {;
__p += '\n\t<h1 id="header-text">' +
((__t = ( headerText )) == null ? '' : __t) +
'</h1>\n';
 } ;
__p += '\t\n\n<div id="archive" style="overflow:hidden;">\n    <div class="form-group">\n        <div class="row">\n            <div class="col-md-8">\n                <div id="archive-datetimepicker"></div>\n            </div>\n            <div class="col-md-4">\n            \t<div id="category-radio">\n\t                <div class="radio-inline">\n\t\t\t\t\t  <label><input checked  type="radio" name="category-radio" class="category-radio">NBA</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="radio-inline">\n\t\t\t\t\t  <label><input type="radio" name="category-radio" class="category-radio">NFL</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<br />\n\t\t\t\t<div>\n\t                <div class="radio-inline">\n\t\t\t\t\t  <label><input checked  type="radio" name="digest-radio" class="digest-radio">Daily</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="radio-inline">\n\t\t\t\t\t  <label><input type="radio" name="digest-radio" class="digest-radio">Weekly</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="radio-inline">\n\t\t\t\t\t  <label><input type="radio" name="digest-radio" class="digest-radio">Monthly</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<br />\n\t\t\t\t<div>\n\t                <a id="archive-submit"  class="btn btn-lg btn-success col-xs-12"> Get archived data </a>\n\t\t\t\t</div>\n            </div>\n        </div>\n    </div>\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/digest-buttons.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '\n';
if (type == SportsBuzzClient.tweetsCategory.NBA) { ;
__p += '\n\t<a href="#NBAStories/daily" class="btn btn-lg btn-success col-sm-4 col-xs-12">\n\t\tDaily digest\n\t</a>\n\t<a href="#NBAStories/weekly" class="btn btn-lg btn-success col-sm-4 col-xs-12">\n\t\tWeekly digest\n\t</a>\n\t<a href="#NBAStories/monthly" class="btn btn-lg btn-success col-sm-4 col-xs-12">\n\t\tMonthly digest\n\t</a>\n';
 } ;
__p += '\n\n';
if (type == SportsBuzzClient.tweetsCategory.NFL) { ;
__p += '\n\t<a href="#NFLStories/daily" class="btn btn-lg btn-success col-sm-4 col-xs-12">\n\t\tDaily digest\n\t</a>\n\t<a href="#NFLStories/weekly" class="btn btn-lg btn-success col-sm-4 col-xs-12">\n\t\tWeekly digest\n\t</a>\n\t<a href="#NFLStories/monthly" class="btn btn-lg btn-success col-sm-4 col-xs-12">\n\t\tMonthly digest\n\t</a>\n';
 } ;
__p += '\n';

}
return __p
};

this["JST"]["app/scripts/templates/stories.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<h2>Popular stories</h2>\n\n<div id="stories">\n\t';
 _.each(stories, function(story){ ;
__p += '\n\t\t<div  class="story">\n\t\t\t<a href="#story/' +
((__t = ( story.id )) == null ? '' : __t) +
'">\t\n\t\t\t\t';
if (story.Type == 0) { ;
__p += '\n\t\t\t\t\t<strong>Daily digest</strong> \n\t\t\t\t';
 } else if (story.Type == 1) {;
__p += '\t\n\t\t\t\t\t<strong>Weekly digest</strong> \n\t\t\t\t';
 } else if (story.Type == 2) {;
__p += '\t\n\t\t\t\t\t<strong>Monthly digest</strong> \n\t\t\t\t';
 } ;
__p += '\t\n\t\t\t\t<br/>\n\t\t\t\t<span>' +
((__t = ( story.Title)) == null ? '' : __t) +
'</span> \n\t\t\t</a> <br>\n\t\t</div>\n\t';
 }); ;
__p += '\n\t';
 if(!stories.length) {;
__p += ' We\'re sorry we couldn\'t find any stories for that period. ';
} ;
__p += '\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/tweet.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<p>' +
((__t = ( author )) == null ? '' : __t) +
'</p>\n<p>' +
((__t = ( text )) == null ? '' : __t) +
'</p>';

}
return __p
};

this["JST"]["app/scripts/templates/tweets.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if(headerText) {;
__p += '\n\t<h1 id="header-text">' +
((__t = ( headerText )) == null ? '' : __t) +
'</h1>\n';
 } ;
__p += '\t\n\n<!-- Digest buttons -->\n';
if (type == SportsBuzzClient.tweetsCategory.NBA) { ;
__p += '\n\t<a href="#NBAStories/daily" class="btn btn-lg btn-success col-sm-4 col-xs-12">\n\t\tDaily digest\n\t</a>\n\t<a href="#NBAStories/weekly" class="btn btn-lg btn-success col-sm-4 col-xs-12">\n\t\tWeekly digest\n\t</a>\n\t<a href="#NBAStories/monthly" class="btn btn-lg btn-success col-sm-4 col-xs-12">\n\t\tMonthly digest\n\t</a>\n';
 } ;
__p += '\n\n';
if (type == SportsBuzzClient.tweetsCategory.NFL) { ;
__p += '\n\t<a href="#NFLStories/daily" class="btn btn-lg btn-success col-sm-4 col-xs-12">\n\t\tDaily digest\n\t</a>\n\t<a href="#NFLStories/weekly" class="btn btn-lg btn-success col-sm-4 col-xs-12">\n\t\tWeekly digest\n\t</a>\n\t<a href="#NFLStories/monthly" class="btn btn-lg btn-success col-sm-4 col-xs-12">\n\t\tMonthly digest\n\t</a>\n';
 } ;
__p += '\n\n<!-- Tweets feed -->\n<div id="tweets" class="row">\n\t<div class=" col-sm-12 col-md-4">\n\t\t';
 _.each(tweets, function(tweet,index){ ;
__p += '\n\t\t\t';
 if(index%3==0) {;
__p += '\n\t\t\t\t<div id="tweets-col-1" class="tweet panel panel-default panel-animated animated fadeInUp">\t\n\t\t\t\t\t<div class="profile-line clearfix">\t\n\t\t\t\t\t\t<img class="img-circle pull-left" src="' +
((__t = ( tweet.ProfileImageUrl )) == null ? '' : __t) +
'">\n\t\t\t\t\t\t<div class="text-14"><strong>' +
((__t = ( tweet.UserName )) == null ? '' : __t) +
'</strong></div>\n\t\t\t\t\t\t<span>' +
((__t = ( tweet.ScreenName )) == null ? '' : __t) +
' </span> \n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="panel-body"> \n\t\t\t\t\t\t' +
((__t = ( tweet.TweetText )) == null ? '' : __t) +
'\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class="tweet-time">' +
((__t = ( moment(tweet.datePosted).fromNow() )) == null ? '' : __t) +
'</span>\n\t\t\t\t</div>\n\t\t\t';
 } ;
__p += '\t\n\t\t';
 }); ;
__p += '\n\t</div>\n\t<div class=" col-sm-12 col-md-4">\n\t\t';
 _.each(tweets, function(tweet,index){ ;
__p += '\n\t\t\t';
 if(index%3==1) {;
__p += '\n\t\t\t\t<div id="tweets-col-2" class="tweet panel panel-default panel-animated animated fadeInUp">\t\n\t\t\t\t\t<div class="profile-line clearfix">\t\n\t\t\t\t\t\t<img class="img-circle pull-left" src="' +
((__t = ( tweet.ProfileImageUrl )) == null ? '' : __t) +
'">\n\t\t\t\t\t\t<div class="text-14"><strong>' +
((__t = ( tweet.UserName )) == null ? '' : __t) +
'</strong></div>\n\t\t\t\t\t\t<span>' +
((__t = ( tweet.ScreenName )) == null ? '' : __t) +
' </span> \n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="panel-body"> \n\t\t\t\t\t\t' +
((__t = ( tweet.TweetText )) == null ? '' : __t) +
'\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class="tweet-time">' +
((__t = ( moment(tweet.datePosted).fromNow() )) == null ? '' : __t) +
'</span>\n\t\t\t\t</div>\n\t\t\t';
 } ;
__p += '\t\n\t\t';
 }); ;
__p += '\n\t</div>\n\t<div class="col-sm-12 col-md-4">\n\t\t';
 _.each(tweets, function(tweet,index){ ;
__p += '\n\t\t\t';
 if(index%3==2) {;
__p += '\n\t\t\t\t<div id="tweets-col-2" class="tweet panel panel-default panel-animated animated fadeInUp">\t\n\t\t\t\t\t<div class="profile-line clearfix">\t\n\t\t\t\t\t\t<img class="img-circle pull-left" src="' +
((__t = ( tweet.ProfileImageUrl )) == null ? '' : __t) +
'">\n\t\t\t\t\t\t<div class="text-14"><strong>' +
((__t = ( tweet.UserName )) == null ? '' : __t) +
'</strong></div>\n\t\t\t\t\t\t<span>' +
((__t = ( tweet.ScreenName )) == null ? '' : __t) +
' </span> \n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="panel-body"> \n\t\t\t\t\t\t' +
((__t = ( tweet.TweetText )) == null ? '' : __t) +
'\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class="tweet-time">' +
((__t = ( moment(tweet.datePosted).fromNow() )) == null ? '' : __t) +
'</span>\n\t\t\t\t</div>\n\t\t\t';
 } ;
__p += '\t\n\t\t';
 }); ;
__p += '\n\t</div>\n</div>\n<a id="loadMore" href="" class="btn btn-lg btn-success">Load more...</a>\n';

}
return __p
};