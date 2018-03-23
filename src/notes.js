const { Note } = require('tonal')
const memoize = require('memoizee')

exports.all = memoize(() => {
  const whole  = Note.names()
  const sharps = Note.names('#')
  const flats  = Note.names('b')

  return [...new Set([...whole, ...sharps, ...flats])]
})
