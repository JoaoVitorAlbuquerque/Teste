const numero = 21; // número definido previamente

let a = 0;
let b = 1;
let c;

while (b < numero) {
  c = a + b;
  a = b;
  b = c;
}

if (b === numero) {
  console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${numero} não pertence à sequência de Fibonacci.`);
}
// Para testar este código com diferentes números, basta atualizar o valor da variável numero e executá-lo usando o Node.js a partir do terminal
