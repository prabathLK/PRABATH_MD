const { fbdl,cmd } = require('../lib')
cmd({
        pattern: "logocmd",
        desc: "download instagram post.",
        category: "other",
        filename: __filename
    },
    async(Void, citel,text,{isCreator}) => {
if(!text) return citel.reply('   👨‍💻 *LOGO COMMAND LIST* 👨‍💻\n\n\n\n🪀 *Type in front of the word you want to create* 🪀\n\n\n⦿.Logo1\n\n⦿.Logo2\n\n⦿.Logo3\n\n⦿.Logo4\n\n⦿.Logo5\n\n⦿.Logo6\n\n⦿.Logo7\n\n⦿.Logo8\n\n⦿.Logo9\n\n⦿.Logo10\n\n⦿.Logo11\n\n⦿.Logo12\n\n⦿.Logo13\n\n⦿.Logo14\n\n⦿.Logo15\n\n⦿.Logo16\n\n⦿.Logo17\n\n⦿.Logo18\n\n⦿.Logo19\n\n⦿.Logo20\n\n⦿.Logo21\n\n⦿.Logo22\n\n⦿.Logo23\n\n⦿.Logo24\n\n⦿.Logo25\n\n⦿.Logo26\n\n⦿.Logo27\n\n⦿.Logo28\n\n⦿.Logo29\n\n⦿.Logo30')
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
if(!text) return citel.reply(' 👨‍💻 *𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗟𝗜𝗦𝗧* 👨‍💻\n\n\n\n\n📟 *Command:-* .song\nℹ️ *Description:-* Song Download From Youtube\n🔥 *Help:-* .song ලෙලෙනා\n\n\n📟 *Command:-* .video\nℹ️ *Description:-* Video Download From Youtube\n🔥 *Help:-* .video නේනා\n\n\n📟 *Command:-* .tgs\nℹ️ *Description:-* Download Telegram Stickers\n🔥 *help:-* .tga Enter Telegram Sticker Url \n\n\n📟 *Command:-* .ytmp4\nℹ️ *Description:-* Download Video Youtube Link\n🔥 *Help:-* .ytmp4 Enter Youtube Video Url\n\n\n📟 *Command:-* .ytmp3\nℹ️ *Description:-* Download Songs Youtube Link\n🔥 *Help:-* .ytmp3 Enter Youtube Video Url\n\n\n📟 *Command:-* .ytdoc\nℹ️ *Description:-* Song Download Form Youtube (Document)\n🔥 *Help:-* ytdoc Enter Youtube Video Url\n\n\n📟 *Command:-* .mediafire\nℹ️ *Description:-* Download Content From Mediafire Link\n🔥 *Help:-* .mediafire Enter Mediafire Url\n\n\n📟 *Command:-* .yts\nℹ️ *Description:-* Search Youtube Videos\n🔥 *Help:-* .yts ලෙලෙනා\n\n\n📟 *Command:-* .findvideo\nℹ️ *Description:-* short video mention and get information\n🔥 *Help:-* .findvideo Mention a short video\n\n\n📟 *Command:-* .findsong\nℹ️ *Description:-* find song from short song chip\n🔥 *Help:-* .findsong tag short song chip\n\n\n📟 *Command:-* .mp4down\nℹ️ *Description:-* download mp4\n🔥 *Help:-* .mp4down give me a video link')
let response = await fbdl(text)
for (let i=0;i<response.length;i++) {
await Void.sendFileUrl(citel.chat, response[f], `*Downloaded Media from instagram.*`, citel)
}
    });

