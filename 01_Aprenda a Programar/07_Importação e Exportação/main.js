// Importa as funções gets e print do arquivo funcoes-auxiliares.js
const { gets, print } = require('./funcoes-auxiliares');

// Recebe a quantidade de alunos informada pelo usuário
const quantidadeDeAlunos = gets();

// Inicializa a variável que irá armazenar o maior valor encontrado
let maiorValorEncontrado = 0;

// Loop que irá percorrer a quantidade de alunos informada e irá comparar o valor informado com o maior valor encontrado
for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado;
    }
}

// Imprime o maior valor encontrado
print(maiorValorEncontrado);
