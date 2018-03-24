const package = {
  notes  : require('./notes'),
  scales : require('./scales'),
  chords : require('./chords')
}

// warm / pre-cached
module.exports = () => {
  require('./list')

  return package
}

// lazy
Object.assign(module.exports, package)
