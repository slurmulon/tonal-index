const { all, gen } = require('../src/scales')
const fixture = require('./fixtures/scales')
const equal = require('deep-equal')
const test = require('tape')

test('all', t => {
  const result = all()
  const expected = fixture

  t.true(equal(result, expected))
  t.end()
})

test('gen', t => {
  const generator = gen()
  const results = fixture.map(() => generator.next().value)

  t.true(equal(results, fixture))
  t.end()
})
