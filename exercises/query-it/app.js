// Given a query object and an array of objects, write a function that returns an array of items that match the query.
//
// If the query object is empty, return the entire array.
// If the array contains no matches, return an empty array

const database = [
    {firstName: "Jack", lastName: "Smith", age: 2},
    {firstName: "Jill", lastName: "Johnson", age: 20},
    {firstName: "Jill", lastName: "Smith", age: 100},
    {firstName: "Jack", lastName: "White", age: 2}
];


const filterDatabase = (obj, database) => {
    const queryKeysArr = [];
    const queryValuesArr = [];
    const searchKeysArr = [];
    const searchValuesArr = []
    for(let key in obj){
        queryKeysArr.push(key)
        queryValuesArr.push(obj[key])
    }
    console.log(queryKeysArr)
    console.log(queryValuesArr)
    if(queryKeysArr.length <= 0){
        return database;
    } else {
        for(let j = 0; j < database.length; j++){
            for(let key in database){
                searchKeysArr.push(key);
                searchValuesArr.push(database[key])
            }
        }
    }
    return [queryKeysArr, queryValuesArr, searchKeysArr, searchValuesArr]
}




// console.log(filterDatabase({}, database)); // returns entire database array
console.log(filterDatabase({dolphin: "squeak!"}, database));  //returns empty array
console.log(filterDatabase({firstName: "Jack", age: 2}, database));  //returns [{firstName: "Jack", lastName: "Smith", age: 2}, {firstName: "Jack", lastName: "White", age: 2}]
