const axios = require('axios')
cmd({
        pattern: "fbdl",
        react: "ℹ️",
        desc: "download facebook post.",
        category: "downloader",
        filename: __filename
    },    
    async function get_fbdl() {
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

get_fbdl()

module.exports = get_fbdl
