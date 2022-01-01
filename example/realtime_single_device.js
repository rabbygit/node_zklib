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