// first minute of a call costs min1 cents,
// each minute from the 2nd up to 10th (inclusive) costs min2_10 cents
// each minute after 10th costs min11 cents.
// You have s cents on your account before the call. What is the duration of
// the longest call (in minutes rounded down to the nearest integer) you can have?


const phoneCall = (min1, min2_10, min11, s) => {
    let call = 0;
    for(let i = 0; i < s; i++){
        if(i === 0){
            call += min1
            if(call > s) return 0
            else if(call === s) return 1;
        }

        if(i > 0 && i < 10){
            call += min2_10
            if(call >= s) return i
        }

        if(i > 10){
            call += min11
            if(call === s) return i
            if(call > s) return i - 1;
        }
    }
}


console.log(phoneCall(3, 1, 2, 20));  // 14
console.log(phoneCall(2, 2, 1, 2));  // 1
console.log(phoneCall(10, 1, 2, 22));  // 11
console.log(phoneCall(2, 2, 1, 24));  // 14
console.log(phoneCall(1, 2, 1, 6));  // 3
console.log(phoneCall(4, 2, 1, 2));  // 0
