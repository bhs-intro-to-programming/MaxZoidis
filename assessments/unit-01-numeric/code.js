// Some constants you will need. No need to do anything to these
const JUPITER_GRAVITY = 24.79;
const EARTH_GRAVITY = 9.8;
const G = 6.6743e-11;

// Write your code here. Remember that you get partial credit for a
// syntactically correct function skeleton, more credit for a skeleton with a
// reasonable argument list, yet more credit for a working function, and full
// credit for a clear and simple working function.

const itemsLeftOver = (people, items) => {
  return people % items
}

const areaOfCircle = (radius) => {
  return Math.PI * radius ** 2
}

const volumeOfCube = (sideLength) => {
  return sideLength ** 3
}

const populationGrowth = (populationSize, growthRate) => {
  return populationSize * growthRate
}

const earnedRunAverage = (earnedRuns, inningsPitched) => {
  return (earnedRuns / inningsPitched) * 9
}

const valueOfJewels = (numDiamonds, numEmeralds, valueDiamond, valueEmerald) => {
  return (numDiamonds * valueDiamond) + (numEmeralds * valueEmerald)
}

const payWithOvertime = (hoursWorked, hourlyRate, overtimeRate) => {
return 
}

const firstClassPostage = (weight) =>{
return 24 * weight + 36
}

const weightOnJupiter = (weight) => {
  return weight * ( JUPITER_GRAVITY/EARTH_GRAVITY)
}

const gravity = (mass1, mass2, distance) => {
  return ((mass1 * mass2)/distance**2) * G
}