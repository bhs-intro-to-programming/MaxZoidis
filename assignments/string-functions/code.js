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

const allButFirstAndLast = (s) => {
  return s.slice(1,s.length) + s.slice(s.length-1)
}

const everyOther = (s) => {
  return s.slice(0) + s.slice(2) + s.slice(4)
}

const upDown = (s) => {
  return s.length.toUppercase() + s.length.toUpperCase
}