const { every } = require('./list')

module.exports.query = element => ({
  all : ()    => every(element),
  by  : (k,v) => every(element).filter(elem => elem[k] === v)
})
