// Once Mary heard a famous song, and a line from it stuck in her head.
// That line was "Will you still love me when I'm no longer young and beautiful?".
//  Mary believes that a person is loved if and only if he/she is both young and beautiful,
//  but this is quite a depressing thought, so she wants to put her belief to the test.
//
// Knowing whether a person is young, beautiful and loved, find out if they contradict Mary's belief.
//
// A person contradicts Mary's belief if one of the following statements is true:
//
// 1.- A person is LOVED and BEAUTIFUL or YOUNG.
// 2.- A person isn't LOVED but it's BEAUTIFUL and YOUNG.

// if a person is (young and beautiful, they are loved)
    // return true if they are young and beautiful, but not Loved
    // return true if they are not loved, but are beautiful and young.

function willYou(young, beautiful, loved) {
    if(loved){
        if(young && beautiful){
            return false;
        } else if(!young || !beautiful){
            return true;
        }
    }
    if(!loved){
        return young && beautiful
    }
}



console.log(willYou(true, true, true));  // false
console.log(willYou(true, false, true));  // true
console.log(willYou(false, false, false));  // false
console.log(willYou(false, false, true));  // true
console.log(willYou(false, true, true));  // true
console.log(willYou(false, true, false));  // false
console.log(willYou(true, true, false));  // true
