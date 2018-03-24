const lib = {
  notes  : require('./notes'),
  scales : require('./scales'),
  chords : require('./chords')
}

// warm / pre-cached
module.exports = () => {
  require('./list')

  return lib
}

// lazy
Object.assign(module.exports, lib)
