const ZKLib = require('./zklib');

const test = async () => {
    let zkInstance = new ZKLib('192.168.1.246', 4370, 10000, 4000);
    try {
        console.log("Trying to conenct...");
        await zkInstance.createSocket()
        console.log("Connection established!");
    } catch (e) {
        console.log("Initial error", e);
    }

    zkInstance.getRealTimeLogs(async (err, data) => {
        try {

            if (err) {
                console.log('Error in registaring real time event');
                console.log(err);
            }

            // push to server if possible
            console.log({ Attendence: data });
        } catch (error) {
            // Handle error and store to local db
        }
    });
}

test()