var Components = require('./../components');
var assert = require('assert');
var readline = require("readline");

stubreader = readline.createInterface({
	input: process.stdin,
	output: process.stout
});

describe('inout module',function(){
	it('should load Inout module',function(){
		var testSubject = new Components.Inout();
		assert.ok(testSubject);
	});
	
	it('should return instruction message on startup method',function(){
		var testSubject = new Components.Inout(stubreader);
		assert.equal(testSubject.startMessage(),"I'm going to calculate the prime numbers up to the number you provide");
	});
});
