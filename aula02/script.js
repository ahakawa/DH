let nome = "Sérgio Moura Brunetti";
console.log(nome.indexOf("Moura"));

// Função que retorna true se acha agulha
// em palheiro, false caso contrário
function contem(agulha,palheiro){
return palheiro.indexOf(agulha) >= 0;
}

// Escrevendo como arrow function
// let contem = (agulha,palheiro) => {
// return palheiro.indexOf(agulha) >= 0;
// }

// Requisitando o objeto fs (fyleSystem)
// IGNORAR A LINHA ABAIXO POR ENQUANTO
let fs = require("fs");

// Lendo o arquivo pets.json e armazenando em strinJson
// biblioteca fs permitie ler e manipular arquivos!
let stringJson = fs.readFileSync("pets.json", "utf-8");

// Transformar a string JSON em OBJETO LITERAL!
let cachorros = JSON.parse(stringJson);

// função que retorna apenas o cachorros que tenham determinado trecho no nome!
const buscaCachorrosPorNome = (trecho) => {
let resultado = cachorros.filter(
// a array .filter recebe uma função como parâmetro!
// essa função recebe um parâmetro para sinalizar cada elemento do array
// (no caso o (cachorro) para cada cachorro da array cachorros[])
// A função pergunta se tem o trecho dentro do nome do cachorro
// aplica a função para cada elemento do array e retorna true ou false
// os que retornam true são armazenados no array
(cachorro) => {
return contem(trecho, cachorro.nome);
}
);
return resultado;
};

console.log(buscaCachorrosPorNome("At"));