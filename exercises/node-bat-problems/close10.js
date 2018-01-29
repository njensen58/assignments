// Given 2 int values, return whichever value is nearest to the value 10,
// or return 0 in the event of a tie. Note that Math.abs(n) returns the absolute
// value of a number.

var close10 = function(a, b){
  var x = 10;
  if(Math.abs(x - a) === Math.abs(x - b)){
  	return 0;
  }
  return Math.abs(x - a) < Math.abs(x - b) ? a : b;
}
