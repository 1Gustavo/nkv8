const a = '```'

exports.wait = () => {
	return`*「ESPERE」 PROCESSANDO ⏳*`
}

exports.succes = () => {
	return`*「SUCESSO」 ✔*`
}

exports.lvlon = () => {
	return`*「ATIVAR」 LEVELING ✔*`
}

exports.lvloff = () => {
	return`*「DESATIVAR」 LEVELING ✖*`
}

exports.lvlnul = () => {
	return`*|SEU NÍVEL AINDA ESTÁ VAZIO| 🚫*`
}

exports.lvlnoon = () => {
	return`*❕NÍVEL DO GRUPO AINDA NÃO ESTÁ ATIVADO *`
}

exports.noregis = () => {
	return`*▪️「 NÃO REGISTRADO AINDA」 *\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar affis|17*`
}

exports.rediregis = () => {
	return`*「 JÁ REGISTRADO」 😉✔*\n\n*kamu sudah terdaftar di database bot*`
}

exports.stikga = () => {
	return`*▪️[FALHEI] TENTE  NOVAMENTE*`
}

exports.linkga = () => {
	return`❌*[DESCULPA LINK  INVÁLIDO]*`
}

exports.groupo = () => {
	return`*「PERMITIDO SO EM GRUPO」🚫*`
}

exports.ownerb = () => {
	return`*「PROPRIETÁRIO SOMENTE PODE USAR ESTE COMANDO 」✅*`
}

exports.ownerg = () => {
	return`*⚠️「SOMENTE ADMS PODEM USAR」*`
}

exports.admin = () => {
	return`*「⚠️「SOMENTE ADMS PODEM USAR」*`
}

exports.badmin = () => {
	return`*❗「NECESSÁRIO QUE O BOT SEJA ADMINISTRADOR 」*`
}

exports.nsfwoff = () => {
	return`*❗ATENÇÃO  MODO |NSFW DESATIVADO|*`
}

exports.bug = () => {
	return`*<|Problemas  foram relatados ao proprietário do BOT, relatórios falsos não serão respondidos|>*`
}

exports.wrongf = () => {
	return`*◾|FORMATO ERRADO, TEXTO ESTA  EM BRANCO|*`
}

exports.clears = () => {
	return`*[LIMPANDO  AS MENSAGEMS/ COMANDOS✅]*`
}

exports.pc = () => {
	return`*「 REGISTRO」 ⏳*\n\n  para saber se você se registrou verifique a mensagem que enviei \n\nNOTE:\n*se você não entendeu a mensagem.  significa que você não salvou o número do bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DADOS DE PAÍS 」⏳*\n\n você se cadastrou com os dados \n\n┏━⊱nome\n┗⊱${namaUser}\n┏━⊱número\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱idade\n┗⊱${umurUser}\n┏━⊱hora de registro\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTE :não se esqueça deste número porque é importante✅`
}

exports.cmdnf = (prefix, command) => {
	return`⚠️comando *${prefix}${command}* não encontrado \ tente escrever *${prefix}menu* `
}

