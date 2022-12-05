const firstThree = (foobar) => {
  return foobar.substring(0, 3)
}

const lastThree = (foobar) => {
  return foobar.substring(foobar.length - 3)
}

const capitalize = (foo) => {
  return foo[0].toUpperCase() + foo.substring(1,).toLowerCase()
}

const firstCharacter = (s) => {
  return s.slice(0, 1)
}

const lastCharacter = (s) => {
  return s.slice(s.length - 1)
}

const allButFirst = (s) => {
  return s.slice(1, s.length)
}


const capitalizeFirstThree = (s) => {
  return s.substring(0, 3).toUpperCase() + s.substring(3, s.length).toLowerCase()
}

const upDownLastCharacter = (s) => {
  return s.substring(s.length - 1).toUpperCase() + s.substring(s.length - 1).toLowerCase()
}

const firstAndLast = (s) => {
  return s[0] + s.slice(s.length - 1)
}

const upDown = (s) => {
  return s.toUpperCase() + s.toLowerCase()
}

const concatenate = (s1, s2) => {
  return s1 + s2
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

const findFnord = (s) => {
  return s.indexOf('fnord')
}

const allButFirstAndList = (s) => {
  return s.substring(1, s.length - 1)
}

const isAllUpperCase = (s) => {
  return s.toUpperCase() === s
}

const sameIgnoringCase = (s1, s2) => {
  return s1.toUpperCase() === s2.toUpperCase()
}


const simplePigLatin = (s, firstVowel) => {
 return  s.substring(firstVowel) + s.substring(0, firstVowel) + 'ay';
}
const everyOther = (s) => {
  return s[0] + s[2] + s[4]
}