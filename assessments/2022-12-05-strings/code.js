const upToX = (s) => {
  return s.substring(0,s.indexOf('x') )
}

const charactersAround =(s, n) => {
  return s.substring(n-1) + s.substring(n+1)
}