"use strict";
let fs = require('fs-extrq')
let chalk = require('chalk')
let { tanggal } = require('../lib/myfunc')
let moment = require('moment-timezone')

module.exports = async function antidelete(ZeroTwoInc, m) {
    let chat = global.db.data.chats[m.key.remoteJid]
    let getName = await ZeroTwoInc.getName(m.participant)
    if (!chat.antidel) return
    let teks = `
「 *ANTI DELETE MESSAGE* 」
⭔ *User Name:* ${pushname}
⭔ *User :* @${m.participant.split("@")[0]}
⭔ *Time :* ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB
⭔ *Type :* ${Object.keys(m.message.message)[0]}
`
    ZeroTwoInc.sendTextWithMentions(m.key.remoteJid, teks, m.message)
    ZeroTwoInc.copyNForward(m.key.remoteJid, m.message).catch(e => console.log(e, m))
    console.log
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${file}`))
	delete require.cache[file]
	require(file)
})
