
// A media access control address (MAC address) is a unique identifier assigned to network interfaces for communications on the physical network segment.
//
// The standard (IEEE 802) format for printing MAC-48 addresses in human-friendly form is six groups of two hexadecimal digits (0 to 9 or A to F), separated by hyphens (e.g. 01-23-45-67-89-AB).
//
// Your task is to check by given string inputString whether it corresponds to MAC-48 address or not.


const isMAC48Address = inputString => {
    const options = "0123456789ABCDEF"
    const arr = inputString.split('-')
    if(arr.length !== 6){
        return false
    } else {
        for(let i = 0; i < arr.length; i++){
            if(arr[i].length !== 2){
                return false
            }
            for(let j = 0; j < arr[i].length; j++){
                if(!options.includes(arr[i][j])){
                    return false
                }
            }
        }
    }
    return true
}


console.log(isMAC48Address("00-1B-63-84-45-E6")) // true
console.log(isMAC48Address("Z1-1B-63-84-45-E6")) // false
console.log(isMAC48Address("not a MAC-48 address")) // false
console.log(isMAC48Address("FF-FF-FF-FF-FF-FF")) // true
console.log(isMAC48Address("00-00-00-00-00-00")) // true
