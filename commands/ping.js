const prabath = require('../lib')

prabath.cmd({

        pattern: "ping",

        desc: "To check ping",

        category: "general",

        filename: __filename,

    },

    async(Void, citel) => {

        var inital = new Date().getTime();

   const delping = await Void.sendMessage(citel.chat, { text: '```Testing Ping...```' });

       

                               

        var final = new Date().getTime();

       

     const dl = await citel.reply('📍 *Ping* : *' + (final - inital) + ' ms* ');

       await Void.sendMessage(citel.chat, { react: { text: '✔️', key: dl.key } });

       return await Void.sendMessage(citel.chat, { delete: delping.key });

    }

);
