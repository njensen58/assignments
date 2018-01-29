// Given a string of letters, write a function that outputs string of 1's
// and 0's of the same size corresponding to if a selected letter is in
// that position of the input string. Be sure to make x and input lowercase.
// For example isHere('l', 'hello') would output 00110.

var isHere = function(x, input){
  	var xy = x.toLowerCase();
  	var lowInput = input.toLowerCase();
  	var newStr = '';
	for(var i = 0; i < lowInput.length; i++){
    	if(lowInput[i] === xy){
        	newStr += 1;
        } else {
          	newStr += 0;
        }
    }
  	return newStr;
}
