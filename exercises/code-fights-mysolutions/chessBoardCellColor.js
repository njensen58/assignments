// Given two cells on the standard chess board, determine whether they have the same color or not.

// columns  a  b  c  d  e  f  g  h
//          0  1  2  3  4  5  6  7

// evens & 0 start dark
// 1, 3, 5, 7 start light

const chessBoardCellColor = (cell1, cell2) => {
    let cell1color;
    let cell2color;
    let cell1Alpha = cell1.charAt(0);
    let cell1Num   = Number(cell1.charAt(1));
    let cell2Alpha = cell2.charAt(0);
    let cell2Num   = Number(cell2.charAt(1));
    if(cell1Alpha === "A" || cell1Alpha === "C" || cell1Alpha === "E" || cell1Alpha === "G"){
        cell1Num % 2 === 0 ? cell1color = 'light' : cell1color = 'dark'
    } else if(cell1Alpha === "B" || cell1Alpha === "D" || cell1Alpha === "F" || cell1Alpha === "H"){
        cell1Num % 2 === 0 ? cell1color = 'dark' : cell1color = 'light'
    }
    if(cell2Alpha === "A" || cell2Alpha === "C" || cell2Alpha === "E" || cell2Alpha === "G"){
        cell2Num % 2 === 0 ? cell2color = 'light' : cell2color = 'dark'
    } else if(cell2Alpha === "B" || cell2Alpha === "D" || cell2Alpha === "F" || cell2Alpha === "H"){
        cell2Num % 2 === 0 ? cell2color = 'dark' : cell2color = 'light'
    }
    return cell1color === cell2color;
}

console.log(chessBoardCellColor("A1", "C3")); // true;
console.log(chessBoardCellColor("A1", "H3")); // false;
console.log(chessBoardCellColor("A1", "A2")); // false;
console.log(chessBoardCellColor("A1", "B2")); // true;
console.log(chessBoardCellColor("B3", "H8")); // false;
console.log(chessBoardCellColor("C3", "B5")); // false;

console.time('chessBoardCellColor');
chessBoardCellColor("H1", "H8");
console.timeEnd('chessBoardCellColor')
