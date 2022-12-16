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