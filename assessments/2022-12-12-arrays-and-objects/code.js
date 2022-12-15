const makeRow = () => {
  return ['', '', '']
}

const makeBoard = () => {
  return [makeRow(), makeRow(), makeRow()]
}

const makeMove = (mark, row, column) => {
  return {
    mark: mark,
    row: row,
    column: column
  }
}

const placeMark = (board, move) => {
  return board[move.row][move.column] = move.mark
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
  for (let i = 0; i < array.length; i++) {
    array[0], array[1], array
  }

}

const recordMove = (array, o) => {
  return array.push(o)
}



