

//---------------------------------------------------------------------------

const Pmd = require('../lib')

Pmd.cmd({

        pattern: "ping",

        desc: "To check ping",

        category: "general",

        filename: __filename,

    },

    async(Void, citel) => {

        var inital = new Date().getTime();

        const { key } = await Void.sendMessage(citel.chat, {text: '```Testing Ping...```'});

        var final = new Date().getTime();

        await Pmd.sleep(1000)

       const pg = await Void.sendMessage(citel.chat, {text: '📍 *Ping:' + (final - inital) + ' ms* ', edit: key});
      return await Void.sendMessage(citel.chat, { react: { text: '✔️', key: pg.key } });
    }

);
