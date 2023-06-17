
/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem. */

// Resposta:

let preco_etanol = 4.50;
let preco_gasolina = 5.50;
let tipo_combustivel = 'gasolina';
let distancia_viagem = 100;

const gasto_medio_combustivel = 10;

if (tipo_combustivel === 'etanol') {
    valor_gasto = (distancia_viagem / gasto_medio_combustivel) * preco_etanol;
}
else {
    valor_gasto = (distancia_viagem / gasto_medio_combustivel) * preco_gasolina;
}

console.log(valor_gasto.toFixed(2));
