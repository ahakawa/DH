const somar = (a, b) => a + b;
const diff = (a, b) => a - b;

const operar = (operacao, a, b) => {
return operacao(a, b);
};

console.log(operar(somar, 4, 5));


//Exemplo com setTimeout
setTimeout(
() => {console.log("Alô, primavera!!!");},
2000
);
