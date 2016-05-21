/*global beforeEach, describe, it, assert, expect  */
'use strict';

describe('Tweet View', function () {

    beforeEach(function () {
        this.TweetView = new SportsBuzzClient.Views.Tweet();
    });

    it("render() should return the view object", function() {
    	assert.equal(this.TweetView.render(), this.TweetView);
	});

});
