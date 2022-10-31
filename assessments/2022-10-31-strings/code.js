/*
 * You will need this function for some of the problems. It returns a random
 * number between 0, inclusive, and n, exclusive. Thus rand(3) could possibly
 * return 0, 1, or 2 but will not return 3.
 */
const rand = (n) => Math.floor(Math.random() * n);

// Write your code here. Remember that you get partial credit for a
// syntactically correct function skeleton and more credit for a skeleton with a
// reasonable argument list. To get full credit you need to write a correct
// function but you can get partial credit for a function that is basically
// correct even if contains small mistakes.

const firstHalf = (string) => {
  return string.length(0, 2)
}

const secondHalf = (string) => {
  return string.length(2, 5)
}

const upDown = (string) => {
  return string.toUpperCase() + string.toLowerCase()
}

const firstFewEveryOther = (string) => {
  return string.length(1) + string.length(3) + string.length(5)
}

const upDownLastcharacter = (string) => {
  return string.length(5).toUpperCase + string.length(5).toUpperCase
}