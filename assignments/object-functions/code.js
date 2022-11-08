const getX = (object) => {
  return object.x
}

const point = (x, y) => {
  return { x, y }
}

const emptyObject = () => {
  return {}
}



const midpoint = (x1,y1, x2,y2) => {
  return (x1-x2)-(y1-y2)*2
}