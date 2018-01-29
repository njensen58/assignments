var stringE = function(str) {
	var eArr = [];

  	if(str.length < 1){
    	return false;
    }

  	for(var i = 0; i < str.length; i++){
    	if(str[i] === 'e'){
        	eArr.push(str[i]);
        }
    }

  	return eArr.length >= 1 && eArr.length <= 3 ? true : false;
}
