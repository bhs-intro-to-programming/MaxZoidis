// For a change of pace, I'm providing you with all the function skeletons. This
// should save you some time.

const area = (rect) => {
  rect.width * rect.height
};

const higherPaid = (e1, e2) => {
  if(el.salary > e2.salary ) {
    return e1
  }
  return e2
};

const isSamePoint = (p1, p2) => {
};

const totalWithTip = (bill, tipPercentage) => {
};

const isWinner = (player) => {
  return player.score > 100
};

const updateWins = (players) => {
  let count = 0
  for (let i = 0; i < players.length; i++) {
    if (isWinner(players[i]))
      count++
  }
  return count
};

const bigWinners = (players) => {
  let array = []
  for (let i = 0; i < players.length; i++) {
    if (players[i].wins > 10)
    array.push(players[i])
  }
  return array
};

const fillTimesTable = (table) => {
  for(let i = 0; i< table.length; i++) {
    for(let j = 0;j < table.length;j++) {
      return table[i][j] = (i + 1) * (j + 1)
    }
  }
};

const sums = (n) => {
  let xs = []
  for(let i = 0; i < n + 1;i++) {
  xs.push(i + 1)
  }
  return xs
};

const rule110 = (cells) => {
};
