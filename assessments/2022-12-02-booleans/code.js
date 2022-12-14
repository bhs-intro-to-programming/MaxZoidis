const needHeavyCoat = (outside, cold) => {
  return outside && cold
}

const needSunscreen = (beach, skis) => {
  return beach || skis
}

const needMittens = (outside, warm) => {
  return outside && !warm
}