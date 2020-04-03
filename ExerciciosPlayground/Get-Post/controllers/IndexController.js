let IndexController = {
    viewContato: (req, res) => {
        let{nome, idade} = req.query
        res.render('contato',{nomeUsuario:nome});
    },
    confirmarContato: (req, res) => {
        let{nome, email} = req.query
        res.send('Recebido com sucesso as infos do user: ' +nome)
    }
}

module.exports = IndexController;