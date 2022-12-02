const needHeavyCoat = (outside, somewhereCold) => {
  return outside && somewhereCold
}

const needSunscreen = (beach, skiSlopes) => {
  return beach && skiSlopes
}


const needMittens = (outside, warm) => {
  return outside && !warm
}


const isVenomous = (striped, blueHead) => {
  return !blueHead
}


const okaySpeed = (mph, carSpeed) => {
  return carSpeed < (mph - 10)
}

const twiceAsExpensive = (a, b) => {
  return a > (b * 2)
}


const winningRecord = (wins, losses, ties) => {
  return wins > (wins + losses + ties) / 2
}

const isMagicNumber = (a) => {
return a === 42 || 17
}
