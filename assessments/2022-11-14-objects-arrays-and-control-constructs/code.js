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
  let count = 0
for(let i = 0; i < array.length;i++) {
  if (array[i].wins === isWinner) {
    count++
  }
}
return count
}