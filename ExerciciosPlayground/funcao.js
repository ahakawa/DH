

function somar(a, b){

    let numero = 32;
    
    console.log("Estou somando...")
    console.log(numero);
    return a + b;
}


let resultadoSoma = somar(1, 2);
console.log(resultadoSoma);

const multiplicar = function(a, b){
    let numero = 65;
    console.log("Estou multiplicando...");
    console.log(numero);
    return a * b;
    
}

let resultadoMultiplicar = multiplicar(2, 10);
console.log(resultadoMultiplicar);


function ola(){
    let s = "Oiêê";
    return s;
}
console.log(ola());


var exemplo = function(){
    console.log("Oi, eu sou uma função expressa");
}
exemplo();



// function anterior(num){
//     return num - 1;
// }

// function triplo(number){
//     return number * 3;
// }

// function anteriorDoTriplo(x){
//     return triplo - anterior;
// }

// console.log(anterior(2));
// console.log(triplo(3));
// console.log(anteriorDoTriplo(9));



var anterior = function(num){
    return num - 1;
}

var triplo = function(number){
    return number * 3;
}

var anteriorDoTriplo = function(x){
    return (triplo() - anterior());
}

console.log(anterior(2));
console.log(triplo(3));
console.log(anteriorDoTriplo());
