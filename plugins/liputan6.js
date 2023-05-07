const fetch = require("node-fetch")
let handler = async(m, { conn }) => {
   var a = await require('@bochilteam/scraper').liputan6()
   var b = JSON.parse(JSON.stringify(a))
   var c = await conn.rand(b)
   //var c = b[Math.floor(Math.random() * b.length)]
   var { title, link, image, description, date, label } = c
   var sell = `ðŸ“º *Liputan6 News*
ðŸŒ *Berita:* ${title}
ðŸ“„ *Deskripsi:* ${description}
âŒš *Date:* ${date}
ðŸ›°ï¸ *Source Url:* ${link}`.trim()
   conn.sendButton(m.chat, `${sell}`, wm, null, [['Liputan6 News', '/liputan6']], m)
 //  conn.sendButton(m.chat, sell, wm, null, [['Liputan6 News', '.liputan6']], m)
}
handler.help = ['liputan6']
handler.tags = ['berita']
handler.command = /^liputan6(news)?$/i
handler.limit = true

module.exports = handler