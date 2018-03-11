// An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.
//
// IPv4 addresses are represented in dot-decimal notation, which consists of four decimal numbers, each ranging from 0 to 255 inclusive, separated by dots, e.g., 172.16.254.1.
//
// Given a string, find out if it satisfies the IPv4 address naming rules.

// string must have 3 '.'
    // each '.' must have a number before and after it
        // each number must be in the range of 0 - 255

const isIPv4Address = inputString => {
    if(inputString.split('').filter(index => index === '.').length !== 3){
        return false;
    }
    return inputString
        .split('.')
        .filter(num => num !== '')
        .length === 4 &&
        inputString
            .split('.')
            .every(num => Number(num) >= 0 && Number(num) <= 255)
    }


console.log(isIPv4Address(''));  // false
console.log(isIPv4Address("172.16.254.1"));  // true
console.log(isIPv4Address(".254.255.0"));  // false
console.log(isIPv4Address("1.1.1.1a"));  // false
console.log(isIPv4Address("1"));  // false
console.log(isIPv4Address("0.254.255.0")); // true
console.log(isIPv4Address("1.23.256.."));  // false
console.log(isIPv4Address("0..1.0"));  // false
