// Desafio - 06: Arrays e Estruturas de Repetição

//1) Crie um programa que dado um número imprima a sua tabuada.

let numero = 5;

console.log("Tabuada do " + numero);

for (let i = 1; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + numero * i);
}

//2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

let listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < listaNumeros.length; i++) {
    if (listaNumeros[i] % 2 == 0) {
        console.log(listaNumeros[i]);
    }
}

//3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

let listaNomes = ["Vitor", "Vinicius", "João", "Maria", "Viviane"];

for (let i = 0; i < listaNomes.length; i++) {
    if (listaNomes[i].startsWith("V")) {
        console.log(listaNomes[i]);
    }
}

//4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;

let listaPares = [];

for (let i = 10; i <= 50; i++) {
    if (i % 2 == 0) {
        listaPares.push(i);
    }
}

console.log(listaPares);

//5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
//   Ex de lista = [2, 7, 3, 8, 10, 4]

let listaMedias = [2, 7, 3, 8, 10, 4];

console.log("Médias de recuperação:");

for (let i = 0; i < listaMedias.length; i++) {
    if (listaMedias[i] < 7) {
        console.log(listaMedias[i]);
    }
}

//6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
//   Ex de lista de notas = [2, 7, 3, 8, 10, 4]

let listaNotas = [2, 7, 3, 8, 10, 4];

let maiorNota = 0;

for (let i = 0; i < listaNotas.length; i++) {
    if (listaNotas[i] > maiorNota) {
        maiorNota = listaNotas[i];
    }
}

console.log("Maior nota: " + maiorNota);
