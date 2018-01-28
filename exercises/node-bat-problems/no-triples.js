// Given an array of ints, we'll say that a triple is a value appearing
// 3 times in a row in the array. Return true if the array does not contain
// any triples.

var noTriples = function(nums) {
    // if the array is less than 3, return true.
  	if(nums.length < 3) {
    	return true;
    }
    // loop through the array
  	for(var i = 0; i < nums.length; i++) {
        // if num[i] occurs 3x's in a row, return false. else do nothing.
    	if((nums[i] === nums[i + 1]) && (nums[i + 1] === nums[i + 2])) {
        	return false;
        }
    }
    // return true if all other cases have passed
  	return true;
}
