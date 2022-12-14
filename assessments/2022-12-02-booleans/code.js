const needHeavyCoat = (outside, cold) => {
  return outside && cold
}

const needSunscreen = (beach, skis) => {
  return beach || skis
}

const needMittens = (outside, warm) => {
  return outside && !warm
}

const isVenomous = (striped, bluehead) => {
  return striped || !striped && !bluehead
}

const okaySpeed = (mph, speed) => {
  return speed > mph - 10 || speed < mph + 10
}

const twiceAsExpensive = (price1, price2) => {
  return price1 > (price2 * 2)
}

const winningRecord = (wins, loss, ties) => {
  return wins > (wins + loss + ties) / 2
}

const isMagicNumber = (n) => {
  if (n === 42) {
    return true
  } else if (n === 17{
    return true
  } else {
    return false
  }
}