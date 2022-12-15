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
 for(let i = 1; i < array.length;i++) {
   if (array[0] !== array[i]) {
     return false
   }
 }
 return true
}

const extractColumn = (array, o) => {
 let newArray = []
 for(let i = 0;i < array.length;i++) {
   newArray.push(array[i][o])
 }
return newArray
}

const recordMove = (array, o) => {
  return array.push(o)
}

const rowForMove = (array, index) => {
return array[index].row
}

const placeMoves = (array, moves) {
  for(let i = 0;i < moves.length;i++) {
  placeMark(array,moves[i])
  }
}