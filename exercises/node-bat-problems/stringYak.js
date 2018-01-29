// Suppose the string 'yak' is unlucky. Given a string, return a version where all
// the 'yak' are removed, but the 'a' can be any char. The 'yak' strings will not overlap.

var stringYak = function(str){
  	return str.replace(/yak/g, '');
}
