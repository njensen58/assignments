// Given a string, if the string "del" appears starting at index 1, return a string // where that "del" has been deleted. Otherwise, return the string unchanged.

var delDel = function(str) {
	return str[1] + str[2] + str[3] === 'del' ? str.slice(0, 1) + str.slice(4, str.length) : str;
}
