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
  return p1.x +p2.x === p2.y + p1.y
};



const isWinner = (player) => {
  if (player.score > 100) {
    return true
  }
  else {
    return false
  }
};

const updateWins = (players) => {

};

const bigWinners = (players) => {
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
