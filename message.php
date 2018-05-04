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
	<script defer src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>
</head>
<body>
	<?php require("components/header.php"); ?>

	<div class="container cards">
		<div id="mainCard">
			<p><?php echo $_GET["num"]; ?></p>
		</div>
		<div id="textCard">
			<p id="message"></p>
		</div>
		<div id="linkCard">
			<p>Envie para o crush: <a><?php echo "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]"; ?></a></p>
		</div>
	</div>

	<?php require("components/footer.php"); ?>
</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js"></script>            
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script type="text/javascript" src="js/materialize.min.js"></script>
<script type="text/javascript" src="js/animation.js"></script>
<script type="text/javascript" src="js/random.js"></script>
</html>