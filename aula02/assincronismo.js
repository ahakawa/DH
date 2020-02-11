function alarme1(){
    return "Hora de acordar já são 08hs!";
}

function alarme2(){
    return "Está perto da sua hora de acordar são 7h50";
}
setTimeout(function(){
    console.log(alarme1())
}, 2000)

    console.log(alarme2());