// Aula: 06 - Arrays

// Array é uma lista de valores, que podem ser acessados por um índice.
// Exemplo de array de números, [] indica que é um array.
const notas = [];

// push adiciona um valor no final do array.
notas.push(10);
notas.push(10);
notas.push(10);

let soma = 0;

// Para percorrer um array, podemos usar o for. O for vai percorrer o array de acordo com o seu tamanho.
// O tamanho do array é acessado pela propriedade length.
for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

// Para calcular a média, basta dividir a soma pela quantidade de notas.
const media = soma / notas.length;
console.log(media);
