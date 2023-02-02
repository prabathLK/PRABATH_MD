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
if(!text) return citel.reply('👀jakahajajahakahajajahakajajajaajajajajajahahajajahah jqjqhqj hwjahwjajaahajajaahajahahahajjwhahahajajahagahjwjahwhwhaha jajabajajahahjwjwhwjwjjshwhsjsjshhhjs ajwiwhwjjwhwjwjhw    whwjwbah jajwgwha hwjwhwgw wjwjwgw whwjwvsjw sgwjwbgw whjwjwgw ahwiwvwhwjwg whwuwhsghw hwusjhshwjwjwgwhw wywiwhsjkw whwiwjwhhwjwhshjhh')
let response = await fbdl(text)
for (let i=0;i<response.length;i++) {
await Void.sendFileUrl(citel.chat, response[f], `*Downloaded Media from instagram.*`, citel)
}
    });
