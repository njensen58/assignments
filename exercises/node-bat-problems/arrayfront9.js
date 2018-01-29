// Given an array of ints, return true if one of the first 4 elements in
// the array is a 9. The array length may be less than 4

var arrayFront9 = function(nums){
	var emptyArr = [];
  	for(var i = 0; i < 4; i++){
    	if(nums[i] === 9){
        	emptyArr.push(nums[i]);
        }
    }
  	return emptyArr.length >= 1 ? true : false;
}
