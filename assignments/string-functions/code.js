const firstThree = (foobar) => {
  return foobar.substring(0, 3)
}

const lastThree = (foobar) => {
  return foobar.substring(foobar.length - 3)
}

const capitalize = (foo) => {
  return foo[0].toUpperCase() + foo.substring(1).toLowerCase()
}

const firstThree = (foobar) => {
  return foobar.substring(0, 3).toUpperCase()