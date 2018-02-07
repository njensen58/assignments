// // Find the frequency of all the letters in a given word or phrase, and print them to the console.
//
// var phrase = 'slimy smelly solution';
//
// function getLetterFrequency(str){
//     var onceStr = '';
//     var extraStr = '';
//
//     for(var i = 0; i < str.length; i++){
//         if(!onceStr.includes(str[i])){
//             onceStr += str[i];
//         } else {
//             extraStr += str[i];
//         }
//     }
//     console.log(onceStr);
//
//     var countArr = [];
//     for(var i = 0; i < onceStr.length; i++){
//         var count = 1;
//         for (var j = 0; j < extraStr.length; j++){
//             if(onceStr[i] === extraStr[j]){
//                 count++;
//             }
//         }
//         countArr.push(count);
//         console.log(onceStr[i] + ": " + countArr[i]);
//     }
// }
//
// console.log(getLetterFrequency('slimy smelly solution'));
//












function frequency(str){

    var myObj = {};
    for(var i = 0; i < str.length; i++){
        var currentChar = str[i];
        if(myObj[currentChar]){
            myObj[currentChar]++;
        } else {
            myObj[currentChar] = 1;
        }
    }
    return myObj;
}

console.log(frequency('slimy smelly solution'));
