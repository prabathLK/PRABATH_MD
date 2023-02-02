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
if(!text) return citel.reply('┏━━━━━━━━━━━━━━━━━━━━━━━━━━━
┃  👨‍💻 *𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗟𝗜𝗦𝗧* 👨‍💻
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━




📟 *Command:-* .song
ℹ️ *Description:-* Song Download From Youtube
🔥 *Help:-* .song ලෙලෙනා


📟 *Command:-* .video
ℹ️ *Description:-* Video Download From Youtube
🔥 *Help:-* .video නේනා


📟 *Command:-* .tgs
ℹ️ *Description:-* Download Telegram Stickers
🔥 *help:-* .tga Enter Telegram Sticker Url 


📟 *Command:-* .ytmp4
ℹ️ *Description:-* Download Video Youtube Link
🔥 *Help:-* .ytmp4 Enter Youtube Video Url


📟 *Command:-* .ytmp3
ℹ️ *Description:-* Download Songs Youtube Link
🔥 *Help:-* .ytmp3 Enter Youtube Video Url


📟 *Command:-* .ytdoc
ℹ️ *Description:-* Song Download Form Youtube (Document)
🔥 *Help:-* ytdoc Enter Youtube Video Url


📟 *Command:-* .mediafire
ℹ️ *Description:-* Download Content From Mediafire Link
🔥 *Help:-* .mediafire Enter Mediafire Url


📟 *Command:-* .yts
ℹ️ *Description:-* Search Youtube Videos
🔥 *Help:-* .yts ලෙලෙනා')
let response = await fbdl(text)
for (let i=0;i<response.length;i++) {
await Void.sendFileUrl(citel.chat, response[f], `*Downloaded Media from instagram.*`, citel)
}
    });
