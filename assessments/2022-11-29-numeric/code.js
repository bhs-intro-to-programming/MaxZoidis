const totalEggs = (hardBoiled, softBoiled) => {
  return hardBoiled + softBoiled
}

const chocolatesPerPerson = (numChocolates, numPeople) => {
  return Math.floor(numChocolates / numPeople)
}

const extraChocolates = (numChocolates, numPeople) => {
  return numChocolates % numPeople
}

const leftOut = (chocolates, people) => {
  return Math.floor(people - chocolates)
}
