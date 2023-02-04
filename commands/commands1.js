const { fbdl,cmd } = require('../lib')
cmd({
        pattern: "test",
        desc: "download instagram post.",
        category: "other",
        filename: __filename
    },
    async(Void, citel,image,{isCreator}) => {
if(!image) return citel.reply('https://telegra.ph/file/a78da5c15204ed08c7e84.jpg')
let response = await fbdl(text)
for (let i=0;i<response.length;i++) {
await Void.sendFileUrl(citel.chat, response[f], `*Downloaded Media from instagram.*`, citel)
}
    });
