let str = "Hello World"; // string definida previamente

let strInvertida = ""; // cria uma string vazia para armazenar a string invertida

// percorre a string de trás para frente e adiciona cada caractere à nova string
for (let i = str.length - 1; i >= 0; i--) {
  strInvertida += str[i];
}

console.log(strInvertida); // "dlroW olleH"
// Para executá-lo usando o Node.js a partir do terminal escreva: node exercicio5.js
