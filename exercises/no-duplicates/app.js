// Given a string, your task is to remove any duplicated letters from it. Any letters you remove should be added to another string called "duplicates".
//
// Here's an example:
//
// var input = "bookkeeper larry";

// No duplicates: "bokepr lay"
// The Extras: "okeerr"

 // ANSWER 1 using .indexOf();

// function noDuplicates(origStr){
//     var noDuplicatesStr = '';
//     var extras = '';
//     for(var i = 0; i < origStr.length; i++){
//         if(noDuplicatesStr.indexOf(origStr[i]) === -1) {
//             noDuplicatesStr += origStr[i];
//         } else {
//             extras += origStr[i];
//         }
//     }
//     console.log('No duplicates: ' + noDuplicatesStr + ', The Extras: ' + extras);
// };
//
// noDuplicates('bookeeper larry');

// OR

// ANSWER 2 using .includes();

function removeDuplicates(origStr) {
    var noDups = '';
    var extras = '' ;
    for (var i = 0; i < origStr.length; i++){
        if(noDups.includes(origStr[i])) {
            extras += origStr[i];
        } else {
            noDups += origStr[i];
        }
    }
    console.log('No duplicates: ' + noDups + ', The Extras: ' + extras);
}

removeDuplicates('bookeeper larry');
