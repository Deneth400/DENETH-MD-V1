const config = require('../config')
const {cmd , commands} = require('../command')
const {sleep} = require('../lib/functions')

cmd({
    pattern: "restart",
    desc: "RESTART THE DENETH-MD WA-BOT",
    category: "owner",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const {exec} = require("child_process")
reply("RESTARTING...🔄")
await sleep(1500)
exec("pm2 restart all")
}catch(e){
console.log(e)
reply(`${e}`)
}
})
