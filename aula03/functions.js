let pets = require("./pets.json");

const darBanho = pet => {
  // Adiciona a string "banho" ao pet.servicos
  pet.servicos.push({ servicos: "banho", data: new Date() });

  // Imprime uma notificação: Dando banho em Ataúlfo
  console.log(`Dando banho em ${pet.nome}`);

  // retorna o pet
  return pet;
};


const darVacina = pet => {
    // Testa se o pet já foi vacinado:
    if(!pet.vacinado){
    // Caso não:
    // Adiciona a string "vacina" ao pet.servicos
    pet.servicos.push({servicos: "vacina", data: new Date()});

    // Alterar pet.vacinado para true
    pet.vacinado = true;

    // Imprime uma notificação: Vacinando em Ataúlfo
    console.log(`Vacinando em ${pet.nome}`);
    }
    // Caso sim:
    // Imprimir msg de erro:
    else{
        console.log(`ERRO: ${pet.nome} já está vacinado!`);
    }
    // retorna o pet
    return pet;
};

const tosar = pet =>{    

 // Adiciona a string "tosar" ao pet.servicos
 pet.servicos.push({servicos: "tosa", data: new Date()});

  // Imprime uma notificação: Dando banho em Ataúlfo
  console.log(`Tosando em ${pet.nome}`);

  // retorna o pet
  return pet;
};

const consulta = pet =>{
// Adiciona a string "banho" ao pet.servicos
pet.servicos.push({servicos: "consulta", data: new Date()});
// Imprime uma notificação: Dando banho em Ataúlfo
console.log(`Pet ${pet.nome} em consulta`);
// retorna o pet
return pet;
};

const mostrarServicos = pet =>{
// Percorrendo o array de serviços
for(let servico of pet.servicos){
    if(servico.data){
        console.log(`${servico.nome}: ${servico.data.toLocaleDateString()} `);
    }else{
        console.log(`${servico}: DATA INDEFINIDA`);
    }
}
};

// serv é uma função que realiza um servico
// sobre o pet (ex.: tosa, vacina, etc).

const aplicarServicos = (pet, ...servicos) => {
    for(const serv of servicos){
        pet = serv(pet)
    }
    return pet;
};

let mimi = pets[0];
darBanho(mimi);
darVacina(mimi);
tosar(mimi);
consulta(mimi);
mostrarServicos(mimi);
aplicarServicos(mimi, tosar, darVacina, darBanho, consulta);