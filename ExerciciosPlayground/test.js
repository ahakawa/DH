// // function menciona(palavra, texto){
// //     return texto.indexOf(palavra) >= 0;
// // }

// // console.log(menciona("oi", "oi amigo"));

// // let numero = 2;

// // function aplicar(valor, callback)
// // {
// // 	var number = valor;
// // 	callback(number);	
// // }

// // function dobro(num){
// //     return num * 2;
// // }

// // function triplo(num){
// //     return num * 3;
// // }


// // console.log(aplicar(numero, dobro));


// // function substituicaoRapida(saudacao, periodo){
// //     let texto = 'Boa noite';
// //     let textoNovo = texto.replace('noite', 'tarde');
// //     return textoNovo;
// // }

// // substituicaoRapida()


// // let estudantes = [
// //     {
// //       nome: 'Álvaro',
// //       media : 9,
// //       curso : 'Android',
// //     },
// //     {
// //       nome: 'Daniel',
// //       media : 6,
// //       curso : 'Full Stack',
// //     }
// //   ]
  
// //   estudantes.push( {nome: "Jõao", media: 5, curso: "IOS"}, {nome: "Miguel", media: 2, curso: "Android"} );
// //   console.log(estudantes);
  


// // let estudantes = [
// //     {
// //       nome: 'Alvaro',
// //       media : 9,
// //       curso : 'Android',
// //     },
// //     {
// //       nome: 'Daniel',
// //       media : 6,
// //       curso : 'Full Stack',
// //     },
// //     {
// //       nome: 'Alexis',
// //       media : 3,
// //       curso : 'iOS',
// //     }
// //   ]
// //   estudantes.unshift(
// //     {
// //       nome: "Mariana", 
// //       media: 9, 
// //       curso: "Full Stack" 
// //       }
// //       );
// //   estudantes.unshift(
// //     {
// //       nome: "Francisco", 
// //       media: 2, 
// //       curso: "Android" 
// //       }
// //       );
// //   console.log(estudantes);

// //Cálculo IMC
// // const nome = "Junior";
// // const peso = 94;
// // const altura = 1.83;
// // const sexto = 'M';
// // const imc = (peso / (altura * altura));

// // if(imc >= 30){
// //     console.log(`${nome} você está acima do peso`);
// // }
// // else{
// //     console.log(`${nome} você não está acima do peso`);
// // }

// //Cálculo de aposentadoria

// // const nome = 'Silvana';
// // const sexo = 'M';
// // const idade = 69;
// // const contribuicao = 34;
// // if(sexo == 'F'){
// //     if((contribuicao + idade) >= 85 && contribuicao >= 30){
// //     console.log(`${nome}, você pode se aposentar!`);
// //     }
// //     else{
// //         console.log(`${nome}, você ainda não pode se aposentar!`);
// //     }
// // }
// // else{
// //     if((contribuicao + idade) >= 95 && contribuicao >= 35){
// //         console.log(`${nome}, você pode se aposentar!`);
// //     }
// //     else{
// //     console.log(`${nome}, você ainda não pode se aposentar!`);
// // }
// // }

// // //Construção e impressão de objetos

// // const empresa = {
// //     nome: 'empresaDeTudo',
// //     cor: 'Azul',
// //     foco: 'programação',
// //     endereco: {
// //         rua: 'Rua Gilberto Gil',
// //         numero: 20
// //     }
// // }

// // console.log(`${empresa.endereco.numero}`);

// // console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`);

// //Vetores e objetos

// // const programador = {
// //     nome: "vitor",
// //     idade: 19,
// //     tecnologias: [ 
// //         { nome: "React", especialidade: "Web" },
// //         { nome: "C++", especialidade: "Desktop" }, 
// //         { nome: "Javascript", especialidade: "Web/Mobile"}
// //     ],
// //     nome: "vagner",
// //     idade: 31,
// //     tecnologias: [
// //         { nome: "Python", especialidade: "Data Science" },
// //         { nome: "Swift", especialidade: "Mobile" }
// //     ],
// //     // nome: "Silvia",
// //     // idade: 36,
// //     // tecnologias: [
// //     //     { nome: "Javascript", especialidade: "Web/Mobile"},
// //     //     { nome: "React", especialidade: "Web"}
// //     // ]
// // };
// // console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`);

// // setTimeout(function(){
// //     console.log('I am an asynchronous message');
// // },1000);
// // console.log('I am a synchronous message');

// // setTimeout(function(){
// //     console.log('I am an asynchronous message');
// // }, 1000); 

// // console.log('Test 1');

// // for(let i=0; i<10000;++i){
// //     doSomeStuff();
// // }

// // console.log(doSomeStuff, 'Test 2');

// // function doSomeStuff() {
// //     return 1 + 1;
// // }


