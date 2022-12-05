const upToX = (s) => {
  return s.substring(0, s.indexOf('x'))
}

const charactersAround = (s, n) => {
  return s.substring(n.indexOf - 1) + s.substring(n.indexOf + 1)
}

const middle = (s) => {
  return s.substring(0, s.length/4) + s.substring( s.length/4)
}