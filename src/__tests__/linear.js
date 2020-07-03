const { Linear } = require('../linear')

const principal = 100000
const interestRate = 0.12 / 12
const instalments = 24
const linear = new Linear(principal, interestRate, instalments)

describe('Linear payment', () => {
  it('calculates monthly payment', () => {
    expect(linear.payment(1)).toEqual(5166.67)
    expect(linear.payment(2)).toEqual(5125)
  })

  it('calculates total lost cost', () => {
    expect(linear.totalCost()).toEqual(112500)
  })

  it('calculates overpayment', () => {
    expect(linear.overpayment()).toEqual(12500)
  })

  it('calculates percentage part in one payment', () => {
    expect(linear.percentageInPayment(1)).toEqual(1000)
    expect(linear.percentageInPayment(2)).toEqual(958.33)
    expect(linear.percentageInPayment(24)).toEqual(41.67)
  })

  it('calculates body part in one payment', () => {
    expect(linear.bodyInPayment()).toEqual(4166.67)
  })
})
