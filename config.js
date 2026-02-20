const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "IK~v1hCQZJZ#pKRVhTHcv05yXbIfLaLRpU_jKP50gberMHtmW3ZK7nw",
    PREFIX: process.env.PREFIX || ".",
    CHATBOT: process.env.CHATBOT || "off",
    BOT_NAME: process.env.BOT_NAME || "DARKZONE-MD",
    MODE: process.env.MODE || "public",
    REPO: process.env.REPO || "https://github.com/alexmwachemba44-cpu/DARKZONE-MD",
    OWNER_NUMBER: process.env.OWNER_NUMBER || "2540714513107",
    OWNER_NAME: process.env.OWNER_NAME || "ALEX MWACHEMBA",
    SUDO: process.env.SUDO || "2540714513107",
    ANTILINK: process.env.ANTILINK || "true",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    AUTO_VOICE: process.env.AUTO_VOICE || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
};
