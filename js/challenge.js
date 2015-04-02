ghost = {
  color: function() {
    colors = ['white','yellow','purple','red'];
    return colors[Math.floor(Math.random()*colors.length)];
  }
};

function evenlyDivide(num) {
 var results = [];
  for(i = num; i > 0; i--) {
    if( (num % i) === 0) {
      results.unshift(i);
    }
  }
  return results;
}

function howManyLightsabersDoYouOwn(name) {
  switch(name) {
    case "Zach":
      return 18;
    default:
      return 0;
  }
}
function last(input) {
  return input[input.length - 1];
}
function palindrome(string) {
  var reversed = "";
  for(i = string.length - 1; i >= 0; i--){
    reversed += string[i];
  }
  if(reversed === string){
    return true;
  }else{
    return false;
  }
}
function solution(x, y) {
  var output;
  if( x.length > y.length) {
    output = String(y) + String(x) + String(y);
  } else {
    output = String(x) + String(y) + String(x);
  }
  return output;
}
function squareRoot(num) {
  if(Math.sqrt(num) % 1 === 0) {
    return true;
  } else {
    return false;
  }
}



