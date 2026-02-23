const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "IK~38BwEJZL#Thorvg5vGelsIKZOr27rucO6UMp3mZ2WFXjpOIWB-nA",
    PREFIX: process.env.PREFIX || ".",
    MODE: process.env.MODE || "public",
    OWNER_NUMBER: process.env.OWNER_NUMBER || "254714513107",
    OWNER_NAME: process.env.OWNER_NAME || "Alex",
};
