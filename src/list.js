const notes   = require('./notes').all
const flatten = require('flatten')
const memoize = require('memoizee')

// pre-warmed / pre-memoized
module.exports = () => {
  const { Scale, Chord } = require('tonal')
  const { every } = module.exports

  void [Scale, Chord].map(every)

  return { every }
}

// lazy
module.exports.every = memoize(element => [...module.exports.generate(element)()])

// iterative
module.exports.generate = element => function* () {
  for (const type of element.names()) {
    for (const note of notes()) {
      yield {
        type,
        root: note,
        notes: element.notes(`${note} ${type}`)
      }
    }
  }
}
