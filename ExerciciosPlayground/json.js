let pessoa = {
    nome: "vinicius",
    idade: 21,
    altura: 1.80
}

let listaCompras = ["pão", "presunto", "queijo"]

let json = JSON.stringify(listaCompras);

//let objetoDeNovo = JSON.parse(json);
let arrayDeNovo = JSON.parse(json);
console.log(arrayDeNovo);
