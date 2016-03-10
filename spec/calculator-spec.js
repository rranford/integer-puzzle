var Components = require('./../components');
var assert = require('assert');

describe('Calculator module',function(){
	it('should load Calculator module',function(){
		var testSubject = new Components.Calculator();
		assert.ok(testSubject);
	});
	
	it('should return user input from process method',function(){
		var testSubject = new Components.Calculator();
		assert.ok(testSubject.process(3),3);
	});
});