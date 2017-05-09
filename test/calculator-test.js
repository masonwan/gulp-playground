const Calculator = require('../src/calculator')
const expect = require('chai').expect

describe('Calculator', () => {

  let calculator

  beforeEach(() => {
    calculator = new Calculator()
  })

  describe('add', () => {

    it('should add two positive numbers', () => {
      expect(calculator.add(1, 2)).to.equal(3)
    })

    it('should add two negative numbers', () => {
      expect(calculator.add(-1, -2)).to.equal(-3)
    })

    it('should throw if any parameter is not number', () => {
      expect(() => {
        calculator.add(5)
      })
        .to.throw
    })
  })
})