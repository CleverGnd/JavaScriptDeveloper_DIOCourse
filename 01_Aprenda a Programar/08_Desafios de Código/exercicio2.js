
/* 2) Faça um programa que receba N (quantidade de números) e seus respectivos valores.
Imprima o maior número par e o menor número impar.

    Exemplo:
        Entrada:
            5
            3
            4
            1
            10
            8

        Saída:
            Maior número par: 10
            Menor número impar: 1 */

const { gets, print } = require('./funcoes-auxiliares-ex2');

// Usa o gets para let uma entrada de dados, que é armazenada na variável "quantidade":
// Esse gets é a primeira entrada de dados, que indica quantos números serão lidos:
const quantidade = gets();

// Declaração de variáveis:
let maiorPar = -Infinity;
let menorImpar = Infinity;

// Usa o gets para let uma entrada de dados, que é armazenada na variável "valor":
for (let i = 0; i < quantidade; i++) {
    // A segunda chamada do gets() é necessária para ler os valores de entrada
    const valor = gets();

    // Realiza a comparação e imprime o resultado:
    if (valor % 2 === 0 && valor > maiorPar) {
        maiorPar = valor;
    } else if (valor % 2 && valor < menorImpar) {
        menorImpar = valor;
    }
}

// Imprime o resultado:
print(`Maior número par: ${maiorPar}`);
print(`Menor número impar: ${menorImpar}`);
