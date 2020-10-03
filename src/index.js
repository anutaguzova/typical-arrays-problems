
exports.min = function min (array) {
  if (typeof array === 'undefined' || array.length === 0) {
    return 0;
  } else {
    return array.reduce((a, b) => a < b ? a : b)
  }
}

exports.max = function max (array) {
  if (typeof array === 'undefined' || array.length === 0) {
    return 0;
  } else {
    return array.reduce((a, b) => a > b ? a : b)
  }
}

exports.avg = function avg (array) {
  if (typeof array === 'undefined' || array.length === 0) {
    return 0;
  } else {
    return array.reduce((a, b) => a + b) / array.length
  }
}
