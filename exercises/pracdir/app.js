// Given an array of ints, we'll say that a triple is a value appearing
// 3 times in a row in the array. Return true if the array does not contain
// any triples.

var noTriples = function(nums) {
	var counter = 0;
  	if(nums.length < 3) {
    	return true;
    }
  	// loop through the array
  	for(var i = 0; i < nums.length; i++) {
  		// locate the most used number
        if(nums[i] === nums[i + 1] && nums[i + 2]) {
  			// if that number was used at least 3 times return false;
            return false;
        } else {
            return true;
        }
    }
}
