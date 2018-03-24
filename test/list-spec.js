const list = require('../dist/list')
const sinon = require('sinon')
const test = require('tape')

test('should pre-populate the memoization cache if invoked as a function', t => {
  const orig = list.every

  list.every = sinon.spy()

  list()

  t.true(list.every.called)
  t.end()

  list.every = orig
})
