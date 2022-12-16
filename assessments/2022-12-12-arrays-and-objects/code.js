const makeRow = () => {
  return ['','','']
}

const makeBoard = () => {
  return [makeRow(),makeRow(),makeRow()]
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
  for(let i = 0; i < array.length;i++) {
    if( array[0] !== array[i]) {
      return false
    }
  }
  return true
}

const extractColumn = (board, index) => {
  let newBoard = []
  for(let i = 0; i < board.length;i++) {
    newBoard.push[i][index]
  }
  return newBoard
}

const recordMove = (array, move ) => {
  return array.push(move)
}

const rowForMove = (array, n) => {
array[n].row
}

const placeMoves = (array, moves) => {
  for(let i = 0; i < moves.length;i++) {
    placeMark(array,moves[i])``
  }
}

const extractColumn = (board, index) => {
  let newBoard = []
  for(let i = 0; i < board.length;i++) {
    newBoard.push[i] [index]
  }
  return newBoard
}