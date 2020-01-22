const { waitForIt } = require('./waitForIt')

function main() {
  const message = waitForIt()
  console.log(message)
}

main()
