/*global beforeEach, describe, it, assert, expect  */
'use strict';

describe('Story Model', function () {

    beforeEach(function () {
        this.StoryModel = new SportsBuzzClient.Models.Story({EndDate: "/Date(1398981600000+0200)/", StartDate: "/Date(1398376800000+0200)/", Title: "Thunder are on a 14-0 run and the Grizzlies' lead …th in Memphis. #OKCvsMEM ↵↵http://t.co/YDafpBl7RY", Type: 1, id: "5334b66a-5609-45aa-ab10-149f94db4111"});
    });

    it('StoryModel should have EndDate', function() {
		expect(this.StoryModel.attributes.EndDate).to.not.empty;
	});

	it('StoryModel should have StartDate', function() {
		expect(this.StoryModel.attributes.StartDate).to.not.empty;
	});

	it('StoryModel should have Title', function() {
		expect(this.StoryModel.attributes.Title).to.not.empty;
	});

	it('StoryModel Title should be string', function() {
		expect(this.StoryModel.attributes.Title).to.be.a('string');
	});

	it('StoryModel should have Type', function() {
		expect(this.StoryModel.attributes.Type).to.not.empty;
	});

	it('StoryModel Type should be number', function() {
		expect(this.StoryModel.attributes.Type).to.be.a('number');
	});

	it('StoryModel should have id', function() {
		expect(this.StoryModel.attributes.id).to.not.empty;
	});

	it('StoryModel id should be string', function() {
		expect(this.StoryModel.attributes.id).to.be.a('string');
	});

});
