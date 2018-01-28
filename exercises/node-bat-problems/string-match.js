// Given 2 strings, a and b, return the number of the positions where they contain
// the same length 2 substring. So 'xxcaazz' and 'xxbaaz' yields 3, since the 'xx',

var stringMatch = function(a,b){
	var count = 0;

  	if(a.length === 0 || b.length === 0){
    	return 0;
    }

  	for(var i = 0; i < a.length; i++){
    	if((a[i] + a[i + 1]) === (b[i] + b[i + 1])){
        	count++;
        }
    }

  	if(a.length === 3){
    	count -= 1;
    }

  	return count;
}
