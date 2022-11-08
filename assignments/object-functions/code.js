const getX = (object) => {
  return object.x
}

const point = (x, y) => {
  return { x, y }
}

const emptyObject = () => {
  return {}
}

const distance = (p1, p2) => {
  return Math.sqrt(Math.abs(p1 ** 2) + Math.Sqrt(Math.abs(p2 ** 2)))
}