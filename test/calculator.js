const Calculator = require('../src/calculator')
const expect = require('chai').expect

describe('Calculator', () => {

  let calculator

  beforeEach(() => {
    calculator = new Calculator()
  })

  describe('add', () => {

    it('should add', () => {
      expect(calculator.add(1, 2)).to.equal(3)
    })
  })
})