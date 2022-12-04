const firstThree = (foobar) => {
  return foobar.substring(0, 3)
}

const lastThree = (foobar) => {
  return foobar.substring(foobar.length - 3)
}

const capitalize = (foo) => {
  return foo[0].toUpperCase() + foo.substring(1).toLowerCase()
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
  return s.slice(0, 3).toUpperCase() + s.slice(3, s.length).toLowerCase()
}

const allButFirstAndList = (s) => {
  return s.slice(s.length - 0) + s.slice(s.length - 1)
}


const firstHalf = (foobar) => {
  return foobar.slice(0, 3)
}

const upDownLastCharacter = (s,) => {
  return s[s.length - 1].toUpperCase() + s[s.length - 1].toLowerCase()
}

const firstAndLast = (s) => {
  return s[0] + s.slice(s.length - 1)
}

const upDown = (s) => {
  return s.toUpperCase() + s.toLowerCase()
}