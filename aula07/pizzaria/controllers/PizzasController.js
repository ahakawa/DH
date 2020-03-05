const express = require('express');

const Pizzas = [{
    "nome": "Pepperoni",
    "ingredientes": [
        "mussarela",
        "pepperoni"
    ]
},
{
    "nome": "Maguerita",
    "ingredientes": [
        "mussarela",
        "tomate",
        "manjericão"
    ]
}
]

function listarPizzas(req, res){
    return res.send(Pizzas);
}

function mostrarPizza(req, res){
    let {id} = req.params;
    if(id<Pizzas.length){
        return res.send(Pizzas[id]);
    }
    else{
        return res.send({
            error: "Pizza não encontrada"
        });
    }
}

module.exports = { listarPizzas, mostrarPizza };