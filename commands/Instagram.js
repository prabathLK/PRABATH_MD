const { fbdl,cmd } = require('../lib')
cmd({
        pattern: "fb",
        react: "ℹ️",
        desc: "download facebook post.",
        category: "downloader",
        filename: __filename
    },
    async(Void, citel,text,{isCreator}) => {
if(!text) return citel.reply('Need facebook url.')
let response = await fbdl(text)
for (let i=0;i<response.length;i++) {
await Void.sendFileUrl(citel.chat, response[i], `*Downloaded Media from instagram.*`, citel)
}
    });
