const { all } = require('../src/notes')
const equal = require('deep-equal')
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

  t.true(equal(result, expected))
  t.end()
})
