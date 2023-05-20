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

const moment = require('moment-timezone')
const {fetchJson,cmd, tlang } = require('../lib')
let gis = require("g-i-s");
const axios = require('axios')
const fetch = require('node-fetch')

    //---------------------------------------------------------------------------
cmd({
            pattern: "movie",
            category: "search",
            desc: "Sends image of asked Movie/Series.",
            use: '<text>',
            filename: __filename,
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`*Please give me a movie name* ❗`);
            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`);
            let imdbt = "";
            console.log(fids.data)
            imdbt += "━━━━━━━━━━━━━━━━━\n" + " ``` Movie info```\n" + "━━━━━━━━━━━━━━━━━\n";
            imdbt += "🎬 Title      : " + fids.data.Title + "\n\n";
            imdbt += "📅 Year       : " + fids.data.Year + "\n\n";
            imdbt += "⭐ Rated      : " + fids.data.Rated + "\n\n";
            imdbt += "📆 Released   : " + fids.data.Released + "\n\n";
            imdbt += "⏳ Runtime    : " + fids.data.Runtime + "\n\n";
            imdbt += "🌀 Genre      : " + fids.data.Genre + "\n\n";
            imdbt += "👨🏻‍💻 Director   : " + fids.data.Director + "\n\n";
            imdbt += "✍ Writer     : " + fids.data.Writer + "\n\n";
            imdbt += "👨 Actors     : " + fids.data.Actors + "\n\n";
            imdbt += "📃 Plot       : " + fids.data.Plot + "\n\n";
            imdbt += "🌐 Language   : " + fids.data.Language + "\n\n";
            imdbt += "🌍 Country    : " + fids.data.Country + "\n\n";
            imdbt += "🎖️ Awards     : " + fids.data.Awards + "\n\n";
            imdbt += "📦 BoxOffice  : " + fids.data.BoxOffice + "\n\n";
            imdbt += "🏙️ Production : " + fids.data.Production + "\n\n";
            imdbt += "🌟 imdbRating : " + fids.data.imdbRating + "\n\n";
            imdbt += "❎ imdbVotes  : " + fids.data.imdbVotes + "";
            Void.sendMessage(citel.chat, {
                image: {
                    url: fids.data.Poster,
                },
                caption: imdbt,
            }, {
                quoted: citel,
            });

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "weather",
            category: "search",
            desc: "Sends weather info about asked place.",
            use: '<location>',
            filename: __filename,
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply("Give me location.Baka!!");
            let wdata = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
            );
            let textw = "";
            textw += `🌦️ ━━━ *කාලගුණ නිවේදනය* ━━━ 🌦️ ${text}\n\n\n`;
            textw += `⛈️ *දැන් තත්වය:-* ${wdata.data.weather[0].main}\n\n`;
            textw += `📃 *විස්තරය:-* ${wdata.data.weather[0].description}\n\n`;
            textw += `☀️ *සාමාන්‍ය උෂ්ණත්වය:-* ${wdata.data.main.temp}\n\n`;
            textw += `🔥 *දැනෙන්නේ:-* ${wdata.data.main.feels_like}\n\n`;
            textw += `🌫️ *පීඩනය:-* ${wdata.data.main.pressure}\n\n`;
            textw += `🪐 *ආර්ද්‍රතාවය:-* ${wdata.data.main.humidity}\n\n`;
            textw += `🌪️ *සුළගේ වේගය:-* ${wdata.data.wind.speed}\n\n`;
            textw += `🌐 *අක්ෂාංශ:-* ${wdata.data.coord.lat}\n\n`;
            textw += `🌏 *දේශාංශ:-* ${wdata.data.coord.lon}\n\n`;
            textw += `🌍 *රට:-* ${wdata.data.sys.country}\n\n`;

            Void.sendMessage(
                citel.chat, {
                    text: textw,
                }, {
                    quoted: citel,
                }
            );

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "horo",
            category: "search",
            desc: "Gives horoscope info of user.",
            use: '<sign>\n:Example: horo libra',
            filename: __filename,
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply("Provide me a sign!")
            try {
                const URL = `https://aztro.sameerkumar.website/?sign=${text}&day=today`;
                fetch(URL, {
                        method: 'POST'
                    })
                    .then(response => response.json())
                    .then(json => {
                        const date = json.current_date;
                        console.log(date);
                        let textw = "";
                        textw += `*🌟 Horoscope of  ${text}*\n\n`;
                        textw += `*Current Date:* ${json.current_date}.\n`;
                        textw += `*Sign:* ${text}.\n`;
                        textw += `*Lucky Time:* ${json.lucky_time}.\n`;
                        textw += `*Compatibility:* ${json.compatibility}.\n`;
                        textw += `*Lucky Number:* ${json.lucky_number}.\n`;
                        textw += `*Lucky Color:* ${json.color}.\n`;
                        textw += `*Today Mood:* ${json.mood}.\n`;
                        textw += `*Overall:* ${json.description}.\n`;
                        citel.reply(textw)
                    });

            } catch (e) {
                console.log(e)
            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "google",
            category: "search",
            desc: "Sends info of given query from Google Search.",
            use: '<text>',
            filename: __filename,
        },
        async(Void, citel, text) => {
            if (!text) throw `Example : ${prefix}google Secktor Md`
            let google = require('google-it')
            google({ 'query': text }).then(res => {
                let text = `Google Search From : ${text}\n\n`
                for (let g of res) {
                    text += `➣ *Title* : ${g.title}\n`
                    text += `➣ *Description* : ${g.snippet}\n`
                    text += `➣ *Link* : ${g.link}\n\n────────────────────────\n\n`
                }
                citel.reply(text)
            })

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "couplepp",
            category: "search",
            desc: "Sends two couples pics.",
            filename: __filename,
        },
        async(Void, citel, text) => {
            let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
            let random = anu[Math.floor(Math.random() * anu.length)]
            Void.sendMessage(citel.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: citel })
            Void.sendMessage(citel.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: citel })
        }
    )
    //---------------------------------------------------------------------------
cmd({
        pattern: "snumber",
        alias: ["sn"],
        category: "search",
        react: "🏆",
        desc: "Searches in given rage about given number.",
        use: '9112345678xx',
        filename: __filename,
    },
    async(Void, citel, text) => {
        var inputnumber = text.split(" ")[0]
        if (!inputnumber.includes('x')) return citel.reply('You did not add x\nExample: iswa 9196285162xx')
        citel.reply(`Searching for WhatsApp account in given range...`)

        function countInstances(string, word) {
            return string.split(word).length - 1;
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx;
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text = `*--『 List of Whatsapp Numbers 』--*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random;
            if (random_length == 1) {
                random = `${status1}`
            } else if (random_length == 2) {
                random = `${status1}${status2}`
            } else if (random_length == 3) {
                random = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
                random = `${status1}${status2}${status3}${dom4}`
            }
            var anu = await Void.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`);
            var anuu = anu.length !== 0 ? anu : false
            try {
                try {
                    var anu1 = await Void.fetchStatus(anu[0].jid)
                } catch {
                    var anu1 = '401'
                }
                if (anu1 == '401' || anu1.status.length == 0) {
                    nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                } else {
                    text += `🧐 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n ✨*Bio :* ${anu1.status}\n🍁*Last update :* ${moment(anu1.setAt).tz('Asia/Kolkata').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                }
            } catch {
                nowhatsapp += `${number0}${i}${number1}\n`
            }
        }
        citel.reply(`${text}${nobio}${nowhatsapp}`)

    }
)
