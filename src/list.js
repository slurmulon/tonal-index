const notes   = require('./notes').all
const flatten = require('flatten')
const memoize = require('memoizee')

// pre-warmed / pre-memoized
module.exports = () => {
  const { Scale, Chord } = require('tonal')
  const { every } = module.exports

  const warmed = [Scale, Chord].map(every)

  return { every }
}

// lazy
module.exports.every = memoize(element => flatten(element
  .names()
  .map(name =>
    notes().map(note => ({
      name,
      root: note,
      notes: element.notes(`${note} ${name}`)
    }))
  )
))

// TODO: stream, generator
