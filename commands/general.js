/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/
const os = require('os');
const { tlang, botpic,cmd, prefix, runtime,Config,formatp } = require('../lib')
const axios = require('axios')
const speed = require('performance-now')
//---------------------------------------------------------------------------
cmd({
        pattern: "chatdectakag",
        desc: "chat with an AI",
        category: "general",
        use: '<Hii,Secktor>',
        filename: __filename,
    },
    async(Void, citel,text) => {
        let zx = text.length;
        if (zx < 30) {
            let {data} = await axios.get(`http://api.brainshop.ai/get?bid=167991&key=aozpOoNOy3dfLgmB&uid=[${citel.sender.split("@")[0]}]&msg=[${text}]`);
            return citel.reply(data.cnt);  
        }
        if (!text) return citel.reply(`Hey there! ${citel.pushName}. How are you doing these days?`);
        const { Configuration, OpenAIApi } = require("openai");
        const configuration = new Configuration({
            apiKey: Config.OPENAI_API_KEY || "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",
        });
        const openai = new OpenAIApi(configuration);
        const completion = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: text,
            temperature: 0.5,
            max_tokens: 80,
            top_p: 1.0,
            frequency_penalty: 0.5,
            presence_penalty: 0.0,
            stop: ['"""'],
        });
        citel.reply(completion.data.choices[0].text);
    }
)
//---------------------------------------------------------------------------
cmd({
        pattern: "script",
        alias: ["git", "github", "repo"],
        desc: "Sends info about repo.",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        let { data } = await axios.get('https://api.github.com/repos/SamPandey001/Secktor-Md')
        let cap = `*🌐 𝗣𝗥𝗔𝗕𝗔𝗧𝗛-𝗠𝗗 _𝗢𝗙𝗙𝗜𝗖𝗜𝗔𝗟 ♦️*

●. *Support group :* https://chat.whatsapp.com/KwFkWjI8qJ6B174esar8IM

●. *Github:* https://github.com/PrabathLK/PRABATH_MD

●. *Developer:* https://github.com/PrabathLK

ᴘʀᴀʙᴀᴛʜ-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ ᴘʀᴀʙᴀᴛʜ
ʀᴇʟᴇᴀsᴇᴅ ⦁ 𝟸𝟶𝟸𝟹/𝟶𝟷/𝟶𝟸
`
        let buttonMessaged = {
            image: { url: await botpic() },
            caption: cap,
            headerType: 4,
            }
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)

//---------------------------------------------------------------------------

cmd({

            pattern: "logo",

            desc: "(menu cmdlist).",

            category: "downloader",

            react: "🎲",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}system`,

                    buttonText: {

                        displayText: "System",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}ping`,

                    buttonText: {

                        displayText: "Ping",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: await botpic(),

                },

                caption: `
.logo1 text
.logo2 text
.logo3 text
.logo4 text
.logo5 text
.logo6 text
.logo7 text
.logo8 text
.logo9 text
.logo10 text
.logo11 text
.logo12 text
.logo13 text
.logo14 text
.logo15 text
.logo16 text
.logo17 text
.logo18 text
.logo19 text
.logo20 text
.logo21 text
.logo22 text
.logo23 text
.logo24 text
.logo25 text
.logo26 text
.logo27 text
.logo28 text
.logo29 text
.logo30 text


ᴘʀᴀʙᴀᴛʜ-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ ᴘʀᴀʙᴀᴛʜ
ʀᴇʟᴇᴀsᴇᴅ ⦁ 𝟸𝟶𝟸𝟹/𝟶𝟷/𝟶𝟸
`,

                footer: tlang().footer,


                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

//---------------------------------------------------------------------------

cmd({

            pattern: "groupcmdnew",

            desc: "(menu cmdlist).",

            category: "downloader",

            react: "📂",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}git`,

                    buttonText: {

                        displayText: "Github",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}system`,

                    buttonText: {

                        displayText: "Info",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: await botpic(),

                },

                caption: `

                

📟 *Command:-* .sticker
ℹ️ *Description:-* Photo To Sticker Made
🔥 *Help:-* .sticker Mention Any Photo or Video


📟 *Command:-* .promote
ℹ️ *Description:-* promote Admin
🔥 *Help:-* .promote Tag Any User 


📟 *Command:-* .demote
ℹ️ *Description:-* Demote Admin
🔥 *help:-* .promote tag Any User 


📟 *Command:-* .ban
ℹ️ *Description:-* Cmd Block Use 
🔥 *Help:-* .ban tag Any User


📟 *Command:-* .unban
ℹ️ *Description:-* Loked User Unblock
🔥 *Help:-* .unban Tag Any User


📟 *Command:-* .kick
ℹ️ *Description:-* Remove Participants On Group
🔥 *Help:-* .kick Tag Any User


📟 *Command:-* .add
ℹ️ *Description:-* Add Participants On Group
🔥 *Help:-* .add Mobile number


📟 *Command:-* .poll
ℹ️ *Description:-* Create poll For Group
🔥 *Help:-* .poll question option1 option2 option3


📟 *Command:-* .profile
ℹ️ *Description:-* Profile Imfomation Get
🔥 *Help:-* .profile Tag Any user


📟 *Command:-* .group
ℹ️ *Description:-* Group Mute or Unmute
🔥 *Help:-* .group


📟 *Command:-* .gdp
ℹ️ *Description:-* Group Profile Photo Change
🔥 *Help:-* .gdp Tag Any photo


📟 *Command:-* .del
ℹ️ *Description:-* Delete message
🔥 *Help:-* .del tag message


📟 *Command:-* .antilink
ℹ️ *Description:-* Link Remover
🔥 *Help:-* .antilink Active or Deactive


📟 *Command:-* .tag
ℹ️ *Description:-* Tag All Group Users
🔥 *Help:-* .tag


📟 *Command:-* .getjids
ℹ️ *Description:-* Get Jid
🔥 *Help:-* .getjids


📟 *Command:-* .rank
ℹ️ *Description:-* Check Rank
🔥 *Help:-* .rank Tag Any User


📟 *Command:-* .setwelcome
ℹ️ *Description:-* Welcome message Change
🔥 *Help:-* .setwelcome Your welcome Message


📟 *Command:-* .setgoodbye
ℹ️ *Description:-* goodbye message change 
🔥 *Help:-* .setgoodbye Your Goodbye Message


📟 *Command:-* .gs
ℹ️ *Description:-* Group settings change
🔥 *Help:-* .gs


📟 *Command:-* .settings
ℹ️ *Description:-* change group settings
🔥 *Help:-* .settings


⦿. *REQUEST BY:* ${citel.pushName}

`,

                footer: tlang().footer,

                buttons: buttons,

                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

    

    

    //---------------------------------------------------------------------------

cmd({

            pattern: "mjakageksjsgwusksgaisjsgajhshshshshehbenu",

            desc: "(menu cmdlist).",

            category: "downloader",

            react: "🔖",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {


            let buttonMessage = {

                image: {

                    url: await botpic(),

                },

                caption: `

┌────────────────────────────
│  👨‍💻 *PRABATH-MD* 👨‍💻  *COMMANDS* 🎗️
└────────────────────────────


┌─(📥 ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ)
│.song
│.video
│.apk
│.docsong 
│.docvideo
│.fb
│.tiktok
│.img
│.mp4down
│.fbs
└─────────◉
┌─(🔍 ꜱᴇᴀʀᴄʜ ᴄᴏᴍᴍᴀɴᴅꜱ)
│.findvideo
│.findsong
│.yts
│.weather
│.movie
└─────────◉
┌─(🧰 ᴄᴏɴᴠᴇʀᴛ ᴄᴏᴍᴍᴀɴᴅꜱ)
│.sticker
│.attp
│.ttp
│.logo
│.ss
│.trt
└─────────◉
┌─(👥 ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅꜱ)
│.kick
│.promote
│.demote
│.htg
│.setwelcome
│.setgoodbye
│.gs
│.ban
│.unban
│.ping
│.del
│.gdp
└─────────◉
┌─(🧑‍💻 ᴀᴅᴍɪɴ ᴄᴏᴍᴍᴀɴᴅꜱ)
│.ujid
│.block
│.unblock
│.restart
│.join
│.save
│.dnote
│.dallnote
└─────────◉
┌─( 🎮 ɢᴀᴍᴇ ᴄᴏᴍᴍᴀɴᴅꜱ)
│.xo
│.dadu
└─────────◉
┌─(💬 ᴏᴛʜᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ)
│.alive
│.rank
│.profile
│.system
│.eval
│.qr
│.sn
└─────────◉

ᴘʀᴀʙᴀᴛʜ-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ ᴘʀᴀʙᴀᴛʜ
ʀᴇʟᴇᴀsᴇᴅ ⦁ 𝟸𝟶𝟸𝟹/𝟶𝟷/𝟶𝟸
`,

                footer: tlang().footer,


                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

//---------------------------------------------------------------------------

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
❌ *DEACTIVE ANTILINK -* .deact antilink


✅ *ACTIVE BOT THIS GROUP -* .bot on
❌ *DEACTIVE BOT THIS GROUP -* .bot off


✅ *ACTIVE ADD AND LEFT MSJ -* .act events
❌ *DEACTIVE ADD AND LEFT MSJ -* .deact events

ᴘʀᴀʙᴀᴛʜ-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ ᴘʀᴀʙᴀᴛʜ
ʀᴇʟᴇᴀsᴇᴅ ⦁ 𝟸𝟶𝟸𝟹/𝟶𝟷/𝟶𝟸
`,


                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

//---------------------------------------------------------------------------

cmd({

            pattern: "ownercmdnew",

            desc: "(menu cmdlist).",

            category: "downloader",

            react: "👨‍💻",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text,{isCreator}) => {

         

            let buttons = [{

                    buttonId: `${prefix}owner`,

                    buttonText: {

                        displayText: "Owner",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}git`,

                    buttonText: {

                        displayText: "Deploy Site",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: await botpic(),

                },

                caption: `

📟 *Command:-* .install
ℹ️ *Description:-* Install Plugins
🔥 *Help:-* .install Plugin Url 


📟 *Command:-* .plugins
ℹ️ *Description:-* Install Plugins View 
🔥 *Help:-* .plugins 


📟 *Command:-* .block
ℹ️ *Description:-* Block User 
🔥 *Help:-* .block Tag user or PM Chat


📟 *Command:-* .unblock
ℹ️ *Description:-* Unblock User
🔥 *Help:-* .unblock Tag user or PM Chat


📟 *Command:-* .remove
ℹ️ *Description:-* Remove Plugins 
🔥 *Help:-* .remove plugin url


📟 *Command:-* .join
ℹ️ *Description:-* Join Group Using Whatsapp group url 
🔥 *Help:-* .join whatsapp group url


*📟Command:-* .restart
ℹ️ *Description:-* Restart Bot 
🔥 *Help:-* .restart


📟 *Command:-* .save
ℹ️ *Description:-* Save notes from mongodb 
🔥 *Help:-* .save prabath-md


📟 *Command:-* .get
ℹ️ *Description:-* Get saved notes
🔥 *Help:-* .get


📟 *Command:-* .dnote
ℹ️ *Description:-* Delete saved notes
🔥 *Help:-* .dnote ENTER NOTE ID


📟 *Command:-* .dallnote
ℹ️ *Description:-* Delete all saved notes
🔥 *Help:-* .dallnote


⦿. *REQUEST BY:* ${citel.pushName}

`,

                footer: tlang().footer,

                buttons: buttons,

                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

//---------------------------------------------------------------------------

cmd({

            pattern: "othercmdnew",

            desc: "(menu cmdlist).",

            category: "downloader",

            react: "🎊",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}Owner`,

                    buttonText: {

                        displayText: "Owner",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}install https://gist.github.com/prabathLK/01f3859256a7130f234ac54aeebf486e/raw`,

                    buttonText: {

                        displayText: "Install Voice Reply",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: await botpic(),

                },

                caption: `

📟 *Command:-* .system
ℹ️ *Description:-* system status
🔥 *Help:-* .system


📟 *Command:-* .weather
ℹ️ *Description:-* weather test 
🔥 *Help:-* .weather Your location


📟 *Command:-* .eval
ℹ️ *Description:-* run codes
🔥 *Help:-* .eval 


📟 *Command:-* .chat
ℹ️ *Description:-* Chat Bot
🔥 *Help:-* . .chat  Bot


📟 *Command:-* .trt
ℹ️ *Description:-* Google translate  
🔥 *Help:-* .trt active


⦿. *REQUEST BY:* ${citel.pushName}

`,

                footer: tlang().footer,

                buttons: buttons,

                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

//---------------------------------------------------------------------------

cmd({

            pattern: "concmdnew",

            desc: "(menu cmdlist).",

            category: "downloader",

            react: "🔄",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}Git`,

                    buttonText: {

                        displayText: "Github",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}rank`,

                    buttonText: {

                        displayText: "Rank",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: await botpic(),

                },

                caption: `

📟 *Command:-* .trt
ℹ️ *Description:-* Any language trt to sinhala
🔥 *Help:-* .trt mantion text


📟 *Command:-* .sticker
ℹ️ *Description:-* Photo or video to sticker 
🔥 *Help:-* .sticker mantion image

⦿. *REQUEST BY:* ${citel.pushName}

`,

                footer: tlang().footer,

                buttons: buttons,

                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )



//---------------------------------------------------------------------------

cmd({

            pattern: "getadmin",

            desc: "(menu cmdlist).",

            category: "downloader",

            react: "😾",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}promote 94762280384`,

                    buttonText: {

                        displayText: "Get Admin",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: await botpic(),

                },

                caption: `



මොනවද පගෝ බලන්නෙ 😹💔

`,

                footer: tlang().footer,

                buttons: buttons,

                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {


            });

        }

    )

