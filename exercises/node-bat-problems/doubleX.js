// Given a string, return true if the first instance of 'x' in the string is
// immediately followed by another 'x'.

var doubleX=function(str) {
	var locateX = str.indexOf('x');
 	return str[locateX] + str[locateX + 1] === 'xx' ? true : false;
}