// let cachorros = [
//     {
//       nome: "Nick",
//       raca: "SRD",
//       peso: 15,
//       idade: 3,
//       cor: "Beje",
//       porte: "Médio",
//       sexo: "m",
//       dono: "Bianca S .Pugliesi",
//       alergias: ["Pulgas"],
//       castrado: true,
//       vacinas: [
//         { nome: "Antirrábica", data: "10/11/2015" },
//         { nome: "BC500", data: "10/12/2015" }
//       ]
//     },
//     {
//       nome: "Vintém",
//       raca: "SRD",
//       peso: 13,
//       idade: 10,
//       cor: "Dourado",
//       porte: "Médio",
//       sexo: "m",
//       dono: "Sérgio Moura",
//       alergias: [],
//       castrado: false,
//       vacinas: [{ nome: "Antirrábica", data: "12/01/2014" }]
//     },
//     {
//       nome: "Loba",
//       raca: "Husky Siberiano",
//       peso: 30,
//       idade: 7,
//       cor: "Branco",
//       porte: "Grande",
//       sexo: "f",
//       dono: "Dono da loba",
//       alergias: [],
//       castrado: false,
//       vacinas: []
//     }];
//     let dadosNovos=JSON.stringify(cachorros)
//     console.log(dadosNovos)

// const contem = (agulha,palheiro) => palheiro.indexOf(agulha) >= 0;
 
//     contem("oi","oi ok")
//    // console.log("Array de Buscando Cachorros por nome")
 
//  const buscaPorNome = (letras) => {
//     let trueorfalse = cachorros.filter(
//         (cachorro)=>{
           
//          return contem(letras,cachorro.nome)
// });
// return trueorfalse;
// }
// console.log(buscaPorNome("ob"))



// function informeCastrado(posicao) {
// let cachorro = cachorros[posicao];
//   console.log("Nome:"+  cachorro.nome);

//   console.log("Castrado:" + (cachorro.castrado ? 'Sim' : 'Não'))
// }

// informeCastrado(2)

// const buscaCastrados = () => {
//     let filtrados = cachorros.filter(
//         (cachorro) => {return cachorro.castrado;}
//     )
// return filtrados;
// }
// console.log(buscaCastrados())

// let pets = require('./pets.json')
// console.log(pets)


// const darBanho = (pet) => {
//     //adiciona dar banho ao pet.servicos
//     pet.servicos.push({nome: "banho", data: new Date() })
//     // imrpime: dando banho em Ataúlfo
//     console.log("Dando banho em " + pet.nome)

//     //dando banho em ${pet.nome}
// //retorna pet
//     return pet
// }
// console.log(darBanho(pets[1]))

// const darVacinas = pet => {
//     // testa se pet ja foi vacinado
//     if (pet.vacinado){
//            console.log( `${pet.nome} já foi vacinado`)
//     }
//     else {
//         pet.servicos.push({nome: "vacina", data: new Date() })
//         pet.vacinado = true
//         console.log(`${pet.nome} está sendo vacinado`)
//         return pet
//     }
//     }
//     console.log(darVacinas(pets[2]))
    
//     const tosar = pet => {
//         pet.servicos.push({nome:"tosar", data: new Date() })
//         console.log(`${pet.nome} está sendo tosado`   )
//         return pet
//     }

//     console.log(tosar(pets[2]))

//     const consulta = pet => {
        
//             pet.servicos.push({nome:"consulta", data: new Date() })
//             console.log(`${pet.nome} está em consulta`   )
//             return pet
//         }
    
//         console.log(consulta(pets[2]))

//         const mostrarServicos = pet => {
//             let data = new Date();
//             //percorrendo array de serviços
//             for(let servico of pet.servicos){
//                 if(servico.data){
//                     console.log(`${servico.nome}: ${servico.data.toLocaleDateString()}`)
//                 }
//                 else {
//                     console.log(`${servico}: DATA INDEFINIDA`)
    
//                 }
//             }
    
          
//         }
    
//        console.log(mostrarServicos(pets[2]))

//        //let cao3 = pets[3]
//        //darBanho(cao3)
//         //darVacinas(cao3)
//         //mostrarServicos(cao3)
        
//         const aplicarServico = (pet, serv) => {
//    return serv(pet)
//         };
//         let cao1 = pets[0]
//     aplicarServico (cao1,tosar)
       
//     //spreado operator é denotado por '...'
   
//     let dono = {
//         nome: "Lucas Pedroso",
//         cpf: "025.232.333-09",
//         telefone:"(11)99999-9999"
//     }
//      let pet2 = {
//          nome:"Kaká",
//          idade: 7,
//          //se um dono então 
//          dono: dono
//          //se mais de um dono então donos: [dono1,dono2]
//          //se colocar ...dono por os 2 terem o campo iguais (nome) um sobreescreve o outro ...dono copia os campos de dono para o pet
//      }
//      console.log(pet2)
  

//     const aplicarServico2 = (pet,...servicos) => {
//         for(const serv of servicos) {
//             pet = serv(pet)
//         }
//         return pet;
//     }
// let cao3= pets[2]
    
//     aplicarServico2(cao3,tosar,darBanho,darVacinas)


const data = new Date();
console.log