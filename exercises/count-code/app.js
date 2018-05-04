// Write a function that returns the number of times that the string "code" appears anywhere in the given string, except we'll accept any letter for the "d", so "cope" and "cooe" would also count.

// countCode("aaacodebbb") -> 1
// countCode("codexxcode") -> 2
// countCode("cozexxcope") -> 2


function countCode(str){
    var count = 0;
    for(var i = 0; i < str.length; i++){
        if(str[i] + str[i + 1] + str[i + 3] === "coe"){
            count++;
        }
    }
    return count;
}

console.log(countCode("aaacodebbb")) // -> 1
console.log(countCode("codexxcode")) // -> 2
console.log(countCode("cozexxcope")) // -> 2


//
function countCode(str){
    var myArr = str.split('');
    var codeCount = myArr.reduce(function(previous, index, i, arr){
        if(index + (arr[i + 1]) + (arr[i + 3]) === "coe"){
            previous++;
        }
        return previous;
    }, 0);
    return codeCount;
}
//
// console.log(countCode("aaacodebbb")) // -> 1
// console.log(countCode("codexxcode")) // -> 2
// console.log(countCode("cozexxcope")) // -> 2
