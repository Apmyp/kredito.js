function toFixed (number) {
  return Number(Math.round(number + 'e+2') + 'e-2')
}

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

function Linear (principal, interestRate, installments) {
  this.principal = principal
  this.interestRate = interestRate
  this.installments = installments
}

Linear.prototype._bodyInPayment = function () {
  return this.principal / this.installments
}

Linear.prototype.bodyInPayment = function () {
  return toFixed(this._bodyInPayment())
}

Linear.prototype._payment = function (period) {
  return this._percentageInPayment(period) + this._bodyInPayment()
}

Linear.prototype.payment = function (period) {
  return toFixed(this._payment(period))
}

Linear.prototype._calculateLinearPayment = function (_, index) {
  return this._payment(index + 1)
}

Linear.prototype._sumPayments = function (sum, payment) {
  return sum + payment
}

Linear.prototype._totalCost = function () {
  return ((Array.apply(null, Array(this.installments)))
    .map(this._calculateLinearPayment.bind(this))
    .reduce(this._sumPayments))
}

Linear.prototype.totalCost = function () {
  return toFixed(this._totalCost())
}

Linear.prototype._overpayment = function () {
  return this._totalCost() - this.principal
}

Linear.prototype.overpayment = function () {
  return toFixed(this._overpayment())
}

Linear.prototype._percentageInPayment = function (period) {
  return (this.principal - ((period - 1) * this._bodyInPayment())) * this.interestRate
}

Linear.prototype.percentageInPayment = function (period) {
  return toFixed(this._percentageInPayment(period))
}

module.exports = { Annuity, Linear }
