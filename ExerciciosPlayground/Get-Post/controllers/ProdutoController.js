const fs = require('fs');
const path = require('path');

const produtosJson = path.join('produtos.json')

let ProdutoController = {
    viewForm: (req, res) => { 
        return res.render('produto'); 
    },
    salvarForm: (req, res) => {
        // console.log(req.body); //pra ver a saída na console(terminal)
        let {nomeProduto, precoProduto} = req.body;

        // res.send(`Produto ${nomeProduto} foi cadastrado com sucesso!`)//pra ver a saída na tela ao clicar em enviar
        //salvar no banco
        let dadosJSON = JSON.stringify([{nome: nomeProduto, preco: precoProduto}]);
        // console.log(dadosJSON)
        fs.appendFileSync(produtosJson, dadosJSON)
     
        res.redirect('/produtos/sucesso');
    },
    sucesso: (req, res) => {
        res.render('sucesso');
    },
    viewAttForm: (req,res) => {
        let{id} = req.params;
        let produtos = [
            {id:1, nome:"Produto X", preco:10},
            {id:2, nome:"Produto A", preco:20}
        ]
        res.render('editarProduto', {produto:produtos[id]});
    },
    editar: (req, res) => {
        let { nomeProduto, precoProduto } = req.body;
        // console.log(req.body)
        res.send("Você editou o produto " + nomeProduto)
    },
    listarProdutos: (req, res) => {
        let produtos = fs.readFileSync(produtosJson, {encoding: 'utf-8'})
        produtos = JSON.parse(produtos)
    

        res.render('listaProdutos', {listaProdutos:produtos})
    },
    deletarProduto: (req, res) => {
        let {id} = req.params;

        res.send("Estou deletando o produto com o id: " + id);
    }
}

module.exports = ProdutoController;