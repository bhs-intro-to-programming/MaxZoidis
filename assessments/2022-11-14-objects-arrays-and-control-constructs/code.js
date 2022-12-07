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