// For a change of pace, I'm providing you with all the function skeletons. This
// should save you some time.

const area = (rect) => {
  return rect.width * rect.height
};

const higherPaid = (e1, e2) => {
  if (e1.salary > e2.salary) {
    return e1
  }
  else {
    return e2
  }
};

const isSamePoint = (p1, p2) => {
  return p1.x === p2.x && + p1.y === p2.y
};



const isWinner = (player) => {
  return player.score > 100
}

const updateWins = (players) => {
  for (let i = 0; i < players.length; i++) {
    if (isWinner(players[i]))
      players.wins++
  }

};

const bigWinners = (players) => {
  let array = []
  for (let i = 0; i < players.length; i++) {
    if (players.wins[i] > 10)
      array.push(players[i])
    i++
  }
  return array
};

const fillTimesTable = (table) => {
  for (let i = 0; i < table.length; i++) {
    for (let j = 0; j < table.length; j++) {
      table[i][j] = (i + 1) * (j + 1)
    };
  }
}

const sums = (n) => {
  let array = [0]
  for (let i = 1; i < n + 1; i++) {
    return array = array[n - 1]
}
}


const rule110 = (cells) => {
};

const isWinner = (player) => {
  return player.score > 100
}
