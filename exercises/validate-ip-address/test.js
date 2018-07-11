const chai = require('chai')
const assert = chai.assert
const validateIPAddress = require('./app')

describe("Given a string, write a function that determines whether it is a valide IP address", ()=> {
    it("should return true when it recieves a valide ip address", ()=> {
        assert.equal(validateIPAddress('3.89.230.0'), true)
    })
})
