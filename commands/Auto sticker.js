cmd({
             pattern: "Mk",
             desc: "Makes glowing sticker of text.",
             category: "sticker",
             filename: __filename,
         },
         async(Void, citel, text) => {
             Void.sendMessage(citel.chat, {
                 sticker: {
                     url: `https://api.xteam.xyz/attp?file&text=${encodeURI(text)}`
                 }
             }, {
                 quoted: citel
             })
 
         }
     )
