$(document).ready(function () {
    $('.cards').fadeIn(3000);
})

function genMessage(){
	let frases = ["Para famoso assalto a geladeira na madrugada! 👮 Sou culpado seu poliça noturno!!!! kakakakaka\n Vem de zap 👌👌👌👌😅😅", 
              "🚨 piuuuuu ✋🏻👮🏾 paradoh ai ✋🏻 voce taah sendu investigado 👀 na operacao Lava Zap 🚓😂\n passa p ca seu zap 😎 pra q possamos resolver issooh 😘😘🙊", 
              "⛅Previsao do tempo no Zap ⛅\n Sobre o Tempo?? Eh o q vc Ta perdendo Sem me Chama\n 👎🏽 E o Clima?? O Clima Eh de Putaria 😏😈😈👅\n Vem de Zap✌🔝", 
              "🚨URGENTE🚨\n Deu no Jornal Nacional ontem 📰🇧🇷 o Governo 👀🌝 passará a MULTAR 👮🏻🤚 quem Não vir de ZAP 🙈😂🆒h Não quer Pagar Multa 😜❓Vem de Zap 😉👌🏻" , 
              "parada aí ✋✋✋\n vc esta detida 🚔😂😈👮\n a fiança custa 11 ✋👮💰 os 11 numeros do seu zap 🙊" ,
              "‼PARADA. AI🖐🆘\n 🤔voCE SABIA. QUE PAZ AO CONTRARIO EH ZAP??..😵\n se voce eh A FAVOR DA pAZ . PASSA O ZAP. 😝🙏 \nque DEUS abençoe 😘✅",
              "🚨📰Senado Aprova👍 Nova Lei📑📑\n O Direito De 👉Ir👉 E 👈Vir👈 De Zap\n Eai??😃Ta Esperando⌚O Que??\n Vem👋De Zap📲😘",
              " Parada 🚨✋\n Vou te revistar 👐\n Espera! O que é isso? 😱😡\n É seu zap? 😒 Você está presa por porte ilegal de zap 🚔👍\n Passa já pra cá esse zap 😎",
              "ATENÇÃO ⚠\n A 🌐 ONU 🌐  VAI INCLUIR NA CARTA ✉ DE DIREITOS HUMANOS MAIS UM DIREITO ⚠ \n DIREITO DE IR 👉 \n E VIR 👈 \n DE ZAP 💬🔥 \n VEM DE ZAP 💬",
              "vir de táxi 🚕 : R$ 55,00 💸\n vir de uber 🚘 : R$ 25,00 💸\n vir de ônibus 🚍 : R$ 4,00 💸\n vir de zap 📲 : R$ 0,00 💰\n vem de zap 😏😂😂😅👌🔝🙈",
              "PARADA AI ✋🏻✋🏻💣🆘🛑🚫\n AKI QUEM FALA É 😏🙈 O zAP BoiS 😢😂😏🍃\n PASSA O ZAp se VC VeM de Zo P 😅😂\n  n AdianTA MENTIR EM 😊\n jesus ta CONITGO#DeusehTOP 🔝👌",
              "⭐⭐ATENÇÃO ⭐⭐\n VIN DIESEL CRIOU ⌨ UMA NOVA EMPRESA 🔥🔥🚨🚨🚨\n A VIN DIEZAP ✈✈✈\n VEM 😘😘 DE ZAP BB 📲📲",
              "‼ATENÇÃO‼\n 👉PESQUISAS INDICAM👈\n NEM VINHO TINTO🍾😏\n NEM VINHO BRANCO🍾😌\n O MELHOR É VIN DE ZAP 😜😜 👌👌👌\n VEM DE ZAP 😂😂😂😂",
              "Aliexpress? 🇨🇳🇨🇳 vem de avião✈✈\n Sedex?📦📦 vem de van 🚐\n Pizza?🍕🍕 vem de moto 🚷🏍\n E vc meu bb? 😉😉 VEM DE ZAP 😜😘👌👌",
              "ache o bombom: 🍫🍭🍿🍩🍪🎂🍦🍭🍨🍭🍕🌭🍟🍳🎂🍭🍫🍿🍩🍪🍨🍩🍿🍭🎂\n🍫🍭🍿🍩🍪🎂🍦🍭🍨🍭🍕🌭🍟🍳🎂🍭🍫🍿🍩🍪🍨🍩🍿🍭🎂\n  nao achou ne?\n eh pq o bombom está lendo isso agora 🙈🙈👌\n vem de zap 😜😛😛",
              "Se tu 👉🏻👉🏻👉🏻 vens 🙏🏻🙏🏻 \n por exemplo, às quatro da tarde ⏰ \n desde as três ⏱⏱⏱ \n eu começarei a ser feliz 😻😻😁😁😍 \n então vem de zap 🙈🙈😇🤴🏻",
              "futebol ⁉ ⚽⚽ \n meu time perdeu 🤔🤔 não quero mais 🤐 🤐 pra mim \n 👉os onze que importam👈 são os 11 números do ❤seu❤ zap 📱😂 \n  vem de zap 👌 💯" , 
              "- E aí, gata, você viu os missil?\n - Que missil?\n - I miss you... VEM DE ZAP 😍😍😍😂👌🙏🔝",
              "📰📰📰 Extra! Extra! 📰📰📰\n Alienígenas estão invadindo a terra!! 👽👽👽🤖\n E sabe como eles 👽 vem? 🤔🤔🤔\n Vem de ZAP ♣ ZAP ♣ ZAP ♣🚀👽🚀👽🚀\n VENHA TBM 😂😂😂👌",
              "❗ ATENÇÃO ❗\n FOI 📢 ANUNCIADA UMA ⏩⏩ SEQUÊNCIA DO 🎬🎬🎬 FILME V DE 😈😭😱 VINGANÇA !\n O FILME 🎥🎥 CHAMA V DE...😱😱\n VEM DE ZAP BB😉😂😍😍😘",
              "Tem gente 💁💁‍♂ que vende💰carro 🚙🚗\n Tem gente 🙋🙋‍♂que vende 💰roupas 👗👕👚\n e Tem gente 🙅‍♂🙆que vende animais 🐶🐱🐂🐩 \n E vc?? 🙀 Vem de zap 😂😂😝🔝👆👌",
              "👇👇👇👇👇👇\n Oq vem de baixo ⬇ não me atinge 💥\n 🔴🔴🔴🔴🔴🔴🔴\n Mas oq vem de zap 😻 me conquista 😂\n Vem de zap 👌📲🔝",
              "Quando você quer diminuir um arquivo, você vai de .zip 🖥📀💾📂\n Quando você quiser diminuir a distância entre eu e você, você vem de .ZAP 😂😂😍👌" ]

	let frase = frases[Math.floor(Math.random()*frases.length)]
	let msg = $("#message").text(frase)
	msg.html(msg.html().replace(/\n/g,'<br/>'));
}

function openWpp(){
	window.location = ('https://api.whatsapp.com/send?text=' + encodeURIComponent($('#url').text()))

}
function redirectHome(){
	window.location = ('http://vem-de-zap.herokuapp.com/')
}

function msgWpp(){
	let num =  $('#numZap').text()
	num = "55" + num.replace(/-/g, "").replace(/\s/g, "").replace(/\(|\)/g, "")
	let msg = encodeURIComponent('Oi sumidoooh!!!11 Kkkk Bora fechar? rs Vem de ZAP')

	window.location = ('https://api.whatsapp.com/send?phone=' + num + '&text=' + msg)
}

genMessage()