var assert = require('assert');
var controller = require('../controller/controller.js');

describe('Testing version', function (){
	it('Concert 1 should have the date of Aug 20 1019', function (){
		let x = controller.events.events;
		assert.equal(x[0].eventdate, "Aug 20 2019");
	});
})
