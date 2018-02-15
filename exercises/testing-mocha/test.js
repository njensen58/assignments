const firstLastOverAge = require('./app').firstLastOverAge;
const difference = require('./app').difference;
const sum = require('./app').sum;
const chai = require('chai');
const assert = chai.assert;


const people = [
    {
        firstName: "Jerry",
        lastName: "Gergich",
        age: 52
    },
    {
        firstName: "Leslie",
        lastName: "Knope",
        age: 40
    },
    {
        firstName: "Tommy",
        lastName: "Haverford",
        age: 10
    },
    {
        firstName: "Ronny",
        lastName: "Swanson",
        age: 7
    }
]



describe('Higher order functions', () => {
    it('should output the difference of an array of numbers', () => {
        assert.equal(difference([1, 2]), -1);
        assert.equal(difference([-1, 2]), -3);
        assert.equal(difference([-1, -2]), 1);
    });

    it('should outpute the sum of an array of numbers', () => {
        assert.equal(sum([1, 5]), 6);
        assert.equal(sum([-5, 5]), 0);
    })

    it('should correctly filter people and display full names', () => {
        assert.deepEqual(firstLastOverAge(people, 17), ['Jerry Gergich', 'Leslie Knope']);
        assert.deepEqual(firstLastOverAge(people, 9), ['Jerry Gergich', 'Leslie Knope', 'Tommy Haverford']);
    });
});
