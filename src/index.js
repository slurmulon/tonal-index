const lib = {
  notes  : require('./notes'),
  scales : require('./scales'),
  chords : require('./chords')
}

// warm / pre-cached
module.exports = () => require('./list')() && lib

// lazy
Object.assign(module.exports, lib)
