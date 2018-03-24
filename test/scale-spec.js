const { all } = require('../dist/scales')
const fixture = require('./fixtures/scales')
const equal = require('deep-equal')
const test = require('tape')

test('all', t => {
  const result = all()
  const expected = fixture

  t.true(equal(result, expected))
  t.end()
})
