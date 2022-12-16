const totalEggs = (hardboiled, softboiled) => {
  return hardboiled + softboiled
}

const chocolatesPerPerson = (chocolates, people) => {
  return Math.floor(chocolates / people)
}

const extreaChocolates = (chocolates, people) => {
  return chocolates % people
}

const leftOut = (chocolates, people) => {
  return Math.max(people - chocolates, 0)
}

const probabilityAllHeads = (flips) => {
  return 0.5 ** flips
}

const futureHour = (hour,future) => {
  return hour + future % 24
}

const presentsBudget = (friends, price) => {
  return friends * price
}

const perPresent = (money, presents) => {
  return money / presents
}