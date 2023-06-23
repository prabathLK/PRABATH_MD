const axios = require('axios');
const fs = require('fs-extra')
const { plugins,plugindb, remove, isUrl,cmd } = require('../lib')
//---------------------------------------------------------------------------
cmd({
        pattern: "plugins",
        category: "owner",
        react: "➕",
        desc: "Shows list of all externally installed modules",
        filename: __filename
    },
    async(Void, citel, text, { isCreator }) => {
        const { tlang } = require('../lib')
        if (!isCreator) return citel.reply(tlang().owner)
        let allmodtext = `*All Installed Modules are:-*\n\n`
        allmodtext += await plugins()
        citel.reply(allmodtext)

    }
)

//---------------------------------------------------------------------------
cmd({
        pattern: "remove",
        category: "owner",
        desc: "removes external modules.",
        filename: __filename
    },
    async(Void, citel, text,{ isCreator}) => {
        if (!isCreator) return citel.reply(tlang().owner)
        if(text==='all') {
         await plugindb.collection.drop()
         return citel.reply('Deleted all plugins from Secktor.')
        }
        let kill = await remove(text.split(" ")[0])
        delete require.cache[require.resolve(__dirname+"/" + text + ".js")];
        fs.unlinkSync(__dirname + "/" + text+ ".js");
        return citel.reply(kill)
    }
)
