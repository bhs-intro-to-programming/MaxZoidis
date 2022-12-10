const getX = (object) => {
  return object.x
}

const point = (x, y) => {
  return { x: x, y: y }
}

const emptyObject = () => {
  return {}
}

const distance = (p1, p2) => {
  return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2)
}

const midpoint = (p1, p2) => {
  return { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 }
}

const sumSalaries = (array) => {
 let sum = 0
 for(let i = 0; i < array.length; i++) {
   sum += array[i].salary
 }
 return sum
}

const newHighScore = (highScore, array) => {
  let m = 0
  for(let i = 0; i < array.length)
  if (array[i].score > highScore.score) {
m += array[i]
    
  }
  return m
}


const summarizeBooks = (array) => {
  let pages = 0
  let titles = []
  for (let i = 0; i < array.length; i++) {
    pages += array[i].pages
    titles.push(array[i].title)

  }
  return {
    pages: pages, titles: titles
  }
}


