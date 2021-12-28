const ZKLib = require('../zklib');
const ips = [
    '192.168.1.201',
    '192.168.1.202',
    '192.168.1.246'
]

const test = async () => {
    for (let index = 0; index < ips.length; index++) {
        const ip = ips[index];
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

            console.log('Attendemce From: ', zkInstance.ip);
            console.log({ Attendence: data });
        });
    }
}

test()