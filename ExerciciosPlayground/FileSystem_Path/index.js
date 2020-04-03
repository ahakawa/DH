
// USO DO PATH

// const path = require('path');

// let usuariosArquivo = path.join("..", "data", "usuarios", "usuarios.json")

// let extensao = path.extname(usuariosArquivo)

// let diretorio = path.dirname(usuariosArquivo)
// console.log(diretorio)

// let userRose = path.join("..", "minas", "bh", "home", "rose", "rose.json")

// let extensao = path.extname(userRose)

// let diretorio = path.dirname(userRose)

// console.log(diretorio)


// *****************************

// USO DO FILE SYSTEM

const fs = require('fs');
const path = require('path');

// let caminhoArquivo = path.join("prova.txt")

// Escrever em um arquivo
// fs.writeFileSync(caminhoArquivo, "Prova Final 3!");

//Ler o conteúdo de um arquivo
// const conteudo = fs.readFileSync(caminhoArquivo, {encoding: 'utf-8'})

// console.log(conteudo)


//Configurar o nome do arquivo em uma variável
let caminhoTeste = path.join('teste.json')

//Fazer a leitura do conteúdo do arquivo json
const lerConteudoTeste = fs.readFileSync(caminhoTeste, {encoding: 'utf-8'})


//Escrever no arquivo
// const produtosTeste = [
//     {nome: "Produto A", preco: 10},
//     {nome: "Produto B", preco: 20}
// ]
// const escreverArquivoTeste = fs.writeFileSync(caminhoTeste, produtosTeste)
// console.log(JSON.parse(lerConteudoTeste))

const bcrypt = require('bcrypt')

let hash = bcrypt.hashSync("Junior, eu te amo! Ass.:Ahakawa", 10);

console.log(hash)