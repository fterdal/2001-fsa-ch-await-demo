const waitForIt = (text = "Hello World!", ms = 1000, fail = false) => {
  return new Promise((resolve, reject) => {
    if (fail) {
      setTimeout(() => {
        reject("Oh NO! EVERYTHING IS ON FIRE! 🚨 🔥")
      }, ms)
    }
    setTimeout(() => {
      resolve(text)
    }, ms)
  })
}

module.exports = {
  waitForIt: waitForIt
}
