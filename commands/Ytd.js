const { tlang, cmd,fetchJson, sleep, getBuffer, runtime, prefix, formatp, Config } = require('../lib')
const ytdl = require('ytdl-secktor')
const fs = require('fs')

 cmd({
            pattern: "ytd",
            desc: "Sends info about the query(of youtube video/audio).",
            category: "downloader",
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
title: 'SEARCH MORE VIDEO ➕',
rowId: `${prefix}video ${text}`,
description: ' '
},
{
title: 'SEARCH MORE AUDIO ➕',
rowId: `${prefix}audio ${text}`,
description: ' '
}
            ]
            ted = `┏━━━━━━━━━━━━━━━━━━━━━━━━━
┃   *YOUTUBE DOWNLOADER*
┗━━━━━━━━━━━━━━━━━━━━━━━━━


⦁ *RUNNING TIME :* ${runtime(process.uptime())}

⦁ *MADE BY PRABATH* ✅.
 
⦁ *Use it to download YouTube videos, songs easily* 🪄



⦿. *REQUEST BY:* ${citel.pushName}


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
                buttonText: "Results",
                mentions: await Void.parseMention(ted),
                sections
            }
            return Void.sendMessage(citel.chat, listMessage, {
                quoted: citel
            })
        }
    )
