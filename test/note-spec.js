const { all } = require('../src/notes')
const test = require('tape')

test('all', t => {
  const result = all()
  const expected = ['C',
      'C#',
      'Db',
      'D',
      'D#',
      'Eb',
      'E',
      'F',
      'F#',
      'Gb',
      'G',
      'G#',
      'Ab',
      'A',
      'A#',
      'Bb',
      'B']

  t.equal(result.length, expected.length)

  expected.forEach(exp => t.true(result.includes(exp)))

  t.end()
})
