const totalEggs = (hardBoiled, softBoiled) => {
  return hardBoiled + softBoiled
}

const chocolatesPerPerson = (chocolates, people) => {
  return Math.floor(chocolates/people)
}

const extraChocolates = (chocolates, people) => {
  return chocolates % people
}

const leftOut = (chocolates, people) => {
  return Math.max(people - chocolates, 0)

}

const probabilityAllHeads = (numFlips) => {
  return 0.5 ** numFlips
}

const futureHour = (currentHour, futureHours) => {
  return (currentHour + futureHours) % 24
}