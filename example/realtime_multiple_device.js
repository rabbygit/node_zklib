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