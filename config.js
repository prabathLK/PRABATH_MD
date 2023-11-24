const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("0781409259")
global.mongodb = process.env.MONGODB_URI || "Enter-MongoURI-HERE"
global.port= process.env.PORT || 5000
global.email = 'sam@sec.live'
global.github = 'https://github.com/prabathLK/PRABATH-MD'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // add your username
global.devs = '0781409259';
global.website = 'https://github.com/prabathLK/PRABATH-MD' //wa.me/+0781409259
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://i.imgur.com/H062oEI.jpeg'
module.exports = {
  OPENAI_API_KEY:process.env.OPENAI_API_KEY || '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',
  botname: process.env.BOT_NAME || 'Dylan_zw-MD',
  dl_limit: process.env.DL_SIZE || '300',
  art: process.env.AUTO_RESTART || 'true',
  sudo: process.env.SUDO || '0781409259',
  alivepic: process.env.ALIVE_IMG || 'https://telegra.ph/file/ad25b2227fa2a1a01b707.jpg',
  alivemsj: process.env.ALIVE_MSJ || '*POWERD BY Dylan-zw-MD* 🎊',
  ownername:process.env.OWNER_NAME || 'Dylan_zw',
  sessionName: process.env.SESSION_ID || 'Y291HITb#-IC_M3ialJWQhUR-8FAkoOGzzoUbXmhmWFuQQINjB8Y',
  author: process.env.PACK_INFO.split(";")[0] || 'author', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'false',
  packname: process.env.PACK_INFO.split(";")[1] || 'Name',
  autoreaction: process.env.AUTO_REACTION || 'off',
  antibadword : process.env.ANTI_BAD_WORD || 'fuck,huth,fucking,huththa,huththo,hukanna,fucked,pakaya,pako,ponnaya,ponnayo,kariya,kariyo,huththaa,Bitch',
  alwaysonline: process.env.ALWAYS_ONLINE || 'true',
  antifake : process.env.FAKE_COUNTRY_CODE || '',
  readmessage: process.env.READ_MESSAGE || true,
  HANDLERS: process.env.PREFIX || ['.'],
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "flase",
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'remove',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || 'put your herokuapp name',
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || 'put your heroku_api_key',
  BRANCH: 'main',
  ALIVE_MESSAGE: process.env.ALIVE_MESSAGE || 'Yes Im alive as always😎',
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || 'put-key-here',
  VERSION: process.env.VERSION === undefined ? 'v.5.0.0' : process.env.VERSION,
  LANG: process.env.THEME|| 'Dylan-MD',
  WORKTYPE: process.env.WORK_TYPE === undefined ? 'public' : process.env.WORK_TYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
