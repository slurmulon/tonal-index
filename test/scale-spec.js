const { all } = require('../src/scales')
const test = require('tape')

test('all', t => {
  const result = all().length
  const expected = 1530

  t.equal(result, expected)
  t.end()
})
