import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw `Reply Foto/Kirim Foto Dengan Caption ${usedPrefix + command}`
await m.reply(`${htki} ${htjava} Proses Jadi Anime ${htka}`)
let media = await q.download()
let url = await uploadImage(media)
let x = await (await fetch(`https://api.lolhuman.xyz/api/imagetoanime?apikey=${global.lolkey}&img=${url}`)).buffer()
conn.sendFile(m.chat, x, 'imagetoanime.jpg', `Sudah Jadi`, m, false)
}
handler.help = ['jadianime']
handler.tags = ['anime']
handler.command = /^(jadianime)$/i
handler.limit = 3
export default handler