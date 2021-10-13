const { expect } = require('@jest/globals');
const reverseString = require('./reverseString.js');


it('Reverse-string', () => {
    expect(reverseString('hello')).toBe('olleh')
})