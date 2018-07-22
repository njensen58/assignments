//Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

// The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.


const chessKnight = cell => {
    const opt1 = ['3c', '4c', '5c', '6c', '3d', '4d', '5d', '6d', '3e', '4e', '5e', '6e', '3f', '4f', '5f', '6f'] // 8
    const opt2 = ['3b', '4b', '5b', '6b', '3g', '4g', '5g', '6g'] // 6
    const opt3 = ['3a', '4a', '5a', '6a', '3h', '4h', '5h', '6h'] // 4
    const opt4 = ['2c', '2d', '2e', '2f', '7c', '7d', '7e', '7f'] // 6
    const opt5 = ['2b', '2g', '7b', '7g'] // 4
    const opt6 = ['2a', '2h', '7a', '7h'] // 3
    const opt7 = ['1a', '1h', '8a', '8h'] // 2
    const opt8 = ['1b', '1g', '8b', '8g'] // 3
    const opt9 = ['1c', '1d', '1e', '1f', '8c', '8d', '8e', '8f'] //4
    if(opt1.join('').includes(cell)){
        return 8
    } else if(opt2.join('').includes(cell)){
        return 6
    } else if(opt3.join('').includes(cell)){
        return 4
    } else if(opt4.join('').includes(cell)){
        return 6
    } else if(opt5.join('').includes(cell)){
        return 4
    } else if(opt6.join('').includes(cell)){
        return 3
    } else if(opt7.join('').includes(cell)){
        return 2
    } else if(opt8.join('').includes(cell)){
        return 3
    } else if(opt9.join('').includes(cell)){
        return  4
    }
}


console.log(chessKnight("a1")) // 2
console.log(chessKnight("c2")) // 6
console.log(chessKnight("d4")) // 8
console.log(chessKnight("g6")) // 6
