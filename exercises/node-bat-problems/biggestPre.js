// Given an array of strings, find the longest common prefix each string has.
// i.e. a list of yes, yodel, yeah should output y.

var biggestPre = function(input){
	var shortest = 100;
  	for(var i = 0; i < input.length; i++){
    	var len = 0;
      	for(var j = 0; j < input[0].length; j++){
        	if(input[0][j] === input[i][j]){
            	len++;
            }
        }
      	if(len < shortest){
        	shortest = len;
        }
    }
  	return input[0].slice(0, shortest);
}
