const { all } = require('../dist/scales').default
const fixture = require('./fixtures/scales')
const equal = require('deep-equal')
const test = require('tape')

console.log('ALLLL', all, require('../dist/scales'))

test('all', t => {
  const result = all()
  const expected = fixture

  t.true(equal(result, expected))
  t.end()
})
