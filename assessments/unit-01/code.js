// You will use this function in one of the problems. You don't need to change
// it or even worry about how exactly it works.
const emit = (a, b, product) => {
  console.log(`${a} times ${b} is ${product}`);
};

// Write your code here ...
const averageWeight = (a, b) => (a + b) / 2

const hypotenuse = (a, b,) => {
  return (a * a) + (b * b)
}

const maxRadius = (width, height) => {
  return width / 2
}

const numCircles = (radius, width) => {
  return (width / radius) * 2
}

const offset = (width, figureWidth) => {
  return (width - figureWidth) / 2
}

const canSleepIn = (weekday, vacation) => {
  return !weekday || vacation
}

const canGoToProm = (senior, invitedBySenior, promExclusionList) => {
  return senior || invitedBySenior || !promExclusionList
}

const getsSpeedingTicket = (mph, copGrouchy) => {
  return 65 > mph && copGrouchy || 70 > mph
}

const moreThanTwiceAsLong = (s1, s2) => {
  return s1 > s2 * 2
}

const aFartherThanB = (a, b, c) => {
  return (a - c) > (a - b)

}

const containsX = (s) => {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'x') {
      return true
    }
  }
  return false
}

const timesTable = (n) => {
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < n; j++) {
      return emit(i, j, i * j)
    }
  }
}

const countXs = (s) => {
  let count = 0
  for(let i = 0; i , s.length;i++) {
    if(s[i] === 'x') {
      count++
    }
  }
  return count
}

const sumSquares = (n) => {
  let sum = 0
 for(let i = 0; i< n;i++) {
   sum += i ** 2 
 }
 return sum
}