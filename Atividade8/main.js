function pesquisa() {
  var numeroPessoas = 2,
    maisVelha = 0,
    somaIdades = 0,
    maisNova = 10000,
    quantidadePessimo = 0,
    somaBomOtimo = 0,
    quantidadeHomens = 0,
    quantidadeMulheres = 0,
    mediaIdades = 0;

  for (var index = 0; index < numeroPessoas; index++) {
    var idade = parseInt(
      prompt(
        "Olá você é a pessoa numero " +
          parseInt(index + 1) +
          " a ser intrevistada, por favor infome sua idade"
      )
    );
    var sexo = prompt(
      "Intevistado " +
        parseInt(index + 1) +
        ", qual é o seu sexo? Digite M para masculuno e F para feminino"
    );
    var opiniao = prompt(
      "Intevistado " +
        parseInt(index + 1) +
        ", qual é a sua opinao sobre o filme?" +
        "\n" +
        "1 - Péssimo" +
        "\n" +
        "2 - Regular" +
        "\n" +
        "3 - Bom" +
        "\n" +
        "4 - Ótimo"
    );
    somaIdades = somaIdades + idade;

    if (idade > maisVelha) {
      maisVelha = idade;
    }

    if (idade < maisNova) {
      maisNova = idade;
    }

    if (opiniao == 1) {
      quantidadePessimo = quantidadePessimo + 1;
    }

    if (opiniao == 3 || opiniao == 4) {
      somaBomOtimo = somaBomOtimo + 1;
    }

    if (sexo == "M" || sexo == "m") {
      quantidadeHomens = quantidadeHomens + 1;
    } else {
      quantidadeMulheres = quantidadeMulheres + 1;
    }
  }
  mediaIdades = somaIdades / numeroPessoas;
  console.log(somaIdades);
  console.log(numeroPessoas);
  alert(
    "Os resultados da pesquisa foram os seguintes" +
      "\n" +
      "A média da idade das pessoas que responderam ao questionário é: " +
      mediaIdades +
      "\n" +
      "A idade da pessoa mais velha é: " +
      maisVelha +
      "\n" +
      "A idade da pessoa mais nova é: " +
      maisNova +
      "\n" +
      "A quantidadede pessoas que responderam péssimo foi: " +
      quantidadePessimo +
      "\n" +
      "A porcentagem de pessoas que responderam ótimo e bom foi de: " +
      (somaBomOtimo / numeroPessoas) * 100 +
      "%" +
      "\n" +
      "O numero de homens que responderam foi de: " +
      quantidadeHomens +
      "\n" +
      "O número de mulherese homensque responderam ao questionário foi de: " +
      quantidadeMulheres
  );
}
