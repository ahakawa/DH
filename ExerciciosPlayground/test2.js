// const empresa = {
//     nome: 'empresaDeTudo',
//     cor: 'Azul',
//     foco: 'programação',
//     endereco: {
//         rua: 'Rua Gilberto Gil',
//         numero: 20
//     }
// }

// console.log(`${empresa.endereco.numero}`);

// console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`);



// const programador = {
//     nome: "vitor",
//     idade: 19,
//     tecnologias: [ 
//         { nome: "React", especialidade: "Web" },
//         { nome: "C++", especialidade: "Desktop" }, 
//         { nome: "Javascript", especialidade: "Web/Mobile"}
//     ],
//     nome: "vagner",
//     idade: 31,
//     tecnologias: [
//         { nome: "Python", especialidade: "Data Science" },
//         { nome: "Swift", especialidade: "Mobile" }
//     ],
//     nome: "Silvia",
//     idade: 36,
//     tecnologias: [
//         { nome: "Javascript", especialidade: "Web/Mobile"},
//         { nome: "React", especialidade: "Web"}
//     ]
// };
// console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`);



const alunosDaEscola=[
    {nome:"Henrique",notas:[],cursos:[],faltas:5},
    {nome:"Edson",notas:[],cursos:[],faltas:2},
    {nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},
    {nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},{nome:"Carlos",notas:[],cursos:[],faltas:0},
    {nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];

//     let alunoBuscado = alunosDaEscola[alunosDaEscola.indexOf(alunosDaEscola.nome)]
//     console.log(alunoBuscado)


// function buscarAluno(nome){
//     /* Por meio dessa função, podemos pesquisar um aluno por nome na lista de aluno. Ela deverá exibir um feedback, tanto para quando encontrar o aluno, tanto quando não encontrar. E deverá devolver um aluno em seu retorno. */
//     const resultadoBusca = alunosDaEscola.find((aluno, index, array) => aluno.nome == nome );
    
//     if(resultadoBusca){
//         console.log(`Aluno ${nome} encontrado!`);
//     }
//     else{
//         return console.log(`Aluno não encontrado!`);
//     }


//  }

 //buscarAluno();

 /* //////////////////////////////////////////////////////////////////////// */
 

 function matricularAluno(aluno, curso){
    /* Essa funcionalidade irá permitir, cadastrar um aluno em um curso. 
    Essa função só poderá ser executada em um aluno já devidamente cadastrado no sistema, e deverá armazenar a data atual no momento da matricula
    Lembre-se de exibir o feedback para o usuário. */

    
        
    const resultadoBusca = alunosDaEscola.find((nome, index, array) => nome.nome == aluno );
    //console.log(resultadoBusca)
    
    if(resultadoBusca){
    const data = new Date();
    const matricular = resultadoBusca['cursos']
    matricular.push(curso, data.toLocaleDateString())
    console.log(alunosDaEscola)
    }
    else{
        console.log(`Aluno não encontrado!`)
    }
    return `Aluno ${aluno} matriculado com sucesso!`

  }

  matricularAluno("Henrique", "cozinhar");
