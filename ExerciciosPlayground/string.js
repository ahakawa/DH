//length

//console.log("Oi eu sou o vinicius".length);

let texto = "Oi eu sou o vinicius"
console.log(texto.length);

//indexOf
console.log(texto.indexOf("joao"))

//slice
let palavra = texto.slice(0,3);
console.log(palavra);
console.log(texto);

//trim
console.log(texto.trim());

//split
console.log(texto.split()); //transforma em uma unica string
console.log(texto.split(" ")); //separa as palavras do texto cada uma em um indice no array
console.log(texto.split("v")); //retira a letra 'v' e usa o 'v' como delimitador

//replace
console.log(texto.replace("vinicius", "João"));

let textoNovo = texto.replace('vinicius', 'joão'); //guardando a saída em uma variável
console.log(textoNovo);

