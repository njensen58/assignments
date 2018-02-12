const palindromeFinder = str => {
    let newStr = str.toLowerCase();
    let forward = '';
    let reverse = '';
    for(let i = 0; i < newStr.length; i++){
        if(newStr[i] !== ' ') forward += newStr[i];
    }
    for(let j = newStr.length - 1; j >= 0; j--){
        if(newStr[j] !== ' ') reverse += newStr[j];
    }
    return forward === reverse;
}



const palindromeFinderAdv = str => {
    let newStr = str.toLowerCase().split(' ').join('').replace(/\W+/g, '');
    var revStr = newStr.split('').reverse().join('');
    return newStr === revStr;

}

console.log(palindromeFinderAdv("So Many Dynamos!"));
console.log(palindromeFinderAdv("Dog God"));
console.log(palindromeFinderAdv("Hello"));
