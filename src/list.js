import { all as notes } from './notes'
import flatten from 'flatten'
import memoize from 'memoizee'

// pre-warmed / pre-memoized
module.exports = () => {
  const { Scale, Chord } = require('tonal')
  const { every } = module.exports

  const warmed = [Scale, Chord].map(every)

  return { every }
}

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
