const ContatoController = {
    index: (req, res) => {
        return res.render("contato"); //Não precisa definir que o arquivo contato está dentro da pasta views
    }
}

module.exports = ContatoController;