// Given a multi-dimensional array containing only primitive data types (strings, booleans, and numbers), write a function that returns whether EACH element within each subarray belongs to the same data type.


const checkTypes = arr => {
  const finalArr = [];
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
    finalArr.push(typeof arr[i][j]);
    }
  }
  let first = finalArr[0];
  return finalArr.every(value => first === value)
}

// OTHER Solution

const checkTypes = arr => {
  const dataType = typeof arr[0][0];
  return arr.every(subArr => subArr.every(element => typeof element === dataType));
}



const multiD1 = [[1,2,3],["a","b","c"],[true, true, true]]
console.log(checkTypes(multiD1));
// returns false (inner arrays aren't consistent with each other's data types)

const multiD2 = [[true,false,true],[false,false,true]]
console.log(checkTypes(multiD2));
// returns true (each inner array contains the same data type as the others)
