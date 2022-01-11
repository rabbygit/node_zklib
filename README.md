# node_zklib

A node.js library for zksoftware (zkteco family) attendance machine.

# Installation steps

1. Clone this repository and go to the cloned directory
2. Install dependencies
```sh
   npm install
```

# Basic usages
```sh
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
    
    // get all users
    const users = await zkInstance.getUsers()
    console.log(users)

    // get all previous attendences
    const attendences = await zkInstance.getAttendances()
    console.log(attendences)

    // disconnect the machine when you dont need realtime logs
    await zkInstance.disconnect()
  } catch (e) {
    console.log("Conection error", e);
  }
}

basic()
```

# Realtime attendence for single device
```sh
const ZKLib = require('../zklib');
const ip = '192.168.1.201'; // device ip

const realtime_attendence = async () => {
    // initialization
    const zkInstance = new ZKLib(ip, 4370, 10000, 4000, 0);

    try {
        // create connection with the device
        console.log("Trying to conenct...");
        await zkInstance.createSocket()
        console.log("Connection established!");
    } catch (e) {
        console.log("Connection error", e);
    }

    // register the event
    zkInstance.getRealTimeLogs((err, data) => {
        if (err) {
            console.log('Error in registaring real time event');
            console.log(err);
        }

        // realtime attendence
        console.log({ Attendence: data });
    });
}

realtime_attendence()
```

# Realtime attendence for multiple devices
```sh
const ZKLib = require('../zklib');
// list of device ip
const ips = [
    '192.168.1.201',
    '192.168.1.202',
    '192.168.1.246'
]

const realtime_attendence_multiple_device = async () => {
    for (let index = 0; index < ips.length; index++) {
        const ip = ips[index];
        // initialization for each device ip
        const zkInstance = new ZKLib(ip, 4370, 10000, 4000, 0);

        try {
            // create connection with the device
            console.log("Trying to conenct...");
            await zkInstance.createSocket()
            console.log("Connection established!");
        } catch (e) {
            console.log("Connection error", e);
        }

        // register the event for each ip
        zkInstance.getRealTimeLogs((err, data) => {
            if (err) {
                console.log('Error in registaring real time event');
                console.log(err);
            }

            console.log('Attendemce From: ', zkInstance.ip);
            console.log({ Attendence: data });
        });
    }
}

realtime_attendence_multiple_device()
```

# list of tested devices
```sh
Device Name: F18
```
If you have another version tested and it worked, please inform me to update this list!
