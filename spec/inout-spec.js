var inout = require('./../components/inout');
var assert = require('assert');

describe('inout module',function(){
	it('should load from the require statement',function(){
		assert.ok(inout);
	});
});
