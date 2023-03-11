const { cmd, sck1, tlang, botpic, runtime, prefix, Config } = require('../lib')

cmd({

            pattern: "qrscan",

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

                image: { url: 'https://prabath-md-qr.onrender.com' },

                caption: `*_Scan Qr within 15 seconds_*\nYou'll get session id in your log number.`,

                footer: ` Session`,

                headerType: 4,

                contextInfo: {

                    externalAdReply: {

                        title: 'PRABATH-MD SESSION',

                        body: 'Get you Session ID',

                        thumbnail: await botpic (),

                        mediaType: 2,

                        mediaUrl: ``,

                        sourceUrl: ``,

                    },

                },

            };

            await Void.sendMessage(citel.chat, buttonMessaged, {

                quoted: citel,

            });

            await sleep(20 * 1000)

            return citel.reply('Your session is over now.')

        }

    )
