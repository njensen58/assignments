const every = (arr, callback) => {
    for(let i = 0; i < arr.length; i++){
        if(!callback(arr[i])){
            return false;
        }
    }
    return true;
}

console.log(every([1,2,3], (num)=>{
    return typeof num === 'number';
}))

console.log(every([1,2,'3'], (num)=>{
    return typeof num === 'number';
}))


const some = (arr, callback) => {
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i])){
            return true;
        }
    }
    return false;
}


console.log(some(["ben", "jacob", "bob"], (name) => {
  return name === "jacob";
}));

console.log(some(["ben", "jacob", "bob"], (name) => {
  return name === "frank";
}));


Array.prototype.every = function(callback)  {
    for(let i = 0; i < this.length; i++){
        if(!callback(this[i])){
            return false;
        }
    }
    return true;
}

const myArr = [1,2,'3']

console.log(myArr.every(num => {
    return typeof num === 'number';
}))
