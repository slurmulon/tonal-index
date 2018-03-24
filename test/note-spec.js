const { all } = require('../src/notes')
const fixture = require('./fixtures/notes')
const equal = require('deep-equal')
const test = require('tape')

test('all', t => {
  const result = all()
  const expected = fixture

  t.true(equal(result, expected))
  t.end()
})
