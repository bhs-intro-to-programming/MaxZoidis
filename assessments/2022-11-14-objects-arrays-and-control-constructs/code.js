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
for(let i =0;i < players.length; i++) {
  if (isWinner(players[i]))
   players.wins++
}
};

const bigWinners = (players) => {
  let array = []
  for(let i = 0; i < players.length;i++) {
if (players.wins[i] > 10) 
 array.push(players.wins++)
i++
  }
};

const fillTimesTable = (table) => {
};

const sums = (n) => {
  let p = 0
  for (let i = 0; i < n.length; i++) {
    return p
  }
};

const rule110 = (cells) => {
};
