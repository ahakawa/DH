// // Tipos de variavel
// const COISASQUENAOMUDAM = true;
// // const COISASQUENAOMUDAM = false;
// // console.log(COISASQUENAOMUDAM);

// var contaBancaria = 1000;

//EXERCICIO:
//Escrever uma funcao de retorne o preço de um celular, com a comissao do vendedor(a);
//E que te faça comprar celulares enquanto vc tiver dinheiro no banco;(loops)
//E que vc compre acessorios(capinha), se nao passar o limite que vc quer gastar;(condicional)
//Depois de calcular o preço da compra(celuar+capinha) adiciona a comissao para o preço final.
//Checar se o preço final bate cabe no orçamento.
//Vc deve declarar constantes para a comissao do vendedor(a); preço do celular e preço da capinha
//usar uma variavel para o saldo bancario;
//definir uma função para calcuar o preço com a comissão; e formatar o valor com R$/$ -> R$100,00;
//arredondar duas casas decimais -> variavel.toFixed(2);
// let phi = 3.1412312412512512512;
// console.log(phi.toFixed(2));


/* Resolucao Pedro
let valor = 4.580;

function converterParaReal(valorComPonto){
    return valorComPonto.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
};

console.log(converterParaReal(valor));

*/

//Resolucao Gabriel
const comissao_vendedor = 0.10;
const preco_celular = 99.99;
const preco_capinha = 9.99;
const maximo_gastar = 137.88;

var saldoBanco = 505.55;
var totalCompra = 0;



function calcularComissao(totalCompra){
    return totalCompra * comissao_vendedor;
}

function formatarPreco(totalCompra){
    return "R$ " + totalCompra.toFixed(2);
}

//continuar comprando celular enquanto tive dinheiro!!!
while(totalCompra < saldoBanco){
    //comprar um novo celular e capinha
    totalCompra = totalCompra + preco_celular + preco_capinha;
}

//não se esqueça do vendedor
totalCompra = totalCompra + calcularComissao(totalCompra);

console.log("Sua compra: " + formatarPreco(totalCompra));
//Sua compra: R$ totalCompra;

if(totalCompra > saldoBanco){
    console.log("Você não pode pagar por esses produtos :(");
}

