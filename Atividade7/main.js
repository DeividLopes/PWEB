function defineVencedor(opcaoDoUsuario, opcaoDoComputador) {
  if (opcaoDoUsuario == opcaoDoComputador) {
    vencedor = "Empate";
  } else if (opcaoDoUsuario == "pedra" && opcaoDoComputador == "papel") {
    vencedor = "Computador";
  } else if (opcaoDoUsuario == "pedra" && opcaoDoComputador == "tesoura") {
    vencedor = "Usuario";
  } else if (opcaoDoUsuario == "papel" && opcaoDoComputador == "pedra") {
    vencedor = "Usuário";
  } else if (opcaoDoUsuario == "papel" && opcaoDoComputador == "tesoura") {
    vencedor = "Computador";
  } else if (opcaoDoUsuario == "tesoura" && opcaoDoComputador == "pedra") {
    vencedor = "Computador";
  } else if (opcaoDoUsuario == "tesoura" && opcaoDoComputador == "papel") {
    vencedor = "Usuário";
  }
  if (vencedor == "Empate") {
    alert("Houve um empate, ambos escolheram " + opcaoDoUsuario);
  } else {
    alert(
      "O usuário escoheu " +
        opcaoDoUsuario +
        "\n" +
        "O computador escoleu " +
        opcaoDoComputador +
        "\n" +
        "Então o vencedor foi " +
        vencedor
    );
  }
}
function jogar() {
  var opcaoDoUsuario;
  var opcaoDoComputador;

  if (document.getElementById("pedra").checked) {
    opcaoDoUsuario = "pedra";
  } else if (document.getElementById("papel").checked) {
    opcaoDoUsuario = "papel";
  } else {
    opcaoDoUsuario = "tesoura";
  }

  opcaoDoComputador = Math.floor(Math.random() * 3);
  if (opcaoDoComputador == 0) {
    opcaoDoComputador = "pedra";
  } else if (opcaoDoComputador == 1) {
    opcaoDoComputador = "papel";
  } else {
    opcaoDoComputador = "tesoura";
  }

  defineVencedor(opcaoDoUsuario, opcaoDoComputador);
}
