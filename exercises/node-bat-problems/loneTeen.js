// We'll say that a number is 'teen' if it is in the range 13..19 inclusive.
// Given 2 int values, return true if one or the other is teen, but not both

var loneTeen = function(a, b) {
	var teenArr = [13, 14, 15, 16, 17, 18, 19];
  	for(var i = 0; i < teenArr.length; i++){
    	for(var j = 0; j < teenArr.length; j++){
        	if(a === teenArr[i] && b === teenArr[j]){
            	return false;
            }
        }

      if(a === teenArr[i] || b === teenArr[i]){
      	return true;
      }
   }
  	return false;
}
