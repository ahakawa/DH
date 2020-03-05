const express = require('express');
const rotasProdutos = require('./rotas/rotasProdutos');

let app = express();

console.log(app);
 
app.get('/', (req, res) => res.send("Olá, mundo!"));  //mostra string
app.get('/contatos', (req, res) => res.send(["Contato1", "Contato2"])); //mostra array
app.get('/contatos2', (req, res) => res.send({nome: "Joao", idade: 22})); //mostra objeto
// //app.get('/produtos/:id?', (req, res) =>{   //colocando o ? depois do id seta o parametro como opcional
//     // let id = req.params.id
//     let {id} = req.params;
//     // console.log("Eu tenho um produto com o id: ", id) // vai aparecer na console do terminal
//     res.send("Eu tenho um produto com o id: " + id) // pra aparecer no browser tem que concatenar e usar o res.send
// })


app.use('/produtos', rotasProdutos);

//Criar primeiro servidor Express
app.listen(3000, () => console.log("Servidor rodando na porta 3000"))


let series = ["joao", "moises", "pedro", "gustavo"]

for(let pessoa of series)
console.log(pessoa)