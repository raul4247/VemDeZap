<!DOCTYPE html>
<html>
<head>

</head>
<body>
	<h1>Vem de Zap</h1>

	<p><?php echo $_GET["num"]; ?></p>
	<p><?php echo "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]"; ?></p>

	<a href="index.php">Gerar o seu zap.</a>
</body>
</html>