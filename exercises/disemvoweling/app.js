
// Create a function that removes all vowels and spaces from a string.  Return an object with two keys 'str' and 'vowels',

module.exports = function(str) {
    return str
        .toLowerCase()
        .split('')
        .reduce((myObj, letter) => {
            if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
                myObj.vowels += letter;
            } else if(letter !== ' ') {
                myObj.str += letter;
            }
                return myObj;
        }, {str: '', vowels: ''})
}

// console.log(disemvowel('Pickle Rick!')) // {str: 'pckrick!', vowels: 'iei'};
