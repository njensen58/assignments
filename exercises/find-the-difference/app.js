// The function should return an array of all the unique items. From the example above, it would return [1, 4], not necessarily in that order. (Order is unimportant).
//



const findUnique = (arrA, arrB) => {
    const compareArr = [...arrA, ...arrB];
    const myObj = {};
    const finalArr = [];
    for(let i = 0; i < compareArr.length; i++){
        if(myObj[compareArr[i]]){
            myObj[compareArr[i]] += 1
        } else {
            myObj[compareArr[i]] = 1;
        }
    }
    for(let key in myObj){
        if(myObj[key] === 1){
            finalArr.push(key)
        }
    }
    return finalArr;
}



console.log(findUnique([1, 2, 3], [2, 3, 4])); // [1, 4]
console.log(findUnique([1, 2, 3, 5], [2, 3, 4, 3, 4, 9])); // [1, 5, 9]
