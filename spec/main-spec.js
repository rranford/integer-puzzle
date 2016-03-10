var testsubject = require('./../main');

describe('Initial output from main',function(){
	it("should output nothing",function(){
		expect(testsubject.tempMethod()).toBe("Initial code");
	});
});