// Given a string and an int n, return a string made of the first and last n chars
// from the string. The string length will be at least n.

var nTwice = function(str, n){
	if(n === 0){
    	return '';
    }
  
  	return str.slice(0, n) + str.slice(str.length - n, str.length);
}
