const ZKLib = require('../zklib');
const ip = '192.168.1.201'; // device ip

const basic = async () => {
  // initialization
  const zkInstance = new ZKLib(ip, 4370, 10000, 4000, 0);

  try {
    // create connection with the device
    console.log("Trying to conenct...");
    await zkInstance.createSocket()
    console.log("Connection established!");

    // get all previous attendences
    await zkInstance.enableDevice()
    const attendences = await zkInstance.getAttendances()
    console.log(attendences)
    await zkInstance.disableDevice()

    // disconnect the machine when you dont need realtime logs
    await zkInstance.disconnect()
  } catch (e) {
    console.log("Error", e);
  }
}

basic()