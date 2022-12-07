const area = (rect) => {
  return rect.width * rect.height
}

const higherPaid = (e1,e2) => {
  if (e1.salary > e2.salary) {
    return e1
  }
  if (e2.salary > e1.salary) {
    return e2
  }
}

const isSamePoint = (p1,p2) => {
  return (p1.x === p2.x && p2.y === p1.y) 

}

const totalWithTip = (bill, tipPercentage) => {
  const tip = bill.subtotal * tipPercentage
  return {
    subtotal: bill.subtotal,
    tip: tip,
    total: bill.subtotal + tip

  }