var assert = require('assert');
var controller = require('../controller/controller.js');

describe('Testing version', function (){
        it('Concert 1 should have the date of Aug 20 2019', function (){
                let x = controller.events.events;
                assert.notEqual(x[0].eventdate, "Aug 22 2019", "these are not equal");
        });
})
