const pizzas = require('../database/Pizzas.json');

module.exports = {
    index: (req, res) => {
        res.render("index", {pizzas: pizzas});
    },
    show: (req, res) =>{

        // Capturando a pizza com o id passado na rota
        let pizza = pizzas.find((pizza) => { return pizza.id == req.params.id});

        // Retornando a pizza para o usuário
        if(pizza){
            res.render("pizza", {pizza});
        }else{
            res.render("erros/pizzaNaoEncontrada", {id: req.params.id});
        }
    }
    }