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
  return
}

const probabilityAllHeads = (coinFlips) => {
  return 0.5 ** coinFlips
}

const futureHour = (currentHour, hoursFuture) => {
  return currentHour + hoursFuture
}