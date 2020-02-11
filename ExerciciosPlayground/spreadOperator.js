let frutas = ["maça", "banana", "uva"];

let frutas2 = ["laranja", "abacate", "goiaba"];

let listaCompleta = [...frutas, ...frutas2];

console.log(listaCompleta);

let pessoa = {
    nome: "vinicius",
    idade: 22
}

let infoPessoal = {
    tel: "123456789",
    rg: 112121212,
    ...pessoa
}

let pessoaCompleta = {
    endereco: "Rua dos bobos",
    ...infoPessoal
}
console.log(pessoaCompleta);

function letras(...paramns){
    console.log(paramns) //se colocar (paramns[1]), imprime b
}
letras("a", "b", "c");

function somar(...numeros){
    return numeros.reduce((pilha, num) => pilha += num);
}
somar(1,4);