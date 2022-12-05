const upToX = (s) => {
  return s.substring(0, s.indexOf('x'))
}

const charactersAround = (s, n) => {
  return s.substring(n.indexOf - 1) + s.substring(n.indexOf + 1)
}

const middle = (s) => {
  return  s.substring( s.length - s.length/4)
}

const pair = (s1,s2) => {
  return s.substring(s1 + s.indexOf('and')) + s.substring(s2)
}