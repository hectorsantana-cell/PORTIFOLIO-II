function maior() {
  let numero1 = Number(prompt("Digite o primeiro número:"));
  let numero2 = Number(prompt("Digite o segundo número:"));

  if (Number.isNaN(numero1) || Number.isNaN(numero2)) {
    alert("Por favor, digite dois números válidos.");
    return;
  }

  if (numero1 > numero2) {
    alert("O número " + numero1 + " é maior que o número " + numero2 + ".");
  } else if (numero2 > numero1) {
    alert("O número " + numero2 + " é maior que o número " + numero1 + ".");
  } else {
    alert("Os números " + numero1 + " e " + numero2 + " são iguais.");
  }
}
