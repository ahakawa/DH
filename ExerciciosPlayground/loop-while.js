// let contador = 0;

// while(contador < 10){
//     console.log("Estou dentro de um while");
//     contador++;
//}

// let contador = 0;

// do{
//     console.log("Estou dentro de um while");
//     contador++;
// }while(contador > 10);



// function count(inicio, fim) {
//     while(inicio<fim){
//         console.log(`O número atual é ${inicio} e é menor que ${fim}`);
//         inicio++;
//     }
// }
// count(6, 9);

function tabelaDeMultiplicacao(numero) {
    let i = 1;
    let resultado = 0;
    while(i<=10){
        resultado = numero * i;
        console.log(numero + '*' + i + '=' + resultado);
        i++;
    }
}
tabelaDeMultiplicacao(3);
