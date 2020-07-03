function toFixed (number) {
  return Number(Math.round(number + 'e+2') + 'e-2')
}

module.exports = { toFixed }
