var readline = require("readline");

reader = readline.createInterface({
	input: process.stdin,
	output: process.stout
});

function Inout(reader){
	this.reader = reader;
};

Inout.prototype.startMessage = function(){
	var that = this;
	return "I'm going to calculate the prime numbers up to the number you provide";
};

module.exports = Inout;