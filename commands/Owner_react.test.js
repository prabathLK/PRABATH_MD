const { prefix,cmd,tlang } = require('../lib')
cmd({ on: "body" }, async(Void, citel) => {
     if (!isCreator) return citel.reply(tlang().owner && citel.text); {
         const emojis = ['👨‍💻']
         const emokis = emojis[Math.floor(Math.random() * (emojis.length))]
         Void.sendMessage(citel.chat, {
             react: {
                 text: emokis,
                 key: citel.key
             }
         })
     }
 })
