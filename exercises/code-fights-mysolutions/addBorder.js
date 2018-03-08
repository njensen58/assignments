// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

const addBorder = picture => {
    const l = picture[0].length;
    const stars = '*' + '*'.repeat(l) + '*';
    const borderedLetters = picture.map(item => '*' + item + '*');
    return [stars, ...borderedLetters, stars];
}



console.log(addBorder(["abc", "ded"])); // ["*****", "*abc*", "*ded*", "*****"]
console.log(addBorder(["a"])); // ["***", "*a*", "***"]
console.log(addBorder(["aa", "**", "zz"])); // ["****", "*aa*", "****", "*zz*", "****"]
