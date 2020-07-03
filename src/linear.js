const { toFixed } = require('./utils')

function Linear (principal, interestRate, instalments) {
  this.principal = principal
  this.interestRate = interestRate
  this.instalments = instalments
}

Linear.prototype._bodyInPayment = function () {
  return this.principal / this.instalments
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
  return ((Array.apply(null, Array(this.instalments)))
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

module.exports = { Linear }
