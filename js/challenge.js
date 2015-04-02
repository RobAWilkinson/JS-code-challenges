ghost = {
	color: function() {
		var random = Math.ceil(Math.random()*4);
		var color = null;
		if (random == 1) {
			color = "white";
		}
		else if (random == 2) {
			color = "yellow";
		}
		else if (random == 3) {
			color = "purple";
		}
		else if (random == 4) {
			color = "red";
		}
		return color;
	}

};

function evenlyDivide(num) {
	var array = [];
	for (var i = 1; i <= num; i++) {
		if (num % i == 0) {
			array.push(i);
		}
	}
	return array;
}

function howManyLightsabersDoYouOwn(name) {
	if (name === "Zach") {
		return 18;
	}
	else {
		return 0;
	}
}

function last(input) {
	if (typeof(input) == "string") {
		return input.charAt(input.length-1)
	}
	else if (typeof(input) == "object") {
		return input.pop()
	}
}

function makeChange(money) {
	var dollars = 0;
	var change = 0;
	var quarters = 0;
	var dimes = 0;
	var nickles = 0;
	var pennies = 0;
	if (money > 1) {
		dollars = Math.floor(money);
		change = money - Math.floor(money)
	}
	console.log('dollars: ' + dollars + 'change: ' + change)
}

// makeChange(1.32)

function palindrome(string) {
	var array = string.toLowerCase().split('');
	var test = null;
	if (string.length % 2 != 0) {
		return false;
	}
	else {
		for (var i = 0; i < array.length/2; i++) {
			if (array[i] === array[array.length-1-i]) {
				test = true;
			}
		}
		return test;
	}
}

function typing(param) {
	return typeof(param) + '=' + param;
}

String.prototype.reverse = function() {
	var array = [];
	for (var key in this) {
		array.push(this[key])
	}
	array.pop();
	return array.reverse().join('').toString();
}

function solution(a, b) {
	var short = null;
	var long = null;
	if (a.length > b.length) {
		long = a;
		short = b;
	}
	else if (b.length > a.length) {
		long = b;
		short = a;
	}
	return short+long+short;
}

function squareRoot(num) {
	if (Math.sqrt(num) % 1 == 0) {
		return true;
	}
	else {
		return false;
	}
}