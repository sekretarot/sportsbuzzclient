/*global beforeEach, describe, it, assert, expect  */
'use strict';

describe('Tweet Model', function () {

    beforeEach(function () {
        this.TweetModel = new SportsBuzzClient.Models.Tweet({ProfileImageUrl: 'http://pbs.twimg.com/profile_images/646495659848142848/fzOnXSOe_normal.jpg', ScreenName: 'festus', TweetText: '?? https://t.co/cQwn9Zotw3', UserName: 'Festus Ezeli', datePosted: 1462600464000});
    });

    it('model should have ProfileImageUrl', function() {
		expect(this.TweetModel.attributes.ProfileImageUrl).to.not.empty;
	});

	it('model ProfileImageUrl should be string', function() {
		expect(this.TweetModel.attributes.ProfileImageUrl).to.be.a('string');
	});

	it('model should have ScreenName', function() {
		expect(this.TweetModel.attributes.ScreenName).to.not.empty;
	});

	it('model ScreenName should be string', function() {
		expect(this.TweetModel.attributes.ScreenName).to.be.a('string');
	});

	it('model should have UserName', function() {
		expect(this.TweetModel.attributes.UserName).to.not.empty;
	});

	it('model UserName should be string', function() {
		expect(this.TweetModel.attributes.UserName).to.be.a('string');
	});

	it('model should have TweetText', function() {
		expect(this.TweetModel.attributes.TweetText).to.not.empty;
	});

	it('model TweetText should be string', function() {
		expect(this.TweetModel.attributes.TweetText).to.be.a('string');
	});

	it('model should have datePosted', function() {
		expect(this.TweetModel.attributes.datePosted).to.not.empty;
	});

	it('model datePosted should be number', function() {
		expect(this.TweetModel.attributes.datePosted).to.be.a('number');
	});


});