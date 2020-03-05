console.log("Olá!");

// import moduloTest from './moduloTest'; importa o moduloTeste na nova versao do javascript

const http = require('http'); //importar o módulo http(nativo do node)

const moduloTeste = require('./moduloTest')

// moduloTeste.ola() //importa o moduloTeste

const server = http.createServer(function(req, res) {      //criar o servidor
    //console.log("Estou dentro do servidor!")
    //console.log(req);  //mostra o conteudo da requisicao qdo iniciar o servidor

    if(req.url == "/contato"){ //acessar a rota /contatos
        return res.end("Você está na pagina contato");
    }

    res.end("Parabéns você acessou o servidor!");

})   
//localhost = 127.0.0.1
server.listen(3030, 'localhost', function(){       //coloca uma funçao pra ser executada qdo o servidor inicia
    console.log("Servidor iniciou com sucesso!")  //esta seria a forma mais correta
});

