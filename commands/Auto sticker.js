const { tlang, prefix, Config, sck,cmd } = require('../lib')
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter")

cmd({
             pattern: "Mk",
             desc: "Makes glowing sticker of text.",
             category: "sticker",
             filename: __filename,
         },
         async(Void, citel, text) => {
             Void.sendMessage(citel.chat, {
                 sticker: {
                     url: `https://github.com/prabathLK/Sticker-sender-for-PRABATH-MD/blob/main/STK-20230220-WA0018.webp?raw=true`
                 }
             }, {
                 quoted: citel
             })
 
         }
     )
