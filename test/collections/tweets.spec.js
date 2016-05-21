/*global beforeEach, describe, it, assert, expect  */
'use strict';

describe('Tweets Collection', function () {

    beforeEach(function () {
        this.tweetsCollection = new SportsBuzzClient.Collections.Tweets([{ProfileImageUrl: 'http://pbs.twimg.com/profile_images/646495659848142848/fzOnXSOe_normal.jpg', ScreenName: 'festus', TweetText: '?? https://t.co/cQwn9Zotw3', UserName: 'Festus Ezeli', datePosted: 1462600464000},{ProfileImageUrl: 'http://pbs.twimg.com/profile_images/719022578980020228/Mmz1g64f_normal.jpg', ScreenName: 'ESPNNBA', TweetText: 'Both road teams got the win tonight. How\'d your squad do? https://t.co/jhd3i200Cn', UserName: 'NBA on ESPN', datePosted: 1462598466000},{ProfileImageUrl: 'http://pbs.twimg.com/profile_images/719022578980020228/Mmz1g64f_normal.jpg', ScreenName: 'ESPNNBA', TweetText: 'RT @SportsCenter: KD &amp; Westbrook join elite co…for the 33rd time. (via @EliasSports) https://t.…', UserName: 'NBA on ESPN', datePosted: 1462598073000}]);
    });

    it('tweetsCollection should have 3 items', function() {
		assert.equal(this.tweetsCollection.length, 3);
	});

	it('tweetsCollection first element should have ProfileImageUrl', function() {
		expect(this.tweetsCollection.models[0].attributes.ProfileImageUrl).to.not.empty;
	});

	it('tweetsCollection first element should have ScreenName', function() {
		expect(this.tweetsCollection.models[0].attributes.ScreenName).to.not.empty;
	});

	it('tweetsCollection first element should have UserName', function() {
		expect(this.tweetsCollection.models[0].attributes.UserName).to.not.empty;
	});

	it('tweetsCollection first element should have TweetText', function() {
		expect(this.tweetsCollection.models[0].attributes.TweetText).to.not.empty;
	});

	it('tweetsCollection first element should have datePosted', function() {
		expect(this.tweetsCollection.models[0].attributes.datePosted).to.not.empty;
	});

	it('tweetsCollection getLastModelTimestamp should return last model timestamp', function() {
		expect(this.tweetsCollection.getLastModelTimestamp()).to.equal(1462598073000);
	});

	it('tweetsCollection updateUrlWithLastModelTimestamp should update the url with the latest timestamp', function() {
		this.tweetsCollection.updateUrlWithLastModelTimestamp();
		expect(this.tweetsCollection.url).to.equal(SportsBuzzClient.APIRoot + 'tweets/All/1462598073000');
	});

});
