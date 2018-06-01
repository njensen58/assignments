const validateIPAddress = str => {
   let newStr = str.split('.');
   return newStr.length === 4 ? newStr.every(str => Number(str < 256 && str >= 0)) : false;
 }


console.log(validateIPAddress('172.16.254.1'));  // true
console.log(validateIPAddress('172.16.290.1'));  // false
console.log(validateIPAddress('172.230.1'));     // false
console.log(validateIPAddress('1ad.230.14.52')); // false
console.log(validateIPAddress('1.230.14.52'));   // true
