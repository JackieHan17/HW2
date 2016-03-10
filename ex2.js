function greet() {
	console.log('YO');
}
greet();

function logGreeting(fn) {
	fn();
}
logGreeting(greet);

var greetMe = function() {
	console.log('Hi Jackie!');
}
greetMe();

logGreeting(greetMe);

logGreeting(function() {
	console.log('Hello Jackie!');
});