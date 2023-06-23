/* 1) Faça um programa que receba a média de um aluno.
Caso a média seja < 5 imprima "Reprovado"
Caso a média seja >= 5 e < 7 imprima "Recuperação"
Caso a média seja >= 7 imprima "Aprovado"

    Exemplo:
        Entrada:
            5.5
        Saída:
            Recuperação */

// Resolução:   
const { gets, print } = require('./funcoes-auxiliares-ex1');

// Usa o gets para let uma entrada de dados, que é armazenada na variável "media":
const media = gets();

// Realiza a comparação e imprime o resultado:
if (media >= 0 && media < 5) {
    print('Reprovado');
} else if (media >= 5 && media < 7) {
    print('Recuperação');
} else if (media >= 7 && media <= 10) {
    print('Aprovado');
} else {
    print('Valor inválido');
}
