// for(i=0; i<=4; i++){
//     console.log(i);
// }



// function papagaio(texto){
//     for(let i=0; i<5; i++){
//         console.log(texto);
//     }
// }
// papagaio("oi");


function naoPareDeContarImparesAte(numero){
    let quantidadeDeImpares = 0;
    for(let i=0; i<numero; i++){
        if(i % 2 != 0){
          quantidadeDeImpares++;
        }
    }
    console.log(quantidadeDeImpares);
}
naoPareDeContarImparesAte(5);