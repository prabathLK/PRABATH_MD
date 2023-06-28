const { addnote,cmd, sck1, delnote, allnotes, delallnote, tlang, botpic, runtime, prefix, Config } = require('../lib')
 cmd({ pattern: ".",
 category: "owner",
 filename: __filename,
 desc: "Runs js code on node server." 
}, 
async(Void, citel, text,{ isCreator }) => { 
if (!isCreator) return
 try 
{
 let resultTest = eval('const a = async()=>{\n' + text + '\n}\na()'); 
if (typeof resultTest === "object") citel.reply(JSON.stringify(resultTest));
 else citel.reply(resultTest.toString()); } 
catch (err) {
 return citel.reply(err.toString()); 
}
 } )
