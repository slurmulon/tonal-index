// const { Scale } = require('tonal')
// const { Query } = require('./query')
// const { every } = require('./list')
import { Scale } from 'tonal'
import { Query } from './query'

const query = new Query(Scale)

console.log('scale query', query.all)

export default query

// export default {
//   all : query.all.bind(query),
//   by  : query.by.bind(query)
// }

// const all = () => every(Scale)
// const by  = (key, val) => all().filter(el => el[key] === value)

// exports.all = all
// exports.by  = by
