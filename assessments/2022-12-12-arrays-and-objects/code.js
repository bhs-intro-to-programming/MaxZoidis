const makeRow = () => {
  let array = []
  for (let i = 0; i < 3; i++) {
    array.push('')
  }
  return array
}

const makeBoard = () => {
  let array = []
  for (let i = 0; i < 1; i++) {
    array.push(makeRow())
    array.push(makeRow())
    array.push(makeRow())
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

}