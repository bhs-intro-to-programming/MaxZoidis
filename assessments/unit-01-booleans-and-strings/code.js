/*
 * You will need this function for some of the problems. It returns a random
 * number between 0, inclusive, and n, exclusive. Thus rand(3) could possibly
 * return 0, 1, or 2 but will not return 3.
 */
const rand = (n) => Math.floor(Math.random() * n);

// Write your code here. Remember that you get partial credit for a
// syntactically correct function skeleton, more credit for a skeleton with a
// reasonable argument list, yet more credit for a working function, and full
// credit for a clear and simple working function.

const fireAlarm = (alarmPulled, smokeDetected, plannedDrill) => {
  return alarmPulled || smokeDetected || plannedDrill
}


const canBePresident = (thirtyFive, bornCitizen, livedFourteen) => {
  return thirtyFive && bornCitizen && livedFourteen
}


const willSeeTweet = (follows, followsRetweet, blocked) => {
  return follows || followsRetweet && !blocked
}


const evenGreaterThanZero = (number) => {
  return (number % 2 === 0) && number > 0
}


const isLeapYear = (year) => {
  return
}


const firstAndLast = (s) => {
  return s.substring(1,s.length-1)
}
