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
  return striped ||!bluehead
}

const okaySpeed = (mph, speed) => {
  return Math.abs(speed - limit) <= 10
}

const twiceAsExpensive = (price1, price2) => {
  return price1 > (price2 * 2)
}

const winningRecord = (wins, loss, ties) => {
  return wins > (wins + loss + ties) / 2
}

const isMagicNumber = (n) => {
return n === 42 || n === 17
}