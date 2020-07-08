const { Annuity } = require('./')
const { Linear } = require('./')

const principal = 100000
const interestRate = 0.12 / 12
const installments = 24
const annuity = new Annuity(principal, interestRate, installments)
const linear = new Linear(principal, interestRate, installments)

describe('Annuity payment', () => {
  it('calculates monthly payment', () => {
    expect(annuity.payment()).toEqual(4707.35)
  })

  it('calculates total loan cost', () => {
    expect(annuity.totalCost()).toEqual(112976.33)
  })

  it('calculates overpayment', () => {
    expect(annuity.overpayment()).toEqual(12976.33)
  })

  it('calculates percentage part in one payment', () => {
    expect(annuity.percentageInPayment(0)).toEqual(0)
    expect(annuity.percentageInPayment(1)).toEqual(1000)
    expect(annuity.percentageInPayment(2)).toEqual(962.93)
    expect(annuity.percentageInPayment(24)).toEqual(46.61)
  })

  it('calculates body part in one payment', () => {
    expect(annuity.bodyInPayment(1)).toEqual(3707.35)
    expect(annuity.bodyInPayment(2)).toEqual(3744.42)
    expect(annuity.bodyInPayment(24)).toEqual(4660.74)
  })
})

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
