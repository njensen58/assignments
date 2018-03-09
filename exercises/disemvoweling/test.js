const {assert} = require('chai');
const disemvowel = require('./app');
// test suite //
describe("Disemvoweling Warmup", () => {
    it('should pull all vowels out', () => {
        assert.deepEqual(disemvowel('Pickle Rick!'), {str: 'pcklrck!', vowels: 'iei'})
    })

})
