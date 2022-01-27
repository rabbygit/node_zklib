const ZKLib = require('../zklib');
const ip = '192.168.1.201'; // device ip

const user = async () => {
  // initialization
  const zkInstance = new ZKLib(ip, 4370, 10000, 4000, 0);

  try {
    // create connection with the device
    console.log("Trying to conenct...");
    await zkInstance.createSocket()
    console.log("Connection established!");

    // set new user
    await zkInstance.enableDevice()
    await zkInstance.setUser('TEST_USER', 'password')
    await zkInstance.disableDevice()

    // get all users
    await zkInstance.enableDevice()
    const users = await zkInstance.getUsers()
    console.log(users)
    await zkInstance.disableDevice()

    // delete a user
    await zkInstance.enableDevice()
    await zkInstance.deleteUser(2065)
    await zkInstance.disableDevice()

    // disconnect the machine when you dont need realtime logs
    await zkInstance.disconnect()
  } catch (e) {
    console.log("Error", e);
  }
}

user()