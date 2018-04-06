// //One night you go for a ride on your motorcycle. At 00:00 you start
// your engine, and the built-in timer automatically begins counting the
// length of your ride, in minutes. Off you go to explore the neighborhood.
// When you finally decide to head back, you realize there's a chance the
// bridges on your route home are up, leaving you stranded! Unfortunately,
// you don't have your watch on you and don't know what time it is. All you
// know thanks to the bike's timer is that n minutes have passed since 00:00.
//  Using the bike's timer, calculate the current time. Return an answer as
//  the sum of digits that the digital timer in the format hh:mm would show.


const lateRide = n => {
    let time = Math.floor(n / 60) + '.' + Math.floor(n % 60);
    return time.split('.').join('').split('').reduce((final, num) => final += Number(num) , 0)
}


console.log(lateRide(240));  // 4;  240 minutes have passed, so that means it's 04:00,  0 + 4 + 0 + 0 === 4.
console.log(lateRide(808));  // 14; 808 minutes is 13.46 hours, so that's 1 + 3 + 4 + 6 === 14
console.log(lateRide(1439));  // 19; 1439 minutes is 23.98 hours
console.log(lateRide(0));  // 0;
console.log(lateRide(23)); // 5
