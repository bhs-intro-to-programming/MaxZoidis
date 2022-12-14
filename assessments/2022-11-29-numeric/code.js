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