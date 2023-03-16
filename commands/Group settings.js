const os = require('os');

const { cmd,tlang,prefix,runtime,formatp} = require('../lib/');

cmd({

            pattern: "groupsettings",

            alias: ["gs"],

            desc: "some group settings change.",

            category: "extra",

            filename: __filename

        },

        async(Void, citel, text) => {

           let list = [{

title: 'MUTE GROUP 🔇',

rowId: `${prefix}group close`,

description: ' '

},

{

title: 'UNMUTE GROUP 🔊',

rowId: `${prefix}group open`,

description: ' '

},

{

title: 'ACTIVE ANTILINK ✅',

rowId: `${prefix}act antilink`,

description: ' '

},

{

title: 'DEACTIVE ANTILINK ❌',

rowId: `${prefix}deact antilink`,

description: ' '

},

{

title: 'ACTIVE BOT THIS GROUP ✅',

rowId: `${prefix}bot on`,

description: ''

},

{

title: 'DEACTIVE BOT THIS GROUP ❌',

rowId: `${prefix}bot off`,

description: ''

},

{

title: 'ACTIVE ADD MESSAGE AND LEFT MESSAGE ✅',

rowId: `${prefix}act events`,

description: ''

},

{

title: 'DEACTIVE ADD MESSAGE AND LEFT MESSAGE ❌',

rowId: `${prefix}deact events`,

description: ''

}

            ]

            ted = `┏━━━━━━━━━━━━━━━━━━━━━━━━━
┃   *GROUP SETTINGS CHANGE*
┗━━━━━━━━━━━━━━━━━━━━━━━━━


*THINGS THAT CAN BE CHANGED FROM THIS,*

● MUTE GROUP
● UNMUTE GROUP

● ACTIVE ANTILINK
● DEACTIVE ANTILINK

● ACTIVE BOT THIS GROUP
● DEACTIVE BOT THIS GROUP

● ACTIVE ADD MESSAGE AND LEFT MESSAGE
● DEACTIVE ADD MESSAGE AND LEFT MESSAGE 


⦿. *REQUEST BY:* ${citel.pushName}

`

            const sections = [

                {

                    title: "Change settings",

                    rows: list

                }

            ]

            const listMessage = {

                text: ted,

                footer: tlang().footer,

                title: ``,

                buttonText: "Change Settings ",

                mentions: await Void.parseMention(ted),

                sections

            }

            return Void.sendMessage(citel.chat, listMessage, {

                quoted: citel

            })

        }

    )
