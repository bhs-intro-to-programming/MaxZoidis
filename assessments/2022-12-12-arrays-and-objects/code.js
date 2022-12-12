const makeRow = () => {
  let array = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 3) {
      array.push('')
    }
    return array
  }

}

const makeBoard = () => {
  let array = []
    array.push(makeRow)
    array.push(makeRow)
    array.push(makeRow)
  }
  return array
}
