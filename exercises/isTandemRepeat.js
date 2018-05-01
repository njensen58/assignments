function isTandemRepeat(str) {
    if(str.length % 2 === 0){
        const firstHalf = str.slice(0, str.length / 2)
        const secHalf = str.slice(str.length / 2)
        return firstHalf === secHalf
    }
    return false;
}
console.log(isTandemRepeat('tandemtandem')) // true
