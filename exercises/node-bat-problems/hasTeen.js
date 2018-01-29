// We'll say that a number is 'teen' if it is in the range 13..19 inclusive.
// Given 3 int values, return true if 1 or more of them are teen.

var hasTeen = function(a, b, c){
	var teenArr = [13, 14, 15, 16, 17, 18, 19];
  	for(var i = 0; i < teenArr.length; i++){
    	if((a === teenArr[i]) || (b === teenArr[i]) || (c === teenArr[i])){
        	return true;
        }
    }
  	return false;
}
