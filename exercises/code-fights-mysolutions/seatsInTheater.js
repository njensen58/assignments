// Given the total number of rows and columns in the
// theater (nRows and nCols, respectively), and the row and
// column you're sitting in, return the number of people who sit
// strictly behind you and in your column or to the left, assuming
// all seats are occupied.


const seatsInTheater = (nCols, nRows, col, row) =>
    (nCols - col + 1) * (nRows - row)



console.log(seatsInTheater(16, 11, 5, 3 ));  // 96
console.log(seatsInTheater(1, 1, 1, 1));   // 0
console.log(seatsInTheater(13, 6, 8, 3));   // 18
console.log(seatsInTheater(60, 100, 60, 1));   // 99
console.log(seatsInTheater(1000, 1000, 1000, 1000));   // 0
