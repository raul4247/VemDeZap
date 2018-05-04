<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Vem de Zap!</title>
  <link rel="shortcut icon" href="imgs/icone.ico" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css">
  <link rel="stylesheet" href="css/style_index.css">
  <link rel="stylesheet" href="css/main.css">
  <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">

  <script defer src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>
</head>
<body>

  <?php require("components/header.php"); ?>
  
  <div class="container">
    <div id="cardForm" class="content">
      <div class="card">
        <div class="card-content">
          <h2>Insira seu número:</h2>
          <form name="form" action="message.php" method="get">

            <div class="field">
              <div class="control">
                <input class="input telInput" type="tel" name="num" placeholder="(xx) xxxxx - xxxx">
              </div>
            </div>
            <a class="button is-dark" type="button" onclick="validate()" value="Gerar">Gerar</a>
          </form>
        </div>
      </div>
    </div>
  </div>

  <?php require("components/footer.php"); ?>
</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js"></script> <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery.maskedinput/1.4.1/jquery.maskedinput.min.js"></script>          
<script type="text/javascript" src="js/materialize.min.js"></script>
<script type="text/javascript" src="js/use.js"></script>
</html>