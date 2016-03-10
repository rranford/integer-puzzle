var Components = require('./components');
var readline = require("readline");

reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var inout = new Components.Inout();
console.log(inout.startMessage());


var calc = new Components.Calculator();

userPrompt = function(){
	reader.question("Please provide a number?", function(providedNumber){
		if(isNaN(providedNumber)){
			tryagain(userPrompt);
		}
		else {
			var processed = calc.process(providedNumber);
			console.log(processed);
			userPrompt();
		}
	});

};

tryagain = function(callback){
	console.log('Error that was not a number, please try agian');
	callback();
};

userPrompt();





