const assert = require('assert')

module.exports = class Calculator {
  add(x, y) {
    assert(typeof x === 'number')
    assert(typeof y === 'number')
    return x + y
  }
}