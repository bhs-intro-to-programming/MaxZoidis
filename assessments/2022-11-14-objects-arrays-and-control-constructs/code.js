// For a change of pace, I'm providing you with all the function skeletons. This
// should save you some time.

const area = (rect) => {
  return rect.width * rect.height
}

const higherPaid = (e1, e2) => {
  if (e1.salary > e2.salary) {
    return e1
  } else {
    return e2
  }
}

const isSamePoint = (a, b) => {
  return a.x == b.x && a.y === b.y
}

const totalWithTip = (bill, tipPercentage) => {
  const tip = tipPercentage * bill.subtotal
  return {
    subtotal: bill.subtotal,
    tip: tip,
    total: bill.subtotal + tip
  }
}

const isWinner = (o) => {
  return o.score > 100
}

const updateWins = (array) => {
for(let i = 0; i < array.length;i++) {
  if (isWinner(array[i])) {
     array[i].wins++
  }
}
}

const bigWinners = (array) => {
  let newArray = []
  for(let i = 0;i < array.length;i++) {
    if( array[i].wins > 10) {
      newArray.push(array[i])
    }
  }
  return newArray
}

const fillTimesTable = (array) => {
  for(let i = 1;i < array.length;i++) {
    for(let j = 1; j < array.length;i++) {
      array[i,j] = (i + 1, j + 1)
    }
  }
}

const sums = (n) => {
  let array = [0]
  for(let i = 1; i < n; i++) {
    array[i] = array[i-1] + i
  }
  return array
}



const updateWins = (array) => {
  for(let i = 0;i < array.length;i++) {
    if (isWinner(arrray[i])) {
      array[i].wins++
    }
  }
}