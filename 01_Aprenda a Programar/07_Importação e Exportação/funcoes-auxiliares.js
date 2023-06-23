// Array de entradas
const entradas = [10, 5, 50, 10, 98, 23, 33, 44, 100, 1, 7];

let i = 0;

// Função que simula a entrada de dados
function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

// Função que imprime um texto no console
function print(texto) {
    console.log(texto);
}

// Exporta as funções gets e print para serem utilizadas em outros arquivos
module.exports = { gets, print };
