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
const os = require('os');
const { tlang, botpic,cmd, prefix, runtime,Config,formatp } = require('../lib')
const axios = require('axios')
const speed = require('performance-now')
//---------------------------------------------------------------------------
cmd({
        pattern: "chat",
        desc: "chat with an AI",
        category: "general",
        use: '<Hii,Secktor>',
        filename: __filename,
    },
    async(Void, citel,text) => {
        let zx = text.length;
        if (zx < 30) {
            let {data} = await axios.get(`http://api.brainshop.ai/get?bid=167991&key=aozpOoNOy3dfLgmB&uid=[${citel.sender.split("@")[0]}]&msg=[${text}]`);
            return citel.reply(data.cnt);  
        }
        if (!text) return citel.reply(`Hey there! ${citel.pushName}. How are you doing these days?`);
        const { Configuration, OpenAIApi } = require("openai");
        const configuration = new Configuration({
            apiKey: Config.OPENAI_API_KEY || "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",
        });
        const openai = new OpenAIApi(configuration);
        const completion = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: text,
            temperature: 0.5,
            max_tokens: 80,
            top_p: 1.0,
            frequency_penalty: 0.5,
            presence_penalty: 0.0,
            stop: ['"""'],
        });
        citel.reply(completion.data.choices[0].text);
    }
)
//---------------------------------------------------------------------------
cmd({
        pattern: "script",
        alias: ["git", "github", "repo"],
        desc: "Sends info about repo.",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        let { data } = await axios.get('https://api.github.com/repos/SamPandey001/Secktor-Md')
        let cap = `*🌐 𝗣𝗥𝗔𝗕𝗔𝗧𝗛-𝗠𝗗 _𝗢𝗙𝗙𝗜𝗖𝗜𝗔𝗟 ♦️*

●. *Support group :* https://chat.whatsapp.com/KwFkWjI8qJ6B174esar8IM

●. *Github:* https://github.com/PrabathLK/PRABATH-MD

●. *Developer:* https://github.com/PrabathLK

*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀᴀʙᴀᴛʜ-ᴍᴅ-ᴏꜰᴄ-ᴛᴇᴀᴍ*`
        let buttonMessaged = {
            image: { url: await botpic() },
            caption: cap,
            footer: tlang().footer,
            headerType: 4,
            }
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)
//---------------------------------------------------------------------------
cmd({
        pattern: "system",
        alias: ["සිස්ටම්"],
        desc: "To check bot status",
        category: "general",
        react: "📟",
        filename: __filename,
    },
    async(Void, citel) => {
        const uptime = process.uptime();
        timestampe = speed();
        citel.reply("*Checking System Status.*");
        latensie = speed() - timestampe;
        let ter = `
┏━━━━━━━━━━━━━━━━━━━━━━━
┃
┃ ⏱️ *Uptime:-* ${runtime(process.uptime())}
┃
┃ 📟 *Ram usage:-* ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
┃
┃ ⚡ *Speed:-* ${latensie.toFixed(4)} ms
┃
┃ 📱 *User:-* ${Config.ownername}
┃
┃ 👨‍💻 *Owner:-* Prabath 
┃
┃ 🧬 *Version:-* 3.0 V 
┃
┗━━━━━━━━━━━━━━━━━━━━━━━━
`;
        let buttonMessaged = {
            caption: ter,
            footer: tlang().footer,
            headerType: 4,
            }
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)
