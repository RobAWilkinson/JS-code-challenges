ghost = {
     color : function () {
        var number = Math.floor(Math.random() * 4);
        var colors = ["white", "yellow", "purple", "red"];
        return colors[number];
    }
};

function evenlyDivide(number) {
    var dividesBy = [];
    for (var i = 0 ; i < number ; i++){
        if (number%i === 0){
            dividesBy.push(i);
        }
    }
    return dividesBy;
}

function howManyLightsabersDoYouOwn(name){
    if (name==="Zach"){
        return 18;
    }
    else {
        return 0;
    }
}

function last(input){
    if (typeof input ==="object"){
        return input[input.length-1];
    }
    else {
    input.split('');
    return input[input.length-1];
    }
}

function palindrome(string){
    var forward = string;
    var backward = "";
    for (var i = forward.length - 1; i >= 0; i--) {
    backward += forward[i];
    }
    if (forward === backward){
        return true;
    }
    else {
        return false;
    }
}

function typing(input){
    return typeof input + "=" + input;
}

String.prototype.reverse = function() {
    var Forward = this;
    var Backward = "";
    for (var i = Forward.length - 1; i >= 0; i--){
        Backward += Forward[i];
    }
    return Backward;
}

function solution(a, b){
    if (a.length > b.length){
        return b + a + b;
    }
    else {
        return a+b+a;
    }
}

function squareRoot (number) {
    if (Math.sqrt(number)%1 === 0) {
        return true;
    }
    else {
        return false;
    }
}