const handler = async (m, {conn, usedPrefix, command, args, isOwner, isAdmin, isROwner}) => {
const optionsFull = `〔 𝗢𝗽𝘁𝗶𝗺𝘂𝘀 𝗕𝗼𝘁 〕\n 

👻 *Opción:* 💬 | ANTIPRIVADO
👻 *Comando:* ${usedPrefix + command} antiprivado
👻 *Descripción:* El Bot bloquerá a las personas que escriban al privado del Bot. 
👻 *Nota:* Este comando solo puede ser usado por el/los propietario(s) del bot.`.trim();

  const isEnable = /true|enable|(turn)?on|1/i.test(command);
  const chat = global.db.data.chats[m.chat];
  const user = global.db.data.users[m.sender];
  const bot = global.db.data.settings[conn.user.jid] || {};
  const type = (args[0] || '').toLowerCase();
  let isAll = false; const isUser = false;
  switch (type) {
    case 'antiprivado':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.antiPrivate = isEnable;
      break;
      case 'welcome':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('group', m, conn);
        throw false;
     }
  } else if (!(isAdmin || isOwner || isOwner)) {
     global.dfail('admin', m, conn);
        throw false;
     }
  chatwelcome = isEnable
    default:
      if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, {text: optionsFull}, {quoted: m});
      throw false;
  }
  conn.sendMessage(m.chat, {text: `ღ *Bot :* 𝗢𝗽𝘁𝗶𝗺𝘂𝘀\n\nღ *Opción :* ${type}\n\nღ *Estado :* ${isEnable ? 'Activado' : 'Desactivado'}\n\nღ *Para* ${isAll ? 'este bot' : isUser ? '' : 'este chat'}`}, {quoted: m});
  //conn.sendMessage(m.chat, {text: `▢ *Opción:* ${type}\n\n▢ *Estado:* ${isEnable ? 'Activado' : 'Desactivado'}\n\n▢ *Para* ${isAll ? 'este bot' : isUser ? '' : 'este chat'}`}, {quoted: m});
};
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?[01])$/i;
export default handler;
