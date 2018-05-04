var chai = require('chai');
var assert = chai.assert;
var addWord = require('./app').addWord;
var lookItUp = require('./app').lookItUp;

describe("Create a dictionary that contains words and their definitions",
    function(){
        it("Should add a word and a definition for that word",
            function(){
                assert.equal(addWord('cat', 'a dumb animal'), 'a dumb animal')
            })
        it("should return the definition of a word we give",
            function(){
                assert.equal(lookItUp('cat'), 'a dumb animal')
            })
        it("Should not allow a plural version of the word",
            function(){
                assert.equal(addWord('cats', 'a similar animal'), 'plurals are not allowed')
            })
    })
