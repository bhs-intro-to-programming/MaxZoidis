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
  return s.indexOf('x') !== -1
  }

const slug = (s1, s2, s3) => {
  return s1.toLowerCase() + '-' + s2.toLowerCase() + '-' + s3.toLowerCase()
  }

  const capitalize = (s) => {
    return s.substring(0,1).toUpperCase() + s.substring(1,s.length).toLowerCase()
  }

  const capitalizeName = (s) => {
    const space = s.indexOf(' ')
    return capitalize(s.substring(0, space)) + ' ' + capitalize(s.substring(space + 1))
  }