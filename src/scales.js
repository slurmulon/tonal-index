const notes = require('./notes').all
const { Scale } = require('tonal')
const flatten = require('flatten')
const memoize = require('memoizee')

// TODO: support grouping by note (e.g. `by('note')`)

exports.all = memoize(() => flatten(Scale
  .names()
  .map(scale =>
    notes().map(note => ({
      key: note,
      name: scale,
      notes: Scale.notes(`${note} ${scale}`)
    }))
  )
))
