const ZKLib = require('./zklib');
const ip = '192.168.1.201';

const test = async () => {
    const zkInstance = new ZKLib(ip, 4370, 10000, 4000);

    try {
        console.log("Trying to conenct...");
        await zkInstance.createSocket()
        console.log("Connection established!");
    } catch (e) {
        console.log("Initial error", e);
    }

    zkInstance.getRealTimeLogs((err, data) => {
        if (err) {
            console.log('Error in registaring real time event');
            console.log(err);
        }

        console.log({ Attendence: data });
    });
}

test()