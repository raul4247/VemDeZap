$(document).ready(function () {
   $('.cards').fadeIn(3000);
})
var msgAtual = ''
function genMessage(){
       let frases = [ "🚨 piuuuuu ✋🏻👮🏾 paradoh ai ✋🏻 voce taah sendu investigado 👀 na operacao Lava Zap 🚓😂\n passa p ca seu zap 😎 pra q possamos resolver issooh 😘😘🙊", 
              "⛅Previsao do tempo no Zap ⛅\n Sobre o Tempo?? Eh o q vc Ta perdendo Sem me Chama\n 👎🏽 E o Clima?? O Clima Eh de Sacanagem 😏😈😈👅\n Vem de Zap✌🔝", 
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
              "Quando você quer diminuir um arquivo, você vai de .zip 🖥📀💾📂\n Quando você quiser diminuir a distância entre eu e você, você vem de .ZAP 😂😂😍👌", 
              "🚨 ATENCAO 🚨\n 💢 O ZAPZAP SOFREU UMA QUEDA 💢\n 👆 MAS NAO TEM PROBLEMA 👆\n 😏COMBINOU COM A QUE TENHO POR VOCE😏\n 🔙QUANDO ELE VOLTAR🔙\n 😜VEM DE ZAP😜",
              "⚠⚠⚠ ATENÇÃO ⚠⚠⚠\n ESTAO ABERTAS 👌🏿👌🏿 AS INSCRIÇOES 💻💻 PRO NOVO BBB 📹🎥 O BIG BEBE BRASIL 😅😅 \n O REALITY SHOW PRA ESCOLHER MINHA NOVA PRINCESA 👻💋💍👑👑👑 \n QUER FAZER PARTE DO CASTELO MAIS 👀 VIGIADO 👀 DO BRASIL???? \n VEM DE ZAP 😂😂😂👌🏿👌🏿",
              "👏🏼⚠ATENÇÃO⚠ 👏🏼\n aprendi a contar em inglês até o 7 óia:\n 👉one, two, three, four, five, six, 🍃\n 👉esqueci um? então seven de zap? 😜😜🔝👌😂",
              "‼‼Chegou o novo shampoo p tira seu (Ex )da cabeça‼‼😉😉\n😏>\n😎'EUSERVE'😎\n Se interessou? Vem de ZAP 😆!",
              "🤔Vc tem mapa? 🗺\n 😯 Não, pq?\n 😉Pq me perdi no brilho dos seus olhos. 😍😍😍😍😘😘\n Vem de zap Bb 😘",
              "🚓Atenção viaturas🚓\n 👀Tragam o fugitivo👠 por favor\nO  bandido👩q roubou 🔫🔫meu coração♥\nNão o tragam de camburão🚔\nTraz de ZAP 😂😂😂 o meu amor😍",
              "✋⛔ Se O Jogo Tá ♦Trucado♠ ⛔✋\n💣💥E O 😱Adversário😱 Vem De ♥Copas♥💥💣\n🤔Pede🤔 🔥6⃣🔥 E 👉Vem👈 De ♣ZAP📲😂👌🔝",
              "🚨Atencao🚨Atencao🚨\n🙌 Zapboys🙌 🙅Zapgirls🙅\n É A  Ultima Chamada🚨\n  Eu Disse👉Ultima👈 Chamada Para Vir De Zap😚😚\nEntao Vem De Zap👇👇👇👋👋",
              "O QUE 👉VEM👈 \n🔽🔽DE BAIXO🔽🔽 \nNAO ME 🎯ATINGE🎯 \nMAS 👏🙈 O QUE VEM DE💚💚ZAP💚💚 \nME 💞💞💞CONQUISTA 💞💞💞💞",
              "🚨🚓🚔🚨EI VC BB PARADO!✋​\nVC GOSTA DE AÇAÍ?\nSIM, PQ?\nTÁ DISPOSTO AÇAÍ CMG?\n😏❤😊😂🙈\nVem de Zap✌🔝",
              "OLHA A GREVE GERAL 🎙❗❗\n🚫 PROIBIDO TRABALHAR\n🚫 PROIBIDO ESTUDAR\n🚫 PROIBIDO IR AO MERCADO\n✔ VIR DE ZAP TÁ LIBERADO KKK\n  VEM DE ZAP!  💘☢",
              "psiu 😉 \noi bb 👼🏽👼🏽\ngosta de bolo? 🍰🍰🍰\nentão vem cortar o do nosso casamento 😂😂😂💍💍💍\nvem viver esse sonho 👰🏽💅🏽 \nvem de zap™ 📲📲📲✅✅",
              "Pedro Álvares Cabral 🌊🚣🛳⛴descobriu o Brasil 🇧🇷🇧🇷🇧🇷\nagora falta eu 👈👈👈🤑🤑🤑 descobrir o seu ZAP 😍😍😍 \nentao vem 🤣🤣👊👊👊",
              "💭 pensamento do dia ☀ \n🍃 na vida tudo passa...\nentao passa o zap pra mim bb🍃\n😜😍",
              "🚗🚕🚙🚌essa e a rodovia pra vc vir de carro\n🚲🛴🚴‍  esta e a ciclovia pra vc vir de baik\n⏮😂📲\nessa é a ZAPVIA\npra vc vir de zap\n😘😂🤠👌🏻✌🏻",
              "Cientistas dos EUA 🇺🇸 descobriram 💡através da queima de substâncias químicas um novo tipo de chama 🔥\nA chama NO PROBLEMINHA BB 😂😛\nVEM DE ZAP ! 📲😁",
              ]

       let frase = frases[Math.floor(Math.random()*frases.length)]
       msgAtual = $("#message").text(frase)
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
       let msg = encodeURIComponent(msgAtual.html())

       window.location = ('https://api.whatsapp.com/send?phone=' + num + '&text=' + msg)
}

genMessage()