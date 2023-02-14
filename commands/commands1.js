const { tlang,cmd } = require('../lib')
const Config = require('../config')
const axios = require('axios')
// Put here your url with modified words and urls
const url = 'https://gist.github.com/prabathLK/f602911954a959c8730aeb00a588d15d/raw'

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
