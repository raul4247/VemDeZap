<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Vem de Zap!</title>
	<link rel="shortcut icon" href="imgs/icone.ico"/>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css">
	<link rel="stylesheet" href="css/style_message.css">
	<link rel="stylesheet" href="css/main.css">
	<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-118709061-1"></script>
	<script>
		window.dataLayer = window.dataLayer || []
		function gtag(){dataLayer.push(arguments)}
		gtag('js', new Date())
		gtag('config', 'UA-118709061-1')
	</script>
	<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
	<script>
		(adsbygoogle = window.adsbygoogle || []).push({
			google_ad_client: "ca-pub-1428180233373780",
			enable_page_level_ads: true
		});
	</script>
</head>
<body>
	<?php require("components/header.php"); ?>
	<div class="container cards">
		<div id="mainCard">
			<p id="numZap"><?php echo $_GET["num"]; ?></p>
		</div>
		<div id="textCard">
			<p id="message"></p>
		</div>
		<div class="is-hidden-mobile" id="linkCard">
			<p>Envie para o crush: <a id="url"><?php echo "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]"; ?></a></p>
		</div>

		<div id="btnZap">
			<button class="button is-primary" onclick="msgWpp()">Chamar no zep zoplerson!</button>
		</div>

		<div id="btnZap">
			<button class="button is-primary" onclick="redirectHome()">Vem de Zap com o seu número!</button>
		</div>

		<div class="is-hidden-tablet" id="btnZap">
			<button class="button is-primary" onclick="openWpp()">Compatilhe este número no zip zop</button>
		</div>
	</div>
	<?php require("components/footer.php"); ?>
</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js"></script>            
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script defer src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>
<script type="text/javascript" src="js/message.js"></script>
</html>