cmd({
        pattern: "groupcmd",
        desc: "download instagram post.",
        category: "other",
        filename: __filename
    },
    async(Void, citel,text,{isCreator}) => {
if(!text) return citel.reply(' 👨‍💻 *𝗚𝗥𝗢𝗨𝗣 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗟𝗜𝗦𝗧* 👨‍💻\n\n\n\n\n📟 *Command:-* .sticker\nℹ️ *Description:-* Photo To Sticker Made\n🔥 *Help:-* .sticker Mention Any Photo or Video\n\n\n📟 *Command:-* .promote\nℹ️ *Description:-* promote Admin\n🔥 *Help:-* .promote Tag Any User \n\n\n📟 *Command:-* .demote\nℹ️ *Description:-* Demote Admin\n🔥 *help:-* .promote tag Any User \n\n\n📟 *Command:-* .ban\nℹ️ *Description:-* Cmd Block Use \n🔥 *Help:-* .ban tag Any User\n\n\n📟 *Command:-* .unban\nℹ️ *Description:-* Loked User Unblock\n🔥 *Help:-* .unban Tag Any User\n\n\n📟 *Command:-* .kick\nℹ️ *Description:-* Remove Participants On Group\n🔥 *Help:-* .kick Tag Any User\n\n\n📟 *Command:-* .add\nℹ️ *Description:-* Add Participants On Group\n🔥 *Help:-* .add Mobile number\n\n\n📟 *Command:-* .poll\nℹ️ *Description:-* Create poll For Group\n🔥 *Help:-* .poll question option1 option2 option3\n\n\n📟 *Command:-* .profile\nℹ️ *Description:-* Profile Imfomation Get\n🔥 *Help:-* .profile Tag Any user\n\n\n📟 *Command:-* .group\nℹ️ *Description:-* Group Mute or Unmute\n🔥 *Help:-* .group\n\n\n📟 *Command:-* .gdp\nℹ️ *Description:-* Group Profile Photo Change\n🔥 *Help:-* .gdp Tag Any photo\n\n\n📟 *Command:-* .del\nℹ️ *Description:-* Delete message\n🔥 *Help:-* .del tag message\n\n\n📟 *Command:-* .antilink\nℹ️ *Description:-* Link Remover\n🔥 *Help:-* .antilink Active or Deactive\n\n\n📟 *Command:-* .tag\nℹ️ *Description:-* Tag All Group Users\n🔥 *Help:-* .tag\n\n\n📟 *Command:-* .getjids\nℹ️ *Description:-* Get Jid\n🔥 *Help:-* .getjids\n\n\n📟 *Command:-* .rank\nℹ️ *Description:-* Check Rank\n🔥 *Help:-* .rank Tag Any User\n\n\n📟 *Command:-* .setwelcome\nℹ️ *Description:-* Welcome message Change\n🔥 *Help:-* .setwelcome Your welcome Message\n\n\n📟 *Command:-* .setgoodbye\nℹ️ *Description:-* goodbye message change \n🔥 *Help:-* .setgoodbye Your Goodbye Message\n\n\n📟 *Command:-* .gs\nℹ️ *Description:-* Group settings change\n🔥 *Help:-* .gs\n\n\n📟 *Command:-* .settings\nℹ️ *Description:-* change group settings\n🔥 *Help:-* .settings')
let response = await fbdl(text)
for (let i=0;i<response.length;i++) {
await Void.sendFileUrl(citel.chat, response[f], `*Downloaded Media from instagram.*`, citel)
}
    });

cmd({
        pattern: "genaralcmd",
        desc: "download instagram post.",
        category: "Auto Reply",
        filename: __filename
    },
    async(Void, citel,text,{isCreator}) => {
if(!text) return citel.reply(' 👨‍💻 *GENERAL COMMAND LIST* 👨‍💻\n\n\n\n\n📟 *Command:-* .alive\nℹ️ *Description:-* Test bot online or offline\n🔥 *Help:-* .alive \n\n\n📟 *Command:-* .ping\nℹ️ *Description:-* Testing Ping\n🔥 *Help:-* .ping \n\n\n📟 *Command:-* .owner\nℹ️ *Description:-* Bot owner\n🔥 *Help:-* .owner')
let response = await fbdl(text)
for (let i=0;i<response.length;i++) {
await Void.sendFileUrl(citel.chat, response[f], `*Downloaded Media from instagram.*`, citel)
}
    });

