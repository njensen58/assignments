// Given a string, return a new string made of every other char
// starting with the first, so 'Hello' yields 'Hlo'.
// Return n copies of the front;

var stringBits = function(n){
	var newStr = '';

  	if(n.length < 2){
    	return n;
    } else if(n.length === 2){
    	return n[0];
    }

  	for(var i = 0; i < n.length; i += 2){
    	newStr += n[i];
    }
  	return newStr;
}
