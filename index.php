<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Vem de Zap!</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css">
  <link rel="stylesheet" href="css/style_index.css">
  <script defer src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>
</head>
<body>

  <section id="header" class="hero is-meddium is-dark is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Vem de Zap
        </h1>
        <h2 class="subtitle">
          Ajudando a conseguir o zap da cremosa desde 2018.
        </h2>
      </div>
    </div>
  </section>
  <div class="container">
    <div id="cardForm" class="content">
      <div class="card">
        <div class="card-content">
          <h2>Insira seu número:</h2>
          <form name="form" action="message.php" method="get">

            <div class="field">
              <div class="control">
                <input class="input"type="tel" name="num" maxlength="15" placeholder="(xx) xxxxx - xxxx">
              </div>
            </div>
            <a class="button is-dark" type="button" onclick="validate()" value="Gerar">Gerar</a>
          </form>
        </div>
      </div>
    </div>
  </div>

<footer class="footer">
  <div class="container">
    <div class="content has-text-centered">
      <p>Chama os criadores no zap:</p>
      <p>Raul Mansur</p>
      <p>Lucas Campregher</p>
    </div>
  </div>
</footer>
</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js"></script>            
<script type="text/javascript" src="js/materialize.min.js"></script>
<script type="text/javascript" src="js/use.js"></script>
</html>