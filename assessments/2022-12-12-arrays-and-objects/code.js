const makeRow = () => {
  let array = []
  for (let i = 0; i < 3; i++) {
    array.push('')
  }
  return array
}

const makeBoard = () => {
  let array = []
  for (let i = 0; i < 3; i++) {
    array.push(makeRow(array[i]))
    array.push(makeRow(array[i]))
    array.push(makeRow(array[i]))
  }
  return array
}

const makeMove = (s, a, b) => {
  return {
    mark: s,
    row: a,
    column: b
  }
}

const placeMark = (array, object) => {

}

const allTheSame = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[2] === array[1] && array[2] === array[0]) {
      return true
    } else {
      return false
    }
  }
}

const extractColumnb = (array) => {
  let newArray = []
  for(let i = 0;i < array.length;i++) {
    array[0],array[1],array
  }
  
}

const recordMove = (array, o) {
  return array.push(o)
}