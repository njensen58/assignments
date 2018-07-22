const validTime = time => {
    const timeArr = time.split(':')
    if(Number(timeArr[0]) > 0 && Number(timeArr[0]) < 24){
        if(Number(timeArr[1]) > 0 && Number(timeArr[1] < 60)){
            return true
        }
    }
    return false
}


console.log(validTime("13:58")) // true
console.log(validTime("25:51")) // false
console.log(validTime("02:76")) // false
console.log(validTime("24:00")) // false
console.log(validTime("27:00")) // false
console.log(validTime("19:66")) // false
console.log(validTime("12:31")) // false
