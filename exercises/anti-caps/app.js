
function isCaps(letter) {
  return letter === letter.toUpperCase();
}


function antiCaps(str){
    var newStr = '';
    for(var i = 0; i < str.length; i++){
        var currentLetter = isCaps(str[i]);
        if(currentLetter){
            newStr += str[i].toLowerCase();
        } else {
            newStr += str[i].toUpperCase();
        }
    }
    return newStr;
}




console.log(antiCaps('Hello'));
console.log(antiCaps('racEcar'));
console.log(antiCaps('bAnAnA'));
