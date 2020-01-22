const waitForIt = (text = "Hello World!", ms = 1000) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(text)
    }, ms)
  })
}

module.exports = {
  waitForIt
}