exports.owneresce = (pushname) => {
	return`*Desculpe, mas ${pushname} não o script do dono*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Desculpe ${pushname}seu nível não é suficiente*\n\n*┏⊱nível  : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível: ${aha}*\n\n_NOTE : CHAT / SEMPRE PARA OBTER XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱nível : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível  : ${ahb}*\n\n_NOTE : CHAT / SEMPRE PARA OBTER XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Desculpe  ${pushname} seu nível não é suficiente*\n\n*┏⊱nível  : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahc}*\n\n_NOTE : CHAT / SEMPRE PARA OBTER XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Desculpe  ${pushname} seu nível não é suficiente*\n\n*┏⊱nível  : ${getLevelingLevel(sender)}*\n*┣⊱tipo de  comando : ${command}*\n*┗⊱requisitos de nivel : ${ahd}*\n\n_NOTE : CHAT/ SEMPRE PARA OBTER XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Desculpe  ${pushname} seu nível não é suficiente*\n\n*┏⊱nível  : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nivel : ${ahe}*\n\n_NOTE : CHAT/ SEMPRE PARA OBTER XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Desculpe  ${pushname} seu nível não é suficiente *\n\n*┏⊱nível  : ${getLevelingLevel(sender)}*\n*┣⊱tipo de  comando : ${command}*\n*┗⊱requisitos de nível  : ${ahf}*\n\n_NOTE : CHAT/SEMPRE PARA OBTER  XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, client , process , pepolu) => { 
	return `
${a}❏ SOBRE O USUÁRIO${a}
 ${a}│ Nome : ${pushname}${a}
 ${a}│ Número : wa.me/${sender.split("@")[0]}${a}
 ${a}│ O teu dinheiro : Rp${uangku},-${a}
 ${a}│ XP : ${getLevelingXp(sender)}/${reqXp} ${a}
 ${a}│ Nivel : ${getLevelingLevel(sender)}${a}
 ${a}│ Função : ${role}${a}
 ${a}╰ Registro do usuário : ${_registered.length}${a}
 
 ${a}「uso total do comando」${a}
 *${pepolu} used*

 *${prefix}info*
 *${prefix}donasi*
 *${prefix}owner*

${a}❏CUSTOMIZAÇÃO${a}
 ${a}│•${prefix}sticker${a}
 ${a}│•${prefix}quotemaker${a}
 ${a}│•${prefix}qrcode${a}
 ${a}│•${prefix}nulis${a}
 ${a}│•${prefix}text3d${a}
 ${a}│•${prefix}tahta${a}
 ${a}╰•${prefix}ttp${a}
 
${a}❏MENU${a}
 ${a}│•${prefix}lirik${a}
 ${a}│•${prefix}artinama${a}
 ${a}│•${prefix}chord${a}
 ${a}│•${prefix}bisakah${a}
 ${a}│•${prefix}kapankah${a}
 ${a}│•${prefix}apakah${a}
 ${a}│•${prefix}rate${a}
 ${a}│•${prefix}tebakgambar${a}
 ${a}│•${prefix}meme${a}
 ${a}│•${prefix}textlight${a}
 ${a}│•${prefix}glitchtext${a}
 ${a}│•${prefix}slap${a}
 ${a}│•${prefix}emoji${a}
 ${a}│•${prefix}animequotes${a}
 ${a}│•${prefix}katacinta${a}
 ${a}│•${prefix}neonime${a}
 ${a}│•${prefix}stickerhide${a} ~[error]~
 ${a}│•${prefix}tampar${a}
 ${a}│•${prefix}quotes${a}
 ${a}│•${prefix}moddroid${a} 
 ${a}│•${prefix}apkpure${a}
 ${a}╰•${prefix}happymod${a} 
 
${a}❏MÚTUO${a}
 ${a}│•${prefix}mutual${a}
 ${a}╰•${prefix}next${a}
 
${a}❏MEDIA MENU${a}
 ${a}│•${prefix}brainly${a}
 ${a}│•${prefix}pinterest${a}
 ${a}│•${prefix}resepmasakan${a}
 ${a}│•${prefix}igstalk${a}
 ${a}│•${prefix}beritahoax${a}
 ${a}│•${prefix}tiktok${a}
 ${a}│•${prefix}infonomor${a}
 ${a}│•${prefix}fototiktok${a}
 ${a}│•${prefix}bitly${a}
 ${a}│•${prefix}tiktokstalk${a}
 ${a}│•${prefix}ssweb${a}
 ${a}╰•${prefix}kbbi${a}
 
${a}❏MÚSICA${a}
 ${a}│•${prefix}ytmp3${a}
 ${a}│•${prefix}ytmp4${a}
 ${a}╰•${prefix}joox${a}
 
${a}❏NSFW${a}
 ${a}│•${prefix}anjing${a}
 ${a}│•${prefix}blowjob${a}
 ${a}│•${prefix}nekonime${a}
 ${a}│•${prefix}pokemon${a}
 ${a}│•${prefix}husbu${a}
 ${a}│•${prefix}nangis${a}
 ${a}│•${prefix}cium${a}
 ${a}│•${prefix}peluk${a}
 ${a}╰•${prefix}ranime${a}
 
${a}❏LIMITE & DINHEIRO${a}
 ${a}│•${prefix}limit${a}
 ${a}│•${prefix}buylimit${a}
 ${a}│•${prefix}transfer${a}
 ${a}│•${prefix}dompet${a}
 ${a}│•${prefix}giftlimit${a}
 ${a}╰•${prefix}leaderboard${a}
 
${a}❏MENU DOS ADMINS ${a}
 ${a}│•${prefix}delete${a}
 ${a}│•${prefix}hidetag${a}
 ${a}│•${prefix}blocklist${a}
 ${a}│•${prefix}grouplist${a}
 ${a}│•${prefix}level${a}
 ${a}│•${prefix}linkgc${a}
 ${a}│•${prefix}tagall${a}
 ${a}│•${prefix}setpp${a}
 ${a}│•${prefix}add${a}
 ${a}│•${prefix}kick${a}
 ${a}│•${prefix}setname${a}
 ${a}│•${prefix}setdesc${a}
 ${a}│•${prefix}demote${a}
 ${a}│•${prefix}promote${a}
 ${a}│•${prefix}listadmin${a}
 ${a}│•${prefix}group [buka/tutup]${a}
 ${a}│•${prefix}leveling [enable/disable]${a}
 ${a}│•${prefix}nsfw [1/0]${a}
 ${a}│•${prefix}simih [1/0]${a}
 ${a}│•${prefix}welcome [1/0]${a}
 ${a}│•${prefix}antilink [1/0]${a}
 ${a}╰•${prefix}nobadword [enable/disable]${a}
 
${a}❏FERRAMENTAS${a}
 ${a}│•${prefix}bass${a}
 ${a}│•${prefix}tomp3${a}
 ${a}│•${prefix}slowmo${a}
 ${a}│•${prefix}gemok${a}
 ${a}│•${prefix}wasted${a}
 ${a}│•${prefix}tourl${a}
 ${a}│•${prefix}triggered${a}
 ${a}│•${prefix}wanted${a}
 ${a}│•${prefix}facebookpage${a}
 ${a}│•${prefix}gtav${a}
 ${a}│•${prefix}costumwp${a}
 ${a}│•${prefix}pantaimalam${a}
 ${a}│•${prefix}crossgun${a}
 ${a}│•${prefix}bakar${a}
 ${a}│•${prefix}pencil${a}
 ${a}╰•${prefix}tupai${a}
 
${a}❏ARMAZENAMENTO NA NÚVEM${a}
 ${a}│•${prefix}addsticker${a}
 ${a}│•${prefix}getsticker${a}
 ${a}│•${prefix}stickerlist${a}
 ${a}│•${prefix}addvideo${a}
 ${a}│•${prefix}getvideo${a}
 ${a}│•${prefix}videolist${a}
 ${a}│•${prefix}getimage${a}
 ${a}│•${prefix}addImage${a}
 ${a}│•${prefix}imagelist${a}
 ${a}│•${prefix}addaudio${a}
 ${a}│•${prefix}getaudio${a}
 ${a}╰•${prefix}audiolist${a}
 
${a}❏MENU DO DONO${a}
 ${a}│•${prefix}bc${a}
 ${a}│•${prefix}addbadword${a}
 ${a}│•${prefix}delbadword${a}
 ${a}│•${prefix}bcgc${a}
 ${a}│•${prefix}kickall${a}
 ${a}│•${prefix}setreply${a}
 ${a}│•${prefix}setprefix${a}
 ${a}│•${prefix}clearall${a}
 ${a}│•${prefix}block${a}
 ${a}│•${prefix}unblock${a}
 ${a}│•${prefix}leave${a}
 ${a}│•${prefix}event [1/0]${a}
 ${a}│•${prefix}clone${a}
 ${a}╰•${prefix}setppbot${a}
 
${a}❏SOBRE O BOT${a}
 ${a}│ • Nome : ${client.user.name}${a}
 ${a}│ • navegador : ${client.browserDescription[1]}${a}
 ${a}│ • servidor : ${client.browserDescription[0]}${a}
 ${a}│ • versão : ${client.browserDescription[2]}${a}
 ${a}│ • Velocidade  : ${process.uptime()}${a}
 ${a}│ • celular : ${client.user.phone.device_manufacturer}${a}
 ${a}╰ • versi wa : ${client.user.phone.wa_version}${a}
 
${a}❏GRAÇAS A${a}
 ${a}│ • NUKE MODS 
 ${a}│ •  VERSÃO: NKV8
 ${a}│ •   WA.me/5519991718371
 ${a}│ • GRUPO: https://chat.whatsapp.com/Hbn8T34Hkpi6UaA1yUatri
 ${a}│•  PARCERIA-> ⏤͟͟͞͞★𝐃𝐄𝐕 𝐌𝐎𝐃𝐒 𝐁𝐑𝐀𝐒𝐈𝐋 ꗄ➺
 ${a}╰ • NOTA: não implore${a}
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
	
*「 LEVEL 」*
┏⊱ *Nome* : ${pushname}
┣⊱ *Numero* : wa.me/${sender.split("@")[0]}
┣⊱ *Xp* : ${getLevelingXp(sender)}
┣⊱ *Limit* : +3
┣⊱ *Função*: ${role}
┗⊱ *Nível * : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*Desculpe ${pushname} O limite de hoje aumentou*\n*limite de compra para obter limite / subir de nível*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
o resto do seu limite : ${limitCounts}

NOTA: para obter o limite.  pode passar de nível ou comprar limite`
}

exports.satukos = () => {
	return`*Adicione o parâmetro 1 / ativar ou 0 / desativar`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ 「 ATM 」⊰━┓*\n┣⊱ *Nome* : ${pushname}\n┣⊱ *Número * : ${sender.split("@")[0]}\n┣⊱ *Dinheiro* : ${uangkau}\n┗━━━━━━━━━━`
}

exports.afkOn = (pushname, reason) => {
    return `O recurso AFK funciona*ativado*!\n\n➸ *Nome de usuário*: ${pushname}\n➸ *Razão*: ${reason}`
}

exports.afkOnAlready = () => {
    return `O recurso AFK foi ativado de antemão.`
}

exports.afkMentioned = (getReason, getTime) => {
    return `*「 MODO AFK 」*\n\Shhh!  A pessoa está AFK, não se preocupe!\n➸ *Razão*: ${getReason}\n➸ *Desde a*: ${getTime}`
}

exports.afkDone = (pushname) => {
    return `*${pushname}* voltou do AFK!  Bem vindo de volta~`
}
