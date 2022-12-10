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
  const tip = (tipPercentage * bill.subtotal)
  return {
    tip: tip,
    subtotal: bill.subtotal,
    total: subtotal + tip
  }
}