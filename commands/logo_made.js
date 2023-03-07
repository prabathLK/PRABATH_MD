/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

const { tlang,cmd } = require('../lib')
const Config = require('../config')
const prefix = Config.prefix
const maker = require('mumaker')

    //---------------------------------------------------------------------------
cmd({ pattern: "check", alias: ["testbot"], category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
        if (!text) return citel.react("✅")
        let anu = await maker.textpro('https://fdown.net/download.php', Url)
        Void.sendMessage(citel.chat, { video: { url: anu }, caption: `⦿.*𝗠𝗔𝗗𝗘 𝗕𝗬 :-* ${tlang().title} 👨‍💻 ${tlang().greet}` }, { quoted: citel })
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "mediateam", alias: ["logo2test"], category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
        if (!text) return citel.reply('*Good morning*🙋‍♂️')
        let anu = await maker.textpro('', text)
        Void.sendMessage(citel.chat, { image: { url: anu }, caption: `⦿.*𝗠𝗔𝗗𝗘 𝗕𝗬 :-* ${tlang().title} 👨‍💻 ${tlang().greet}` }, { quoted: citel })
    })
