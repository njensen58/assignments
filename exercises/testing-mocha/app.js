// Given an array of person objects, reutrn an array of first and last names.


const firstLastOverAge = (arr, age) => {

    return arr
        .filter(person => person.age > age)
    // map to new array first and last names
        .map(person => `${person.firstName} ${person.lastName}`);
}

const difference = (nums) => nums.reduce((total, num) => total - num);

const sum = nums => nums.reduce((total, num) => total + num);

module.exports = {
    firstLastOverAge,
    difference,
    sum
}
