// Praticando com funções

// Função que escreve o nome da pessoa
function escrevaMeuNome(nome) {
    console.log('Olá, ' + nome + '!');
}

escrevaMeuNome('João');
escrevaMeuNome('Maria');

// Função que verifica se é maior de idade

function verificaIdade(idade) {
    if (idade >= 18) {
        console.log('Você é maior de idade!');
    } else {
        console.log('Você é menor de idade!');
    }
}

verificaIdade(18);
verificaIdade(17);

// Refazendo o desafio 02 com funções

/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    1 - À vista Débito, recebe 10% de desconto;
    2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    3 - Em duas vezes, preço normal de etiqueta sem juros;
    4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%; */

// Resposta:
let valor = 0;
let formaPagamento = 0;

function calculaDesconto(valor, formaPagamento) {
    if (formaPagamento == 1) {
        return valor * 0.9;
    }
    else if (formaPagamento == 2) {
        return valor * 0.85;
    }
    else if (formaPagamento == 3) {
        return valor;
    }
    else {
        return valor * 1.1;
    }
}

console.log("O valor final a ser pago é R$ " + calculaDesconto(100, 2).toFixed(2));
console.log("O valor final a ser pago é R$ " + calculaDesconto(100, 3).toFixed(2));