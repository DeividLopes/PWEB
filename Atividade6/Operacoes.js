function operacoes() {
  var numero1 = parseFloat(document.getElementById("numero1").value);
  var numero2 = parseFloat(document.getElementById("numero2").value);

  var soma = numero1 + numero2;
  var subtracao = numero1 - numero2;
  var produto = numero1 * numero2;
  var divisao = numero1 / numero2;
  var resto = numero1 % numero2;

  alert(
    "A soma é " +
      soma +
      "\n" +
      "A subtração é " +
      subtracao +
      "\n" +
      "O produto é " +
      produto +
      "\n" +
      "A Divisão é" +
      divisao +
      "\n" +
      "O resto é" +
      resto
  );
}
