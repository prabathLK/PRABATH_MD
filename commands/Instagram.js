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
if(!text) return citel.reply(' 👨‍💻*𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗟𝗜𝗦𝗧* 👨‍💻\n\n\n\n\n📟 *Command:-* .song\nℹ️ *Description:-* Song Download From Youtube\n🔥 *Help:-* .song ලෙලෙනා\n\n\n📟 *Command:-* .video\nℹ️ *Description:-* Video Download From Youtube\n🔥 *Help:-* .video නේනා\n\n\n📟 *Command:-* .tgs\nℹ️ *Description:-* Download Telegram Stickers\n🔥 *help:-* .tga Enter Telegram Sticker Url \n\n\n📟 *Command:-* .ytmp4\nℹ️ *Description:-* Download Video Youtube Link\n🔥 *Help:-* .ytmp4 Enter Youtube Video Url\n\n\n📟 *Command:-* .ytmp3\nℹ️ *Description:-* Download Songs Youtube Link\n🔥 *Help:-* .ytmp3 Enter Youtube Video Url\n\n\n📟 *Command:-* .ytdoc\nℹ️ *Description:-* Song Download Form Youtube (Document)\n🔥 *Help:-* ytdoc Enter Youtube Video Url\n\n\n📟 *Command:-* .mediafire\nℹ️ *Description:-* Download Content From Mediafire Link\n🔥 *Help:-* .mediafire Enter Mediafire Url\n\n\n📟 *Command:-* .yts\nℹ️ *Description:-* Search Youtube Videos\n🔥 *Help:-* .yts ලෙලෙනා')
let response = await fbdl(text)
for (let i=0;i<response.length;i++) {
await Void.sendFileUrl(citel.chat, response[f], `*Downloaded Media from instagram.*`, citel)
}
    });
