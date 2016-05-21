/*global beforeEach, describe, it, assert, expect  */
'use strict';

describe('Stories Collection', function () {

    beforeEach(function () {
        this.StoriesCollection = new SportsBuzzClient.Collections.Stories([
	        							{EndDate: "/Date(1398981600000+0200)/", StartDate: "/Date(1398376800000+0200)/", Title: "Thunder are on a 14-0 run and the Grizzlies' lead …th in Memphis. #OKCvsMEM ↵↵http://t.co/YDafpBl7RY", Type: 1, id: "5334b66a-5609-45aa-ab10-149f94db4111"},
	        							{EndDate: "/Date(1398981600000+0200)/", StartDate: "/Date(1398376800000+0200)/", Title: "How great are the NBA playoffs?", Type: 1, id: "0d744542-0977-425d-b983-d44c4f457798"}
	        						]);
    });

    it('StoriesCollection should have 2 items', function() {
		assert.equal(this.StoriesCollection.length, 2);
	});

	it('StoriesCollection first element should have EndDate', function() {
		expect(this.StoriesCollection.models[0].attributes.EndDate).to.not.empty;
	});

	it('StoriesCollection first element should have StartDate', function() {
		expect(this.StoriesCollection.models[0].attributes.StartDate).to.not.empty;
	});

	it('StoriesCollection first element should have Title', function() {
		expect(this.StoriesCollection.models[0].attributes.Title).to.not.empty;
	});

	it('StoriesCollection first element should have Type', function() {
		expect(this.StoriesCollection.models[0].attributes.Type).to.not.empty;
	});

	it('StoriesCollection first element should have id', function() {
		expect(this.StoriesCollection.models[0].attributes.id).to.not.empty;
	});

});
