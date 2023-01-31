const { fbdl,cmd } = require('../lib')
cmd({
        pattern: "fbdl",
        react: "ℹ️",
        desc: "download facebook post.",
        category: "downloader",
        filename: __filename
    },    

async function get_FACEBOOK() {
    let url = 'https://www.getfvid.com/=(text)'
    try {
        const response = await axios.get(url)
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error)
        return false
    }
}

get_FACEBOOK()

module.exports = get_FACEBOOK
