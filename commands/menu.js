const os = require('os');
const { cmd,tlang,prefix,runtime,formatp,Config } = require('../lib/');
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
rowId: `${prefix}downcmdnew`,
description: ' '
},
{
title: 'GROUP COMMAND LIST',
rowId: `${prefix}groupcmdnew`,
description: ' '
},
{
title: 'GENERAL COMMAND LIST',
rowId: `${prefix}gcmdnew`,
description: ' '
},
{
title: 'GAME COMMAND LIST',
rowId: `${prefix}gamecmdnew`,
description: ' '
},
{
title: 'OWNER COMMAND LIST',
rowId: `${prefix}ownercmdnew`,
description: ' '
},
{
title: 'CONVERTER COMMAND LIST',
rowId: `${prefix}concmdnew`,
description: ' '
},
{
title: 'OTHER COMMAND LIST',
rowId: `${prefix}othercmdnew`,
description: ' '
}
            ]
            ted = `👨‍💻 *${Config.ownername}* 👨‍💻
            
*Hello .* ${citel.pushName}
*I Am ${Config.ownername}*

⦁ *CREATED DATE :* 2023/01/2.
⦁ *CREATED TIME :* 8:30 PM.
⦁ *RUNNING TIME :* ${runtime(process.uptime())}
⦁ *RAM USAGE    :* ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
`
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
