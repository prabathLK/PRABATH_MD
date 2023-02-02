const { fbdl,cmd } = require('../lib')
cmd({
        pattern: "item1",
        desc: "download instagram post.",
        category: "other",
        filename: __filename
    },
    async(Void, citel,text,{isCreator}) => {
if(!text) return citel.reply('*Item name:* Test1\n *Details*: Brand new and easy use\n *Price:* 3500')
let response = await fbdl(text)
for (let i=0;i<response.length;i++) {
await Void.sendFileUrl(citel.chat, response[f], `*Downloaded Media from instagram.*`, citel)
}
    });

cmd({
        pattern: "downloadcmd",
        desc: "download instagram post.",
        category: "Auto Reply",
        filename: __filename
    },
    async(Void, citel,text,{isCreator}) => {
if(!text) return citel.reply('👨‍💻*𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗟𝗜𝗦𝗧* 👨‍💻\n\n\n\n📟 *Command:-* .song\n ℹ️ *Description:-* Song Download From Youtube\n 🔥 *Help:-* .song ලෙලෙනා')
let response = await fbdl(text)
for (let i=0;i<response.length;i++) {
await Void.sendFileUrl(citel.chat, response[f], `*Downloaded Media from instagram.*`, citel)
}
    });
