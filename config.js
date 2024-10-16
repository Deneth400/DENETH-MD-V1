const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "gmlEQQgK#I3p8_RkDchmZYAjNsuKWATOwQIJjyJW6C_ReK7-4oMY",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/denethhansaka/DENETH-MD-Files/blob/main/Images/DENETH-MD.jpg?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*╔╭────────────╮╕*
*╭│ⱧＥLLO, I'm Alive Now👾  │─◎◎▷*
*╘╰────────────╯╜*
*│A DENETH-MD Whatsapp Bot Based │Third Party Application Provide* *Many │Services With A RealTime* *Automated │Consversational* *Experience, Enjoy💫.*
*│*
*│Type .menu To Get Bot User*
*│Menu💫*
*╰───────────────◎◎▷*",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",//මෙතනට (public,private,groups) යන තුනෙන් කැමති එකක් දෙන්න

};
