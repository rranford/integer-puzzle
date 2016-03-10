var calculator = require('./../components/calculator');
var assert = require('assert');

describe('calculator module',function(){
	it('should load from the require statement',function(){
		assert.ok(calculator);
	});
});
