const notes = require('./notes').all
const { Chord } = require('tonal')
const flatten = require('flatten')
const memoize = require('memoizee')

exports.all = memoize(() => flatten(Chord
  .names()
  .map(chord =>
    notes().map(note => ({
      key: note,
      name: chord,
      notes: Chord.notes(`${note} ${chord}`)
    }))
  )
))
