const getX = (object) => {
  return object.x
}

const point = (x, y) => {
  return { x, y }
}

const emptyObject = () => {
  return {}
}

const distance =  (x,y)=> {
  return (Math.abs(x ** 2) + (Math.abs(y ** 2)))
}