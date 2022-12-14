////////////////////////////////////////////////////////////////////////
// Scroll to the bottom to where it says "Write your code here ..." to actually
// write your code. Just above that is a list of Math functions that you might
// find useful. Everything before that you can safely ignore--I am providing
// functions and other constants you may need to use in our code but nothing
// that you need to change even necessarily understand the internals of. You
// will however need to understand how to use these functions and constants as
// described in the questions.

const JUPITER_GRAVITY = 24.79;
const EARTH_GRAVITY = 9.8;
const G = 6.6743e-11;

/*
 * You will need this function for some of the problems. It returns a random
 * number between 0, inclusive, and n, exclusive. Thus rand(3) could possibly
 * return 0, 1, or 2 but will not return 3.
 */
const rand = (n) => Math.floor(Math.random() * n);

// You will use this function in one of the problems. You don't need to change
// it or even worry about how exactly it works.
const emit = (a, b, product) => {
  console.log(`${a} times ${b} is ${product}`);
};

/*
 * Log the object via console.log.
 */
const log = (x) => { console.log(x); }

/*
 * Record an okay object.
 */
const recordOk = (x) => { log(`OK: ${x}`); }

/*
 * Record a not-okay object.
 */
const recordNotOk = (x) => { log(`NOT OK: ${x}`); }

/*
 * Record a meh object.
 */
const recordMeh = (x) => { log(`MEH: ${x}`); }

/*
 * This one is some particular dark magic. Definitely don't worry about
 * what it's doing.
 */
const hash = (s) => {
  return [...JSON.stringify(s)]
    .reduce((hash, c) => ((hash << 5) + hash) + c.codePointAt(0), 5381);
};

/*
 * An arbitrary predicate on numbers you will use in one function.
 */
const isLeet = (n) => n % 1337 === 0;

/*
 * Return a random number between 0, inclusive, and 10,000, exclusive.
 */
const random10k = () => rand(10_000);

/*
 * Return true if the argument is "okay". This implementation treats roughly
 * half of all possible values as okay and the other half as not okay. Which are
 * which is essentially random but is stable.
 */
const isOk = (x) => hash(JSON.stringify(x)) % 2 == 0;

/*
 * Return true if the argument is "meh".
 */
const isMeh = (x) => !isOk(x) && hash(JSON.stringify(x)) % 3 == 0;

/*
 * Record a pair.
 */
const pair = (a, b) => {
  log(`pair: ${a},${b}`);
};

////////////////////////////////////////////////////////////////////////
// For your reference, here are some functions and constants from Math
// that you might find useful

// Math.PI - a constant giving the closest approximation of ?? available
// Math.abs(n) - a function that computes the absolute value of its argument
// Math.ceil(n) - a function that rounds its argument up to the nearest integer
// Math.floor(n) - a function that rounds its argument down to the nearest integer
// Math.max(a, b) - a function that returns the largest of its arguments
// Math.min(a, b) - a function that returns the smallest of its arguments
// Math.sqrt(n) - a function that returns the square root of its argument

////////////////////////////////////////////////////////////////////////
// Write your code here ...

//numbers
const itemsLeftOver = (people, items) => {
  return people % items
}

const areaOfCircle = (radius) => {
  return Math.PI * radius ** 2
}

const volumeOfCube = (length) => {
  return length ** 3
}

const populationGrowth = (population, growthrate) => {
  return population * growthrate
}

const totalEggs = (hardBoiled, softBoiled) => {
  return hardBoiled + softBoiled
}

const extraChocolates = (chocolates, people) => {
return chocolates % people
}

// booleans
const needHeavyCoat = (outside, cold) => {
  return outside && cold
}

const needSunscreen = (beach, skis) => {
  return beach || skis
}

const needMittens = (outside, warm) => {
  return outside && !warm
}

const fireAlarm = (pulled, smoke, drill) => {
  return smoke || pulled || drill
}


const isMagicNumber = (n) => {
  return n === 42 || n === 17
}

//Strings

const firstFewEveryOther = (s) => {
  return s[0] + s[2] + s[4]
}

const firstHalf = (s) => {
  return s.substring(0, s.length / 2)
}

const secondHalf = (s) => {
  return s.substring(s.length / 2)
}

const swapFrontAndBack = (s) => {
  return s.substring(s.length / 2) + s.substring(0, s.length / 2)
}

const upDown = (s) => {
  return s.toUpperCase() + s.toLowerCase()
}

// Control Constructs

const logIfOk = (o) => {
  if (isOk(o)) {
    log(o)
  }
}


const classify = (o) => {
  if (isOk(o)) {
    recordOk(o)
  } else {
    recordNotOk(o)
  }
}

const threewayClassify = (o) => {
  if (isOk(o)) {
    recordOk(o)
  } else if (isMeh(o)) {
    recordMeh(o)
  } else {
    recordNotOk(o)
  }
}

const sumOfSquares = (n) => {
  let sum = 0
  for (let i = 0; i < n; i++) {
    sum += i ** 2
  }
  return sum
}

const countXs = (s) => {
  let count = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'x') {
      count++
    }
  }
  return count
}

//Arrays

const makeRow = () => {
  return [' ', ' ', ' ']
}

const makeBoard = () => {
  return [makeRow(), makeRow(), makeRow()]
}

const allTheSame = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[0] !== array[i]) {
      return false
    }
  }
  return true
}

const extractColumn = (board, index) => {
  let newBoard = []
  for (let i = 0; i < board.length; i++) {
    newBoard.push[i][index]
  }
  return newBoard
}

const placeMark = (array, moves) => {
  for (let i = 0; i < array.length; i++) {
    placeMark(array, moves[i])
  }
}

//objects

const isSamePoint = (p1,p2) => {
  return p1.x === p2.x && p1.y === p2.y
}

const area = (rect) => {
  return rect.width * rect.height
}

const higherPaid = (e1, e2) => {
  if (e1.salary > e2.salary) {
    return e1
  } else {
    return e2
  }
}

const isWinner = (o) => {
  return o.score > 100
}

const rowForMove = (array, n) => {
  return array[n].row
}