const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "gmlEQQgK#I3p8_RkDchmZYAjNsuKWATOwQIJjyJW6C_ReK7-4oMY",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/denethhansaka/DENETH-MD-Files/blob/main/Images/DENETH-MD.jpg?raw=true", 
ALIVE_MSG: process.env.ALIVE_MSG || "Hey,I am DENETH-MD Multi Device WA-BOT.I'm Alive Now😎.",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
