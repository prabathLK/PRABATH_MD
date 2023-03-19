const { cmd,tlang,prefix,runtime,Config } = require('../lib/');

cmd({

            pattern: "logo",

            alias: ["ලෝගෝ","ලොගො","ලොගෝ","ලෝගො"],

            desc: "some settings change.",

            category: "extra",

            filename: __filename

        },

        async(Void, citel, text) => {

           let list = [{

title: 'Logo 01',

rowId: `${prefix}logo1 ${text}`,

description: ' '

},

{

title: 'Logo 02',

rowId: `${prefix}logo2 ${text}`,

description: ' '

},{

title: 'Logo 03',

rowId: `${prefix}logo3 ${text}`,

description: ' '

},

{

title: 'Logo 04',

rowId: `${prefix}logo4 ${text}`,

description: ' '

},

{

title: 'Logo 05',

rowId: `${prefix}logo5 ${text}`,

description: ' '

},

{

title: 'Logo 06',

rowId: `${prefix}logo6 ${text}`,

description: ' '

},

{

title: 'Logo 07',

rowId: `${prefix}logo7 ${text}`,

description: ' '

},

{

title: 'Logo 08',

rowId: `${prefix}logo8 ${text}`,

description: ' '

},

{

title: 'Logo 09',

rowId: `${prefix}logo9 ${text}`,

description: ' '

},

{

title: 'Logo 10',

rowId: `${prefix}logo10 ${text}`,

description: ' '

},

{

title: 'Logo 11',

rowId: `${prefix}logo11 ${text}`,

description: ' '

},

{

title: 'Logo 12',

rowId: `${prefix}logo12 ${text}`,

description: ' '

},

{

title: 'Logo 13',

rowId: `${prefix}logo13 ${text}`,

description: ' '

},

{

title: 'Logo 14',

rowId: `${prefix}logo14 ${text}`,

description: ' '

},

{

title: 'Logo 15',

rowId: `${prefix}logo15 ${text}`,

description: ' '

},

{

title: 'Logo 16',

rowId: `${prefix}logo16 ${text}`,

description: ' '

},

{

title: 'Logo 17',

rowId: `${prefix}logo17 ${text}`,

description: ' '

},

{

title: 'Logo 18',

rowId: `${prefix}logo18 ${text}`,

description: ' '

},

{

title: 'Logo 19',

rowId: `${prefix}logo19 ${text}`,

description: ' '

},

{

title: 'Logo 20',

rowId: `${prefix}logo20 ${text}`,

description: ' '

},

{

title: 'Logo 21',

rowId: `${prefix}logo21 ${text}`,

description: ' '

},

{

title: 'Logo 22',

rowId: `${prefix}logo22 ${text}`,

description: ' '

},

{

title: 'Logo 23',

rowId: `${prefix}logo23 ${text}`,

description: ' '

},

{

title: 'Logo 24',

rowId: `${prefix}logo24 ${text}`,

description: ' '

},

{

title: 'Logo 25',

rowId: `${prefix}logo25 ${text}`,

description: ' '

},

{

title: 'Logo 26',

rowId: `${prefix}logo26 ${text}`,

description: ' '

},

{

title: 'Logo 27',

rowId: `${prefix}logo27 ${text}`,

description: ' '

},

{

title: 'Logo 28',

rowId: `${prefix}logo28 ${text}`,

description: ' '

},

{

title: 'Logo 29',

rowId: `${prefix}logo29 ${text}`,

description: ' '

},

{

title: 'Logo 30',

rowId: `${prefix}logo30 ${text}`,

description: ' '

}

            ]

            ted = `┏━━━━━━━━━━━━━━━━━━━━━━━━━
┃  🔖 *LOGO MENU* 🔖
┗━━━━━━━━━━━━━━━━━━━━━━━━━

*Hello .*

*I Am ${Config.ownername}*

⦁ *CREATED DATE :* 2023/01/2.
⦁ *CREATED TIME :* 8:30 PM.
⦁ *TOTAL LOGO:-*  *30*
⦁ *BOT RUNNING TIME:* ${runtime(process.uptime())}

👨‍💻 *𝗟𝗢𝗚𝗢 𝗟𝗜𝗦𝗧* 👨‍💻`

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

                buttonText: "Select logo ",

                mentions: await Void.parseMention(ted),

                sections

            }

            return Void.sendMessage(citel.chat, listMessage, {

                quoted: citel

            })

        }

    )
