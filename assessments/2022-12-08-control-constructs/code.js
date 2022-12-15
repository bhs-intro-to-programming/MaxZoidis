const emit = (a, b) => console.log(a + ', ' + b);

const yesIfEven = (n) => {
  if (n % 2 === 0) {
    return 'yes'
  }
  else {
    return 'no'
  }
}

const countXs = (s) => {
  let count = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'x') {
      count++
    }
  }
  return count
}

const timesTable = (n) => {
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < n; j++) {
      emit(i,ji * j)
    }
  }
}

const containsX = (s) => {
  if (s[i] === 'x') {
    return true
  }
  else {
    return false
  }
}

const sumSquares = (n) => {
  let sum = 0
  for(let i = 0; i < n;i++) {
    sum += i ** 2
  }
  return sum
}