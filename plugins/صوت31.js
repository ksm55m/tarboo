let handler = async (m, { conn, usedPrefix, __dirname, text, isPrems }) => {

    const vn = './media/دا وقتو.mp3';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', fileName: `دا وقتو.mp3`}, {quoted: m});
};

handler.help = ['notification']
handler.tags = ['notification']
handler.command = ['دا وقتو', 'مش وقتو','مش وقتك'] 
handler.customPrefix = /^(دا وقتو|مش وقتو|مش وقتك)$/i;
handler.command = new RegExp;
export default handler