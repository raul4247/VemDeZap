<!DOCTYPE html>
<html>
<head>

</head>
<body>
  <h1>Vem de Zap</h1>


  <form name="form" action="message.php" method="get">
    Insira seu número:
    <input type="tel" name="num" maxlength="15">
    <br>
    <input type="button" onclick="validate()" value="Gerar">
  </form>

</body>
<script type="text/javascript">
  function validate(){
    let test = /\(\d{2}\)\s\d{4,5}-?\d{4}/g.test(form.num.value)

    if(test)
      form.submit()
    else{
      alert("O seu número está inválido.")
      return    
    }
  }
</script>
</html>