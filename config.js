const fs = require('fs');
const path = require('path');
const { getConfig } = require("./lib/config");

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    // ===== BOT CORE SETTINGS =====
    SESSION_ID: process.env.SESSION_ID || "IK~v1hCQZJZ#pKRVhTHcv05yXbIfLaLRpU_jKP50gberMHtmW3ZK7nw",
    PREFIX: getConfig("PREFIX") || ".",
    CHATBOT: getConfig("CHATBOT") || "off",
    BOT_NAME: process.env.BOT_NAME || "DARKZONE-MD",
    MODE: getConfig("MODE") || "public",
    REPO: process.env.REPO || "https://github.com/alexmwachemba44-cpu/DARKZONE-MD",
    BAILEYS: process.env.BAILEYS || "@whiskeysockets/baileys",

    // ===== OWNER & DEVELOPER SETTINGS =====
    OWNER_NUMBER: process.env.OWNER_NUMBER || "2540714513107",
    OWNER_NAME: process.env.OWNER_NAME || "ALEX MWACHEMBA",
    SUDO: process.env.SUDO || "2540714513107",

    // ===== ADDITIONAL SETTINGS =====
    ANTILINK: getConfig("ANTILINK") || "true",
    AUTO_READ_STATUS: getConfig("AUTO_READ_STATUS") || "true",
    AUTO_VOICE: getConfig("AUTO_VOICE") || "false",
    AUTO_REPLY: getConfig("AUTO_REPLY") || "false",
};
