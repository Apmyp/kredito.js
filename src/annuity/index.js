const { toFixed } = require('../utils')

function Annuity (principal, interestRate, installments) {
  this.principal = principal
  this.interestRate = interestRate
  this.installments = installments
}

Annuity.prototype._bodyInPayment = function (period) {
  return this._payment() - this._percentageInPayment(period)
}

Annuity.prototype.bodyInPayment = function (period) {
  return toFixed(this._bodyInPayment(period))
}

Annuity.prototype._factor = function () {
  return this.interestRate + (this.interestRate / (Math.pow(1 + this.interestRate, this.installments) - 1))
}

Annuity.prototype._payment = function () {
  return this.principal * this._factor(this.interestRate, this.installments)
}

Annuity.prototype.payment = function () {
  return toFixed(this._payment())
}

Annuity.prototype._totalCost = function () {
  return this._payment() * this.installments
}

Annuity.prototype.totalCost = function () {
  return toFixed(this._totalCost())
}

Annuity.prototype._overpayment = function () {
  return this._totalCost(this.installments, this._payment()) - this.principal
}

Annuity.prototype.overpayment = function () {
  return toFixed(this._overpayment())
}

Annuity.prototype._percentageInPayment = function (period, balance) {
  if (!balance) {
    balance = this.principal
  }

  if (period < 1) {
    return 0
  } else if (period === 1) {
    return balance * this.interestRate
  } else if (period > 1) {
    const currentPaymentBody = this._payment() - (balance * this.interestRate)
    const remainBalance = balance - currentPaymentBody
    return this._percentageInPayment(period - 1, remainBalance)
  }
}

Annuity.prototype.percentageInPayment = function (period, balance) {
  return toFixed(this._percentageInPayment(period, balance))
}

module.exports = { Annuity }
