var removeA = function(str) {
    var newStr = str.toLowerCase();
    var result = '';
    var firstAIndex = newStr.indexOf('a');
        for(var i = 0; i < newStr.length; i++){
            if(newStr[i] === 'a'){
            } else {
                result += newStr[i];
            }
        }
        return result;
}

console.log(removeA('All About The BenJaMins AdAm'));
