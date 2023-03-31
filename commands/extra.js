const { fetchJson, cmd, citel, Config, tlang } = require('../lib')

cmd({

            pattern: "ss",

            desc: "web ss", 

            react: "📸",

            category: "downloader"

            

            

        },

        async(Void, citel, text) => {

            if (!text) return

const webss = await fetchJson(`https://api.botcahx.biz.id/api/tools/ssweb?link=${text}&apikey=${Config.botapikey}`)

            citel.reply (`*Screenshot is taking, please wait...*`)

       Void.sendMessage(citel.chat, {

                image: {

                    url: `https://api.botcahx.biz.id/api/tools/ssweb?link=${text}&apikey=${Config.botapikey}` ,

                },

                caption: `● ᴘᴏᴡᴇʀᴅ ʙʏ ᴘʀᴀʙᴀᴛʜ-ᴍᴅ`,

            }, {

                quoted: citel,

            });

 }

)

cmd({

            pattern: "fb",

            desc: "fb down",

            react: "📥",

            category: "downloader"

        },

        async(Void, citel, text) => {

            if (!text) return

const fbdl = await fetchJson(`https://api.botcahx.biz.id/api/dowloader/fbdown?url=${text}&apikey=58341c8a`)

const videolink = fbdl.result.HD

            citel.reply (`*Hello ${citel.pushName} I Am Finding Your Facebook Video*`);

       Void.sendMessage(citel.chat, {

                video: {

                    url: videolink ,

                },

                caption: `● ᴘᴏᴡᴇʀᴅ ʙʏ ᴘʀᴀʙᴀᴛʜ-ᴍᴅ`,

                footer: `tlang().footer`,

            }, {

                quoted: citel,

            });

 }

)

cmd({

            pattern: "tt",

            alias: ["tiktok"],

            desc: "tiktok downloader",

            react:"🚀",

            category: "downloader"

        },

        async(Void, citel, text) => {

            if (!text) return

const ttdl = await fetchJson(`https://sl-bot-devolopers-team.herokuapp.com/api/tiktokdl?url=https://developers.tiklydown.me/api/download?url=${text}`)

    

const videolink = ttdl.data.dl_url

            citel.reply (`*Hello ${citel.pushName} I Am Finding Your Tiktok Video*`);

       Void.sendMessage(citel.chat, {

                video: {

                    url: videolink ,

                },

                

                caption: `● ᴘᴏᴡᴇʀᴅ ʙʏ ᴘʀᴀʙᴀᴛʜ-ᴍᴅ`,

            }, {

                quoted: citel,

            });

 }

)


cmd({

            pattern: "fbs",

            desc: "fb down",

            react: "🎶",

            category: "downloader"

        },

        async(Void, citel, text) => {

            if (!text) return

const fbdls = await fetchJson(`https://api.botcahx.biz.id/api/dowloader/fbdown?url=${text}&apikey=58341c8a`)

const videolink = fbdls.result.audio

            citel.reply (`*Hello ${citel.pushName} I Am Finding Your Facebook Audio*`);

       return Void.sendMessage(citel.chat, {

                audio: {

                    url: videolink ,

                },

                mimetype: "audio/mpeg",

                fileName: `prabath-md-fb-song-downloader`,

            }, {

                quoted: citel,

            });

        }

    )


cmd({

            pattern: "apk",

            desc: "apk down",

            react: "📦",

            category: "downloader"

        },

        async(Void, citel, text) => {

            if (!text) return

const apkdl = await fetchJson(`https://sl-bot-devolopers-team.herokuapp.com/api/apkdownload?appid=${text}`)
            citel.reply (`*Hello ${citel.pushName} I Am Finding Your Apk*`);
const applink = apkdl.data.dllink
const getname = apkdl.data.name
const lastupdate = apkdl.data.lastup

       return Void.sendMessage(citel.chat, {

                document: {

                    url: applink ,

                },

                mimetype: "application/vnd.android.package-archive",
                caption: `● *ᴘᴏᴡᴇʀᴅ ʙʏ ᴘʀᴀʙᴀᴛʜ-ᴍᴅ*` ,

                fileName: getname ,

            }, {

                quoted: citel,

            });

        }

    )
