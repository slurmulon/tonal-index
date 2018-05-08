module.exports = function (elem) {
  const { all, each } = require(`../src/${elem}`)
  const fixture = require(`./fixtures/${elem}`)
  const equal = require('deep-equal')
  const test = require('tape')

  test('all', t => {
    const result = all()
    const expected = fixture

    t.true(equal(result, expected))
    t.end()
  })

  test('each', t => {
    const generator = each()
    const results = fixture.map(() => generator.next().value)

    t.true(equal(results, fixture))
    t.end()
  })
}
