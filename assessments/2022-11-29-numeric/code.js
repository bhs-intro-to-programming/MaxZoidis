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