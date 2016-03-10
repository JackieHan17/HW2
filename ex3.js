
var greetMe = function() {
	console.log('Hi Tony!');
}
greetMe();

greetMe = () => console.log('YOYO!');
greetMe();

greetYou = name => console.log('Hi ' + name + '!');
greetYou('Jackie');
