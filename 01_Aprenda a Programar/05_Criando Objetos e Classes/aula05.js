// Aula: 05 - Entendendo Objetos e Classes em JavaScript

// class é uma palavra reservada do JavaScript para criar classes
// Pessoa é o nome da classe
class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    // constructor é um método especial que é executado quando a classe é instanciada
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    // descrever é um método da classe Pessoa
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);  
    }
}

// compararPessoas é uma função que recebe dois objetos do tipo Pessoa
function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

// vitor e renan são objetos do tipo Pessoa
const vitor = new Pessoa('Vitor', 25);
const renan = new Pessoa('Renan', 30);

// chamando a função compararPessoas para comparar os objetos vitor e renan
compararPessoas(vitor, renan);
