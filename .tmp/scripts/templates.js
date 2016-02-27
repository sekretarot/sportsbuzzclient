this["JST"] = this["JST"] || {};

this["JST"]["app/scripts/templates/stories.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<h2>Popular stories</h2>\n\n<div id="stories">\n\t';
 _.each(stories, function(story){ ;
__p += '\n\t\t<div class="story">\t\n\t\t\t';
if (story.Type = 0) { ;
__p += '\n\t\t\t\t<strong>Daily digest</strong> \n\t\t\t';
 } else if (story.Type = 1) {;
__p += '\t\n\t\t\t\t<strong>Weekly digest</strong> \n\t\t\t';
 } else if (story.Type = 2) {;
__p += '\t\n\t\t\t\t<strong>Monthly digest</strong> \n\t\t\t';
 } ;
__p += '\t\n\t\t\t<br/>\n\t\t\t<span>' +
((__t = ( story.Title)) == null ? '' : __t) +
'</span> \n\t\t</div>\n\t';
 }); ;
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
__p += '<div id="tweets">\n\t';
 _.each(tweets, function(tweet){ ;
__p += '\n\t\t<div class="tweet">\t\t\n\t\t\t<img src="' +
((__t = ( tweet.ProfileImageUrl )) == null ? '' : __t) +
'">\n\t\t\t<span>' +
((__t = ( tweet.ScreenName )) == null ? '' : __t) +
': ' +
((__t = ( tweet.TweetText )) == null ? '' : __t) +
'</span> \n\t\t\t<span>' +
((__t = ( tweet.datePosted )) == null ? '' : __t) +
'</span>\n\t\t</div>\n\t';
 }); ;
__p += '\n</div>\n<a id="loadMore" href="" class="btn btn-lg btn-success">Load more...</a>';

}
return __p
};