const { all } = require('../src/chords')
const test = require('tape')

test('all', t => {
  const result = all().length
  const expected = 1853

  t.equal(result, expected)
  t.end()
})
