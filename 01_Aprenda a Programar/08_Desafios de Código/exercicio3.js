
/* 3) Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.
Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios.
O salário salário a ser transferido é calculado da seguinte maneira: 

    valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos benefícios

Para calcular o percentual de imposto segue as alíquotas:

    De R$ 0.00 a R$ 1100.00 = 5.00%
    De R$ 1100.01 a R$ 2500.00 = 10.00%
    Maior que R$ 2500.00 = 15.00%

    Exemplo:
        Entrada:
            2000
            250

        Saída:
            2050.00 */

const { gets, print } = require('./funcoes-auxiliares-ex3');

// Usa o gets para let uma entrada de dados, que é armazenada na variável "salarioBruto":
const salarioBruto = gets();

// Usa o gets para let uma entrada de dados, que é armazenada na variável "beneficios":
const beneficios = gets();

// Declaração de variáveis:
let salarioLiquido;
let imposto;

// Verificações e cálculos:
if (salarioBruto < 0) {
    imposto = null;
} else if (salarioBruto <= 1100) {
    imposto = salarioBruto * 0.05;
} else if (salarioBruto <= 2500) {
    imposto = salarioBruto * 0.1;
} else {
    imposto = salarioBruto * 0.15;
}

// Realiza o cálculo do salário líquido:
salarioLiquido = salarioBruto - imposto + beneficios;

// Imprime o resultado:
// Verifica se o valor de "salarioLiquido" ou "imposto" é nulo, caso seja, imprime "Dados inválidos"
if (imposto === null || beneficios < 0) {
    print("Dados inválidos");
} else {
    print(salarioLiquido.toFixed(2));
}
