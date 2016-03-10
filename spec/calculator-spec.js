var Components = require('./../components');
var assert = require('assert');

describe('Calculator module',function(){
	it('should load Calculator module',function(){
		var testSubject = new Components.Calculator();
		assert.ok(testSubject);
	});
});