cmd({
        pattern: "gamecmd",
        desc: "download instagram post.",
        category: "Auto Reply",
        filename: __filename
    },
    async(Void, citel,text,{isCreator}) => {
if(!text) return citel.reply(' 👨‍💻 *GAME COMMAND LIST* 👨‍💻\n\n\n\n\n📟 *Command:-* .xo\nℹ️ *Description:-* This Game.')
let response = await fbdl(text)
for (let i=0;i<response.length;i++) {
await Void.sendFileUrl(citel.chat, response[f], `*Downloaded Media from instagram.*`, citel)
}
    });

cmd({
        pattern: "ownercmd",
        desc: "download instagram post.",
        category: "Auto Reply",
        filename: __filename
    },
    async(Void, citel,text,{isCreator}) => {
if(!text) return citel.reply('👨‍💻 *OWNER COMMAND LIST* 👨‍💻\n\n\n\n\n📟 *Command:-* .install\nℹ️ *Description:-* Install Plugins\n🔥 *Help:-* .install Plugin Url \n\n\n📟 *Command:-* .plugins\nℹ️ *Description:-* Install Plugins View \n🔥 *Help:-* .plugins \n\n\n📟 *Command:-* .block\nℹ️ *Description:-* Block User \n🔥 *Help:-* .block Tag user or PM Chat\n\n\n📟 *Command:-* .unblock\nℹ️ *Description:-* Unblock User \n🔥 *Help:-* .unblock Tag user or PM Chat\n\n\n📟 *Command:-* .remove\nℹ️ *Description:-* Remove Plugins \n🔥 *Help:-* .remove plugin url\n\n\n📟 *Command:-* .join\nℹ️ *Description:-* Join Group Using Whatsapp group url \n🔥 *Help:-* .join whatsapp group url\n\n\n*📟Command:-* .restart\nℹ️ *Description:-* Restart Bot \n🔥 *Help:-* .restart\n\n\n📟 *Command:-* .update \nℹ️ *Description:-* update bot \n🔥 *Help:-* .update')
let response = await fbdl(text)
for (let i=0;i<response.length;i++) {
await Void.sendFileUrl(citel.chat, response[f], `*Downloaded Media from instagram.*`, citel)
}
    });

cmd({
        pattern: "concmd",
        desc: "download instagram post.",
        category: "Auto Reply",
        filename: __filename
    },
    async(Void, citel,text,{isCreator}) => {
if(!text) return citel.reply('👨‍💻 *CONVERTER COMMAND LIST* 👨‍💻\n\n\n\n\n📟 *Command:-* .toaudio\nℹ️ *Description:-* converte video to audio\n🔥 *Help:-* .toaudio tag Any Video\n\n\n📟 *Command:-* .sticker\nℹ️ *Description:-* Photo or video to sticker \n🔥 *Help:-* .sticker tag video or photo')
let response = await fbdl(text)
for (let i=0;i<response.length;i++) {
await Void.sendFileUrl(citel.chat, response[f], `*Downloaded Media from instagram.*`, citel)
}
    });

cmd({
        pattern: "othercmd",
        desc: "download instagram post.",
        category: "Auto Reply",
        filename: __filename
    },
    async(Void, citel,text,{isCreator}) => {
if(!text) return citel.reply('👨‍💻 *OTHER  COMMAND LIST* 👨‍💻\n\n\n\n\n📟 *Command:-* .system\nℹ️ *Description:-* system status\n🔥 *Help:-* .status\n\n\n📟 *Command:-* .weather\nℹ️ *Description:-* weather test  \n🔥 *Help:-* .weather Your location\n\n\n📟 *Command:-* .eval\nℹ️ *Description:-* run codes\n🔥 *Help:-* .eval \n\n\n📟 *Command:-* .chat\nℹ️ *Description:-* Chat Bot\n🔥 *Help:-* . .chat  Bot\n\n\n📟 *Command:-* .trt\nℹ️ *Description:-* Google translate  \n🔥 *Help:-* .trt active')
let response = await fbdl(text)
for (let i=0;i<response.length;i++) {
await Void.sendFileUrl(citel.chat, response[f], `*Downloaded Media from instagram.*`, citel)
}
    });

