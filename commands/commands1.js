const { tlang,cmd } = require('../lib')
const Config = require('../config')
const axios = require('axios')
// Put here your url with modified words and urls
const url = 'https://raw.githubusercontent.com/SamPandey001/Secktor-Plugins/main/plugins/bgm/bgm.js'

/**
 cmd({
            pattern: "bgmnew",
            category: "owner",
            use: '',
        },
**/ 
cmd({ on: "text" }, async(Void, citel,text,{isCreator}) => {
 if(!text) return citel.reply('හායි අනේ 😁')
  for (vr in data){
 if(citel.text.toLowerCase().includes(vr)) return Void.sendMessage(citel.chat,{audio: { url : data[vr]},mimetype: 'audio/mpeg'},{quoted:citel})   
}
})
