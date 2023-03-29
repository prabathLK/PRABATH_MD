const os = require('os');

const { cmd,tlang,prefix,runtime,formatp} = require('../lib/');

cmd({

            pattern: "gs",

            desc: "(menu cmdlist).",

            category: "downloader",

            react: "⚙️",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

            let buttonMessage = {

                image: {

                    url: await botpic(),

                },

                caption: `

┏━━━━━━━━━━━━━━━━━━━━━━━━━
┃  *GROUP SETTINGS CHANGE*
┗━━━━━━━━━━━━━━━━━━━━━━━━━


🔇 *MUTE GROUP -* .group close
🔊 *UNMUTE GROUP -* .group open


✅ *ACTIVE ANTILINK -* .act antilink
❌ *DEACTIVE ANTILINK -* deact antilink


✅ *ACTIVE BOT THIS GROUP -* .bot on
❌ *DEACTIVE BOT THIS GROUP -* .bot off


✅ *ACTIVE ADD AND LEFT MSJ -* .act events
❌ *DEACTIVE ADD AND LEFT MSJ -* .deact events

`,

                footer: tlang().footer,


                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )
