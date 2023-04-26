function Fmaior() {
  const numeros = [];

  for (let i = 0; i < 3; i++) {
    numeros.push(Number(prompt(`Digite o ${i + 1}º número:`)));
  }

  const maior = Math.max(...numeros);

  alert(`O maior número é ${maior}`);
}

function Fordenar() {
  let numeros = [];

  for (let i = 0; i < 3; i++) {
    let numero = prompt(`Digite o ${i + 1}º número:`);
    numeros.push(numero);
  }

  numeros.sort(function (a, b) {
    return a - b;
  });

  alert(numeros);
}
