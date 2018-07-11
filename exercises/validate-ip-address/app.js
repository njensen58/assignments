const validateIPAddress = str => {
  return str.split('.').filter(num => num >= 0 && num <= 255 && num !== '' ).length === 4
}

module.exports = validateIPAddress


// console.log(validateIPAddress('172.16.254.1'));  // true
// console.log(validateIPAddress('172.16.290.1'));  // false
// console.log(validateIPAddress('172.230.1'));     // false
// console.log(validateIPAddress('1ad.230.14.52')); // false
// console.log(validateIPAddress('1.230.14.52'));   // true
// console.log(validateIPAddress('0.aa.13.180'));   // false
// console.log(validateIPAddress('0.3..80'));   // false
