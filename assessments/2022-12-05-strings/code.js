const upToX = (s) => {
  return s.substring(0, s.indexOf('x'))
}

const charactersAround = (s, index ) => {
  return s[index - 1] + s[index + 1]
}

const middle = (s) => {
  return s.substring(s.length * 0.25, s.length * 0.75)
}

const pair = (s1, s2) => {
  return s1 + ' and ' + s2
}

const containsX = (s) => {
  if  (s.indexOf('x') === true) {
    return true
  }
  return false
}