const os = require('os');

const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMemory : os.totalmem(),
    FreeMemory : os.freemem(),
}

console.log(currentOS)