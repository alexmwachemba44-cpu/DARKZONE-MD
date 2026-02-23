const fs = require('fs');
const path = require('path');
const { getConfig } = require("./lib/config");

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    // ===== BOT CORE SETTINGS =====
    // Hapa nimeweka Session ID yako uliyotuma
    SESSION_ID: process.env.SESSION_ID || "IK~38BwEJZL#Thorvg5vGelsIKZOr27rucO6UMp3mZ2WFXjpOIWB-nA",
    PREFIX: getConfig("PREFIX") || ".", 
    CHATBOT: getConfig("CHATBOT") || "on",
    BOT_NAME: process.env.BOT_NAME || "DARKZONE-MD",
    MODE: getConfig("MODE") || "public",
    REPO: process.env.REPO || "https://github.com/ERFAN-Md/DARKZONE-MD",
    BAILEYS: process.env.BAILEYS || "@whiskeysockets/baileys",

    // ===== OWNER & DEVELOPER SETTINGS =====
    // Namba yako ya simu hapa chini (254714513107)
    OWNER_NUMBER: process.env.OWNER_NUMBER || "254714513107",
    OWNER_NAME: process.env.OWNER_NAME || "Bosi",
};
