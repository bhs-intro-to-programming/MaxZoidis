// Some constants you will need. No need to do anything to these
const JUPITER_GRAVITY = 24.79;
const EARTH_GRAVITY = 9.8;
const G = 6.6743e-11;

// Write your code here. Remember that you get partial credit for a
// syntactically correct function skeleton, more credit for a skeleton with a
// reasonable argument list, yet more credit for a working function, and full
// credit for a clear and simple working function.

const itemsLeftOver = (items, people) => {
  return items % people
}

const areaOfCircle = (radius) => {
  return radius * Math.PI ** 2
}

const volumeOfCube = (length) => {
  return length ** 3
}

const populationGrowth = (population, growthrate) => {
  return population * growthrate
}

const earnedRunAverage = (earnedruns, inningspitched) => {
return (earnedruns / inningspitched) * 9
}

const valueOfJewels = (diamonds, emeralds, valdiamonds,valemeralds) => {
return diamonds * valdiamonds + emeralds * valemeralds
}

const payWithOvertime = (hoursWorked, hourlyrate, overtimeRate) => {
const normal = (hoursWorked, 8)
const overtime = (hoursWorked - normal)
return normal * hourlyrate + overtimeRate * overtime
  }
}