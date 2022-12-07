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
  if (p1.x === p2.x && p2.y === p1.y) {
    return true
  }
  return false
}