const needHeavyCoat = (outside, somewhereCold) => {
  return outside && somewhereCold
}

const needSunscreen = (beach, skiSlopes) => {
  return beach && skiSlopes
}


const  needMittens = (outside, warm) => {
  return outside && !warm
}


const isVenomous = (striped, blueHead) => {
  return !blueHead
}