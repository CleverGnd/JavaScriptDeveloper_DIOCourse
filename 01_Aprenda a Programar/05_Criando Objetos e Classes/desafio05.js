// Desafio - 05: Criando Objetos e Classes

/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.

2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC; */

// Resolução do exercício 1

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGasto(distancia, precoCombustivel) {
        return (distancia * this.gastoMedioPorKm) * precoCombustivel;
    }
}

const uno = new Carro('Fiat', 'Preto', 1/12);
const fiesta = new Carro('Ford', 'Branco', 2/15);

console.log(uno);
console.log(uno.calcularGasto(100, 5).toFixed(2));
console.log(fiesta);
console.log(fiesta.calcularGasto(100, 5).toFixed(2));

// Resolução do exercício 2

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / (this.altura * this.altura);
    }
}

const jose = new Pessoa('José', 100, 1.75);
const maria = new Pessoa('Maria', 60, 1.65);

console.log(jose);
console.log(jose.calcularImc().toFixed(2));

console.log(maria);
console.log(maria.calcularImc().toFixed(2));
