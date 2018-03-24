import { Note } from 'tonal'
import memoize from 'memoizee'

export const all = memoize(() => {
  const whole  = Note.names()
  const sharps = Note.names('#')
  const flats  = Note.names('b')

  return [...new Set([...whole, ...sharps, ...flats])]
})

export default all
