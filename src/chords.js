const { Chord } = require('tonal')
const { every } = require('./list')

const all = () => every(Chord)
const by  = (key, val) => all().filter(el => el[key] === value)

exports.all = all
exports.by  = by
