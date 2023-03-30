const { tlang,shazam,prefix,cmd,citel,text} = require('../lib')

let yts = require("secktor-pack");

cmd({

        pattern: "findvideo",

        alias: ["find mp4","find video","fv","වීඩියෝව සොයන්න"],

        category: "misc",

        desc: "Finds info about song"

    },

    async(Void, citel, args) => {

        let mime = citel.quoted.mtype

        if (!citel.quoted) return citel.reply(`Send/Reply Image ${prefix}shaxam`);

        if (!/video/.test(mime)) return citel.reply(`*Mention a part of the video* ❗`);

        let buff = await citel.quoted.download();

        citel.reply(`*Identifying And Loading Information* 🌎`);

        let data = await shazam(buff);

        if (!data.status) return citel.reply(data);

          let h =  `*Title :* ${data.title}           

*Artist :* ${data.artists}            

*Album :* ${data.album}                   

*Release :* ${data.release_date}`

let search = await yts(data.title);

let anu = search.videos[0];

const getRandom = (ext) => {

            return `${Math.floor(Math.random() * 10000)}${ext}`;

        };

        if (text.length === 0) {

            reply(`❌ URL is empty! \nSend ${prefix}ytmp3 url`);


            let infoYt = await ytdl.getInfo(data.url);

            //30 MIN

            if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`*The limit has been exceeded.*❗`);

            let titleYt = infoYt.videoDetails.title;

            let randomName = getRandom(".mp3");

            const stream = ytdl(data.url, {

                    filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,

                })

                .pipe(fs.createWriteStream(`./${randomName}`));

            await new Promise((resolve, reject) => {

                stream.on("error", reject);

                stream.on("finish", resolve);

            });

            let stats = fs.statSync(`./${randomName}`);

            let fileSizeInBytes = stats.size;

            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);

            if (fileSizeInMegabytes <= dlsize) {

                let yts = require("secktor-pack");

            citel.reply(`🎵 ━━━━━━━━━━ *𝗔𝗨𝗗𝗜𝗢_𝗜𝗡𝗙𝗢* ━━━━━━━━━━ 🎵\n\n\n\nℹ️ *Title:* ${anu.title}\n\n🕑 *Duration:* ${anu.timestamp}\n\n👀 *Viewers:* ${anu.views}\n\n⬆️ *Uploaded:* ${anu.ago}\n\n🎗️ *Author:* ${anu.author.name}\n\n🗃️ *File_Size:* ${fileSizeInMegabytes} MB`);

                let search = await yts(text);

            citel.react("✅");

                let buttonMessage = {

                        audio: fs.readFileSync(`./${randomName}`),

                        jpegThumbnail: log0,

                        mimetype: 'audio/mp4',

                        fileName: `${titleYt}.mp4`,

                        caption: `● *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀᴀʙᴀᴛʜ-ᴍᴅ*`,

                        headerType: 4,

                    }

                    return Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })

                } else {

                    citel.reply(`*The limit has been exceeded.*❗`);

                }

                fs.unlinkSync(`./${randomName}`);

            } catch (e) {

                console.log(e)

            }

        }

    )
