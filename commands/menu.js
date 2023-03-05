const os = require('os');
const { cmd,tlang,prefix,runtime,formatp} = require('../lib/');
cmd({
            pattern: "menu",
            alias: ["list","මෙනු","මෙනූ","cmd"],
            desc: "some settings change.",
            category: "extra",
            filename: __filename
        },
        async(Void, citel, text) => {
           let list = [{
title: 'DOWNLOAD COMMAND LIST',
rowId: `${prefix}downloadcmd`,
description: ' '
},
{
title: 'GROUP COMMAND LIST',
rowId: `${prefix}groupcmd`,
description: ' '
},
{
title: 'GENERAL COMMAND LIST',
rowId: `${prefix}genaralcmd`,
description: ' '
},
{
title: 'GAME COMMAND LIST',
rowId: `${prefix}gamecmd`,
description: ' '
},
{
title: 'OWNER COMMAND LIST',
rowId: `${prefix}ownercmd`,
description: ' '
},
{
title: 'CONVERTER COMMAND LIST',
rowId: `${prefix}concmd`,
description: ' '
},
{
title: 'OTHER COMMAND LIST',
rowId: `${prefix}othercmd`,
description: ' '
}
            ]
            ted = `┏━━━━━━━━━━━━━━━━━━━━━━━━━
┃   *PRABATH-MD-WHATSAPP-BOT*
┗━━━━━━━━━━━━━━━━━━━━━━━━━
*Hello .* ${citel.pushName}
*I Am 𝗣𝗥𝗔𝗕𝗔𝗧𝗛-𝗠𝗗*

⦁ *CREATED DATE :* 2023/01/2.
⦁ *CREATED TIME :* 8:30 PM.
⦁ *RUNNING TIME :* ${runtime(process.uptime())}
⦁ *RAM USAGE    :* ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}




👨‍💻 *𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗟𝗜𝗦𝗧* 👨‍💻`
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
                buttonText: "Select ",
                mentions: await Void.parseMention(ted),
                sections
            }
            return Void.sendMessage(citel.chat, listMessage, {
                quoted: citel
            })
        }
    )
