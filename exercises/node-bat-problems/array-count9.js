// Given an array of ints, return the number of 9's in the array.

var arrayCount9 = function(nums){
	var countArr = [];

  	if(nums.length === 0){
    	return 0;
    }

  	for(var i = 0; i < nums.length; i++){
    	if(nums[i] === 9){
        	countArr.push(nums[i]);
        }
    }

  	return countArr.length;
}
