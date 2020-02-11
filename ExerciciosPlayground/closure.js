function saudacao(nome){

    let mensagem = "Olá, seja bem vindo(a)";

    function juntarNome(){
        return mensagem + ' ' + nome;
    }
    return juntarNome();
}

console.log(saudacao("Rose"));