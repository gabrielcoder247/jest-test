const { expect } = require('@jest/globals')
const stringLength = require('./stringLength.js')


it('works!', () => {
    expect(stringLength('james')).toBe(true)
})