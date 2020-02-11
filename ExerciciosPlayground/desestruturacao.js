let pessoa = {
    nome: "Vinicius",
    altura: 1.80
}

const {nome, altura} = pessoa;
console.log(nome, altura);

let listaCompras = ["pão", "leite", "açúcar"];

const [item1, item2, item3] = listaCompras;
console.log(item2);

let cores = ['Roxo', 'Azul', 'Amarelo'];
let azul = cores[1];
console.log(azul);