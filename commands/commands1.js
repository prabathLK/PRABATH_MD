
cmd({ on: "body" }, async(Void, citel) => {
     if (Config.owner === '94762280384' && citel.text.) {
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
