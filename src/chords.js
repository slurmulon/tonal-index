const { Chord } = require('tonal')
const { every } = require('./list')

exports.all = () => every(Chord)
