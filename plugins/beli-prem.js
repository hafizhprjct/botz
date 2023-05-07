import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix }) => {
	let url= 'https://telegra.ph/file/b2d3dde63352475a9bd87.jpg'
	conn.sendButton(m.chat, '*❲ UP PREMIUM ❳*\n\n⎇ 7 Hari 7ᴋ\n⎇ 20 Hari 15ᴋ\n⎇ 30 Hari 22ᴋ\n⎇ 40 Hari 30ᴋ\n⎇ 50 Hari 40ᴋ\n⎇ permanen 50k\n\n*ᴍɪɴᴀᴛ ᴄʜᴀᴛ ᴏᴡɴᴇʀ*', wm, await(await fetch(url)).buffer(), [['Owner',`/owner`]],m)
}
handler.command = /^(uppremium|upprem)$/i
handler.tags = ['info']
handler.help = ['upprem']
handler.premium = false
handler.limit = false

export default handler
