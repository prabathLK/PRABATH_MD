const { tlang, cmd,fetchJson, sleep, getBuffer, runtime, prefix, formatp, Config } = require('../lib')
const ytdl = require('ytdl-secktor')
const fs = require('fs')
var videotime = 6000 // 100 min
var dlsize = 200 // 200mb

  cmd({
            pattern: "ytd",
            desc: "Sends info about the query(of youtube video/audio).",
            category: "downloader",
            react: "🪄",
            filename: __filename,
            use: '<faded-Alan walker.>',
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`*Please Give Me A Topic*❗ `)
            let yts = require("secktor-pack");
            let search = await yts(text);
            let anu = search.videos[0];
            let list = [{
title: 'DOWNLOAD VIDEO',
rowId: `${prefix}ytmp4 ${anu.url}`,
description: ' '
},
{
title: 'DOWNLOAD AUDIO',
rowId: `${prefix}ytmp3 ${anu.url}`,
description: ' '
},
{
title: 'DOWNLOAD DOCUMENT',
rowId: `${prefix}ytdoc ${anu.url}`,
description: ' '
},
{
title: 'SEARCH MORE VIDEO',
rowId: `${prefix}video ${text}`,
description: ' '
},
{
title: 'SEARCH MORE AUDIO',
rowId: `${prefix}audio ${text}`,
description: ' '
}
            ]
            ted = `┏━━━━━━━━━━━━━━━━━━━━━━━━━
┃   *YOUTUBE DOWNLOADER*
┗━━━━━━━━━━━━━━━━━━━━━━━━━
*Hello .* ${citel.pushName}
*I Am 𝗣𝗥𝗔𝗕𝗔𝗧𝗛-𝗠𝗗*


⦁ *RUNNING TIME :* ${runtime(process.uptime())}
⦁ *RAM USAGE    :* ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}




👨‍💻 *YOUTUBE DOWNLADER* 👨‍💻`
            const sections = [

                {
                    title: "Select & Send",
                    rows: list
                }

            ]
            const listMessage = {
                text: ted,
                footer: tlang().footer,
                title: ``,
                buttonText: "Select",
                mentions: await Void.parseMention(ted),
                sections
            }
            return Void.sendMessage(citel.chat, listMessage, {
                quoted: citel
            })
        }
    )
