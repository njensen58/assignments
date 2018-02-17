// Write a function the generates a 10 X 10 multiplication table (2D array).
//
// For example:
//
// multTable();
// //returns
// [
//     [1,2,3,4,5...],
//     [2,4,6,8,10...],
//     [3,6,9,12,15...],
// ...
// ]



const multTable = num => {
    const table = [];
    for(let i = 0; i < num; i++){
        table[i] = [];
        for(let j = 0; j < num; j++){
            table[i][j] = (i + 1) * (j + 1);
        }
    }
    return table;
}

console.log(multTable(10));
