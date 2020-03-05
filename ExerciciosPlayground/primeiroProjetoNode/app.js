const http = require('http');

http.createServer((req, res) => {
    //console.log("Servidor está rodando...")
    res.writeHead(200, {"Content-Type": "text/plain"})

        switch(req.url){
            case "/":
                res.end("Você está na página home!")
                break;
            case "/contato":
                res.end("Você está na página contato!")
                break;
            default:
                res.end("Você está no nosso servidor!")
                break;
        }


 }).listen(3000);