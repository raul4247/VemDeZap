function genMessage(){
	let frases = ["Para famoso assalto a geladeira na madrugada! 👮 Sou culpado seu poliça noturno!!!! kakakakaka Vem de zap 👌👌👌👌😅😅",
	"🚨 piuuuuu ✋🏻👮🏾 paradoh ai ✋🏻 voce taah sendu investigado 👀 na operacao Lava Zap 🚓😂 passa p ca seu zap 😎 pra q possamos resolver issooh 😘😘🙊",
	"⛅Previsao do tempo no Zap ⛅ Sobre o Tempo?? Eh o q vc Ta perdendo Sem me Chama 👎🏽 E o Clima?? O Clima Eh de Putaria 😏😈😈👅 Vem de Zap✌🔝",
	"🚨URGENTE🚨 Deu no Jornal Nacional ontem 📰🇧🇷 o Governo 👀🌝 passará a MULTAR 👮🏻🤚 quem Não vir de ZAP 🙈😂🆒 Não quer Pagar Multa 😜❓ Vem de Zap 😉👌🏻",
	"parada aí ✋✋✋ vc esta detida 🚔😂😈👮 a fiança custa 11 ✋👮💰 os 11 numeros do seu zap 🙊",
	"‼PARADA. AI🖐🆘 🤔voCE SABIA. QUE PAZ AO CONTRARIO EH ZAP??..😵 se voce eh A FAVOR DA pAZ . PASSA O ZAP. 😝🙏 que DEUS abençoe 😘✅",
	"🚨📰Senado Aprova👍 Nova Lei📑📑 O Direito De 👉Ir👉 E 👈Vir👈 De Zap Eai??😃Ta Esperando⌚O Que?? Vem👋De Zap📲😘",
	"Parada 🚨✋ Vou te revistar 👐 Espera! O que é isso? 😱😡 É seu zap? 😒 Você está presa por porte ilegal de zap 🚔👍 Passa já pra cá esse zap 😎",
	"ATENÇÃO ⚠ A 🌐 ONU 🌐 VAI INCLUIR NA CARTA ✉ DE DIREITOS HUMANOS MAIS UM DIREITO ⚠ DIREITO DE IR 👉 E VIR 👈 DE ZAP 💬🔥 VEM DE ZAP 💬",
	"vir de táxi 🚕 : R$ 55,00 💸 vir de uber 🚘 : R$ 25,00 💸 vir de ônibus 🚍 : R$ 4,00 💸 vir de zap 📲 : R$ 0,00 💰 vem de zap 😏😂😂😅👌🔝🙈",
	"vc quer meu zap ? 👌😉 mas nao vai ter 🔒😂porque sabe o que eu sou ? 👏🙌😺isso mesmo, comprometidooh 👩‍❤️‍💋‍👩😍😍❤️ repasse se vc é assim 👏👏😂",
	" PARADA AI ✋🏻✋🏻💣🆘🛑🚫 AKI QUEM FALA É 😏🙈 O zAP BoiS 😢😂😏🍃 PASSA O ZAp se VC VeM de Zo P 😅😂 n AdianTA MENTIR EM 😊 jesus ta CONITGO#DeusehTOP 🔝👌",
	" PARADA AI ✋🏻✋🏻💣🆘🛑🚫 AKI QUEM FALA É 😏🙈 O zAP BoiS 😢😂😏🍃 PASSA O ZAp se VC VeM de Zo P 😅😂 n AdianTA MENTIR EM 😊 jesus ta CONITGO#DeusehTOP 🔝👌",
	"‼️ATENÇÃO‼️ 👉PESQUISAS INDICAM👈 NEM VINHO TINTO🍾😏 NEM VINHO BRANCO🍾😌 O MELHOR É VIN DE ZAP 😜😜 👌👌👌 VEM DE ZAP 😂😂😂😂"]

	let frase = frases[Math.floor(Math.random()*frases.length)]
	$("#message").text(frase)
}

function openWpp(){
	console.log ('https://api.whatsapp.com/send?text=' + encodeURIComponent($('#url').text()))

}

genMessage()