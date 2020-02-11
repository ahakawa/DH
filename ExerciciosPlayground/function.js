// function aoQuadrado(numero){
//     return numero ** 2;
//     //return numero*numero
//     //return Math.pow(numero, 2)
// }

// console.log(aoQuadrado(5));


const aoQuadrado = numero => numero ** 2;

let numeros = [5, 6, 7, 8];
let quadrados = numeros.map(aoQuadrado);
let produto = numeros.reduce((acum, atual) => acum * atual);
console.log(numeros)
console.log(quadrados);
console.log(produto);

