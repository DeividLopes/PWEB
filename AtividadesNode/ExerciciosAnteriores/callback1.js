const promp = require("prompt-sync")();
function saudacao(nome) {
  console.log("Olá " + nome);
}

function entradaNome(callback) {
  var nome = promp("Digite seu nome:");
  callback(nome);
}

entradaNome(saudacao);
