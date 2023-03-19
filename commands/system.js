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
const { addnote,cmd, sck1, delnote, allnotes, delallnote, tlang, botpic, runtime,formatp, prefix, Config,  } = require('../lib')

    //---------------------------------------------------------------------------

cmd({

            pattern: "addnote",

            category: "owner",

            desc: "Adds a note on db.",

            filename: __filename

        },

        async(Void, citel, text,{ isCreator }) => {

            if (!isCreator) return citel.reply(tlang().owner)

            if (!text) return citel.reply("🔍 Please provide me a valid gist url.")

            await addnote(text)

            return citel.reply(`New note ${text} added in mongodb.`)

        }

    )

 

    //---------------------------------------------------------------------------

cmd({

            pattern: "qr",

            category: "owner",

            filename: __filename,

            desc: "Sends CitelsVoid Qr code to scan and get your session id."

        },

        async(Void, citel, text) => {

            if (text) {

                let h = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${text}`)

                await Void.sendMessage(citel.chat, { image: h })

                return

            }


            let buttonMessaged = {

                image: { url: 'https://qr-scanner-for-prabath-md-production.up.railway.app' },

                caption: `*Scan Qr within 15 seconds*\n\n*PRABATH-MD QR CODE* 👨‍💻\n\n\n*MADE BY PRABATHPRABATH* ✅`,

                footer: ` PRABATH-MD SESSION-ID`,

                headerType: 4,


            }

            await Void.sendMessage(citel.chat, buttonMessaged, {

                quoted: citel,

            });

            await sleep(20 * 1000)

            return citel.reply('Your session is over now.')

        }

    )

    //---------------------------------------------------------------------------

cmd({

            pattern: "unban",

            alias: ["අන්බෑන්"],

            category: "misc",

            react: "✅",

            filename: __filename,

            desc: "Unbans banned user (from using bot)."

        },

        async(Void, citel, text,{ isCreator }) => {

            if (!isCreator) return citel.reply("This command is onlt for my Owner")

            try {

                let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;

                if (!users) return citel.reply("Please mention any user.❌")

                let pushnamer = Void.getName(users);

                sck1.findOne({ id: users }).then(async(usr) => {

                    if (!usr) {

                        console.log(usr.ban)

                        return citel.reply(`${pushnamer} is unbanned.`)

                    } else {

                        console.log(usr.ban)

                        if (usr.ban !== "true") return citel.reply(`${usr.name} is already unbanned.`)

                        await sck1.updateOne({ id: users }, { ban: "false" })

                        return citel.reply(`${usr.name} Successful Unbanned ✅`)

                    }

                })

            } catch {

                return citel.reply("Please mention any user.❌")

            }

        }

    )

    //---------------------------------------------------------------------------

cmd({

            pattern: "url",

            alias: ["ලින්ක්"],

            category: "misc",

            react: "🌍",

            filename: __filename,

            desc: "image to url."

        },

        async(Void, citel, text) => {

            if (!citel.quoted) return citel.reply(`Pls mention me any image/video and type ${prefix + command} to upload my ${tlang().greet}`);

            let mime = citel.quoted.mtype

            let media = await Void.downloadAndSaveMediaMessage(citel.quoted);

            if (/image/.test(mime)) {

                let anu = await TelegraPh(media);

                return citel.reply(`Here is url of your uploaded Media on Telegraph.\n\n` + util.format(anu));

            } else if (!/image/.test(mime)) {

                let anu = await TelegraPh(media);

                await fs.unlinkSync(media);

                return citel.reply(`Here is url of your uploaded Media on Telegraph.\n\n` + util.format(anu));

            }

            await fs.unlinkSync(media);

        }

    )

    //---------------------------------------------------------------------------

cmd({

            pattern: "trt",

            category: "misc",

            filename: __filename,

            desc: "Translate\'s given text in desird language."

        },

        async(Void, citel, text) => {

            const translatte = require("translatte");

            if (!citel.quoted) return citel.reply("*Please reply to any message.*");

            if (!citel.quoted) return citel.reply(`Please mention or give tex.`);

            let textt = citel.quoted.text;

            whole = await translatte(textt, {

                from: text[1] || "auto",

                to: text.split(" ")[0] || "si",

            });

            if ("text" in whole) {

                return await citel.reply("*Translated In to📑:* " + " ```" + (text.split(" ")[0] || "Auto to Sinhala") + "```\n" + " *From Language🔎:* " + " ```" + (text[1] || "Auto Detect") + "```\n" + "*Result🇱🇰:* " + " ```" + whole.text + "```");

            }

        }

    )

    //---------------------------------------------------------------------------

cmd({

            pattern: "shell",

            category: "owner",

            filename: __filename,

            desc: "Runs command in Heroku(server) shell."

        },

        async(Void, citel, text,{ isCreator }) => {

            if (!isCreator) return citel.reply(tlang().owner)

            const { exec } = require("child_process")

            exec(text, (err, stdout) => {

                if (err) return citel.reply(`----${tlang().title}----\n\n` + err)

                if (stdout) {

                    return citel.reply(`----${tlang().title}----\n\n` + stdout)

                }

            })

        }

    )

    //---------------------------------------------------------------------------

cmd({

            pattern: "eval",

            category: "owner",

            filename: __filename,

            desc: "Runs js code on node server."

        },

        async(Void, citel, text,{ isCreator }) => {

            if (!isCreator) return

            try {

                let resultTest = eval('const a = async()=>{\n' + text + '\n}\na()');

                if (typeof resultTest === "object")

                    citel.reply(JSON.stringify(resultTest));

                else citel.reply(resultTest.toString());

            } catch (err) {

                return  citel.reply(err.toString());

            }

        }

    )

    //---------------------------------------------------------------------------

cmd({

            pattern: "delnote",

            category: "owner",

            filename: __filename,

            desc: "Deletes note from db."

        },

        async(Void, citel, text,{ isCreator }) => {

            const { tlang } = require('../lib/scraper')

            if (!isCreator) return citel.reply(tlang().owner)

            await delnote(text.split(" ")[0])

             return citel.reply(`Id: ${text.split(" ")[0]}\'s note has been deleted from mongodb.`)

        }

    )

    //---------------------------------------------------------------------------

cmd({

            pattern: "delallnotes",

            category: "owner",

            filename: __filename,

            desc: "Deletes all notes from db."

        },

        async(Void, citel, text, isCreator) => {

            const { tlang } = require('../lib/scraper')

            if (!isCreator) return citel.reply(tlang().owner)

            await delallnote()

             return citel.reply(`All notes deleted from mongodb.`)

        }

    )

    //---------------------------------------------------------------------------

cmd({

            pattern: "ban",

            alias: ["බෑන්"],

            category: "owner",

            react: "🚫",

            filename: __filename,

            desc: "Bans user from using bot."

        },

        async(Void, citel, text,{ isCreator}) => {

            if (!isCreator) return citel.reply(tlang().owner)

            try {

                let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;

                if (!users) return citel.reply(`❌ Please mention any user ${tlang().greet}.`)

                let pushnamer = Void.getName(users);

                sck1.findOne({ id: users }).then(async(usr) => {

                    if (!usr) {

                        await new sck1({ id: users, ban: "true" }).save()

                        return citel.reply(`_Banned ${usr.name} from Using Commands._`)

                    } else {

                        if (usr.ban == "true") return citel.reply(`${pushnamer} is already Banned from Using Commands`)

                        await sck1.updateOne({ id: users }, { ban: "true" })

                        return citel.reply(`_Successfully Banned ${usr.name} from Using Commands._`)

                    }

                })

            } catch (e) {

                console.log(e)

                return citel.reply("Please mention any user.❌ ")

            }

        }

    )

    //---------------------------------------------------------------------------

cmd({

            pattern: "alive",

            alias: ["බෝට්","බොට්"],

            category: "general",

            react: "👋",

            filename: __filename,

            desc: "is bot alive??"

        },

        async(Void, citel, text, isAdmins) => {


            const alivtxt = `
*Hello* ${citel.pushName} 🙋‍♂️

*I am ${Config.ownername}*


┏━━━━━━━━━━━━━━━━━━━━━
┃
┃ ● *Uptime:-* ${runtime(process.uptime())}
┃
┃ ● *Ram usage:-* ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
┃
┃ ● *User:-* ${Config.ownername}
┃
┃ ● *Owner:-* Prabath 
┃
┃ ● *Version:-* 3.0 V 
┃
┗━━━━━━━━━━━━━━━━━━━━━━


`;           let buttons = [{

                    buttonId: `${prefix}menu`,

                    buttonText: {

                        displayText: "Commands",

                    },

                    type: 1,

                },


                  {

                    buttonId: `${prefix}owner`,

                    buttonText: {

                        displayText: "Owner",

                    },

                    type: 1,

                },

            ];
            let thumbimage = Config.THUMB_IMAGE || `https://i.ibb.co/7YGn5qS/20230305-135924.jpg`
            
            let aliveMessage = {

                image: {

                    url: `${thumbimage}`,

                },

                caption: alivtxt,
                
                buttons: buttons,

                footer: tlang().footer,

                headerType: 4,

            };

             return Void.sendMessage(citel.chat, aliveMessage, {

                quoted: citel,

            });

        }

    )

    //---------------------------------------------------------------------------

cmd({

        pattern: "allnotes",

        category: "owner",

        filename: __filename,

        desc: "Shows list of all notes."

    },

    async(Void, citel, text,{ isCreator }) => {

        const { tlang } = require('../lib')

        if (!isCreator) return citel.reply(tlang().owner)

        const note_store = new Array()

        let leadtext = `All Available Notes are:-\n\n`

        leadtext += await allnotes()

        return citel.reply(leadtext)

    }

)

   //---------------------------------------------------------------------------


cmd({

            pattern: "system",

            alias: ["සිස්ටම්"],

            category: "general",

            react: "📟",

            filename: __filename,

            desc: "system status??"

        },

        async(Void, citel, text, isAdmins) => {

            const alivtxt = `
┏━━━━━━━━━━━━━━━━━━━━━━━
┃
┃ ⏱️ *Uptime:-* ${runtime(process.uptime())}
┃
┃ 📟 *Ram usage:-* ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
┃
┃ 📱 *User:-* ${Config.ownername}
┃
┃ 👨‍💻 *Owner:-* Prabath 
┃
┃ 🧬 *Version:-* 3${prefix}0 V 
┃
┗━━━━━━━━━━━━━━━━━━━━━━━━
`;
            let thumbimage = Config.THUMB_IMAGE || `https://i.ibb.co/7YGn5qS/20230305-135924.jpg`
  
            let aliveMessage = {

                image: {

                    url: `${thumbimage}`,

                },

                caption: alivtxt,

                footer: tlang().footer,

                headerType: 4,

            };

             return Void.sendMessage(citel.chat, aliveMessage, {

                quoted: citel,

            });

        }

    )
