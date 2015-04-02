var ghost = {
	color: function() {
		var colors = ["white", "yellow", "purple", "red"];
		var num = Math.round(3 * Math.random());
		return colors[num];
	}
	
};

function evenlyDivide(int) {
	var myArray = [];
	for (var i = 0; i < int+1; i++) {
		if (int % i === 0) {
			myArray.push(i);
		}

	}
	return myArray;
}

function howManyLightsabersDoYouOwn(name) {
	if(name === "Zach") {
		return 18;
	}
	else {
		return 0;
	}
}

function last(input) {
    if (typeof input === "string") {
        var x = input.split("").pop()
	    return x;
    }
    else {
        return input.pop();
    }
}

function palindrome(string) {
    var x = string.split("");
    var y = [];
    for (var i = string.length -1; i >= 0; i--) {
        y.push(x[i]);
    }
    
    var xString = x.toString();
    var yString = y.toString();

    if(xString.toLowerCase() == yString.toLowerCase()) {
        return true;
    }
    else {
        return false;
    }
}

function typing(input) {
    var type = typeof input;
    var value = input;
    return type + "=" + value;
}

String.prototype.reverse = function(input) {
   var x =  this.split("")
   x = x.reverse()
   return x.join("");
}

function solution(str1, str2) {
    var returnVal;
    if (str1.length > str2.length) {
        returnVal = str2 + str1 + str2;
    }
    else {
        returnVal = str1 + str2 + str1;
    }
    return returnVal;
}

function squareRoot(num) {
    value = Math.sqrt(num);
    if (value % 1 === 0) {
        return true;
    }
    else {
        return false;
    }
}