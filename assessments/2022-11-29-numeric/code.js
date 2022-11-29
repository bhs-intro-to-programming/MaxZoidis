const totalEggs = (hardBoiled, softBoiled) => {
  return hardBoiled + softBoiled
}

const chocolatesPerPerson = (numChocolates, numPeople) => {
  return Math.floor(numPeople % numChocolates)
}

const extraChocolates = (numChocolates, numPeople) => {
  return numChocolates % numPeople
}

const leftOut = (chocolates, people) => {
  return people % chocolates
}
