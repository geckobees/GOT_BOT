const getAllFiles = require('..utils/getAllFiles');
const path = require('path');


module.exports = (client) => {
    const eventFolders = getAllFiles(path.join(__dirname, '..', 'events'), true);

    for(const eventFolder in eventFolders){
        const eventFiles = getAllFiles(eventFolder);
        const eventName = eventFolder.replace(/\\/g, '/').split('/').pop();
        console.log(eventName);
    }
};