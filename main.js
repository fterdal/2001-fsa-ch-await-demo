const { waitForIt } = require("./waitForIt")

async function main() {
  try {
    console.log("Starting the promise")
    const message = await waitForIt("Hello World", 1000, true)
    console.log("Finished awaiting the promise")
    console.log(message)
  } catch (error) {

    console.log("caught the error! ✅")
    console.error(error)
  }
}
main()
