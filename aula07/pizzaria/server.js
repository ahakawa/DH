const express = require("express");
const app = express();

//Importando arquivos de rotas
const pizzasRoutes = require('./routes/pizzasRoutes');

//Associando as rotas
app.use("/pizzas", pizzasRoutes);

//
app.listen(3000);