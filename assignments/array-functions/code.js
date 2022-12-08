
const countTens = (array) => {
  let count = 0
  for(let i = 0; i< array.length;i++) {
    if(array[i] === 10)
    count++
  }
  return count
}

const sum = (array) => {
  let sum = 0
  for(let i = 0;i< array.length;i++) {
    sum += array[i]
  }
  return sum
}

const evens = (array) => {
  let elements = []
  for(let i = 0; i< array.length;i++) {
    if (array[i] % 2 === 0) {
      return  elements.push(array[i])
    }
  }
  return elements
}