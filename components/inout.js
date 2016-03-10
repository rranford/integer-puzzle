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

Inout.prototype.promptUser = function(){
	var that = this;
	reader.question("Please provide a number?");
}

module.exports = Inout;