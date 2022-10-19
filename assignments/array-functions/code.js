const countTens = (arrayofnumbers) => {
  let numbertens = 0
  for (let i = 0; i < arrayofnumbers.length; i++) {
    if (arrayofnumbers[i] === 10) {
      numbertens++
    }
  }
  return numbertens
}

const sum = arrayofnumbers => {
  let sum = 0
  for (let i = 0; i < arrayofnumbers.length; i++) {
    arrayofnumbers[i] = sum
  }
}
