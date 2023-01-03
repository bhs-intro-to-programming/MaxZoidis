const getX = (o) => {
  return o.x
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
  let count = 0
  for (let i = 0; i < array.length; i++) {
    count += array[i].salary
  }
  return count
}

const newHighScore = (highScore, players) => {
  let p = highScore
  for (let i = 0; i < players.length; i++) {
    if (players[i].score > p) {
      p = players[i].score
    }
  }
  return p
}

const summarizeBooks = (array) => {
  let pages = 0
  let titles = []
  for (let i = 0; i < array.length; i++) {
    pages += array[i].pages
    titles.push(array[i].title)
  }
  return {
    pages: pages,
    titles: titles
  }
}
