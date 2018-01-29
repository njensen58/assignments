// Given a string, return a version where all the 'x' have been removed.
// Except an 'x' at the very start or end should not be removed.

var stringX = function(str){
	var noXes = '';

  	if(str === ''){
    	return str;
    }

  	for(var i = 1; i < str.length - 1; i++){
		if(str[i] !== 'x') {
        	noXes += str[i];
        }
    }
  	return str[0] + noXes + str[str.length - 1];
}
