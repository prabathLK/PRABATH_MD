const { Insta,cmd } = require('../lib')
cmd({
        pattern: "insta",
        react: "🇱🇰",
        desc: "download instagram post.",
        category: "downloader",
        filename: __filename
    },
    async(Void, citel,text,{isCreator}) => {
if(!text) return citel.reply('Need post url.')
let response = await Insta(text)
for (let i=0;i<response.length;i++) {
await Void.sendFileUrl(citel.chat, response[i], `*Downloaded Media from instagram.*`, citel)
}
    });
cmd({
    pattern: "fb",
    react: "🌝",
    desc: "Facebook video downloader",
    category: "downloader",
    filename: __filename
 }, 
 async (!msg, query) => {
     var q = !msg.reply_message.message ? query[1] : msg.reply_message.message
     let _q = !msg.reply_message.message ? query[1] : msg.reply_message.message
     if (/\bhttps?:\/\/\S+/gi.test(q)) q = q.match(/\bhttps?:\/\/\S+/gi)[0]
     if (!q) return await msg.sendReply("*Need Facebook link*")
     if (!_q.includes("!")){
const buttons = [
  {buttonId: hnd+'fb '+q+' !hd', buttonText: {displayText: 'HD'}, type: 1},
  {buttonId: hnd+'fb '+q+' !sd', buttonText: {displayText: 'SD'}, type: 1}
 ]
const buttonMessage = {
    text: "*Select video quality*",
    footer: '',
    buttons: buttons,
    headerType: 1
}
 await msg.client.sendMessage(msg.jid, buttonMessage,{quoted:msg.data})
     }
    if (_q.includes("!")){
     var res = await fb(q);
     return await msg.sendReply({url: res[_q.split("!")[1]]},"video")
     }
        }));
