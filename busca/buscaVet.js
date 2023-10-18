const elementosVet = [
    {
        nome: "Dr. Carlos",
        logradouro: "Rua dos Animais",
        numero: "567",
        complemento: "S/N",
        bairro: "acacias",
        cep: "17365-824",
        cidade: "São Paulo",
        uf: "SP",
        telefone: "(11) 5678-1234",
        email: "carlos@email.com",
        descricao: "Veterinário especialista em animais de pequeno porte, realizo consultas gratuitas para PET's de pessoas com baixa renda mediante agendamento"
    },

    {
        nome: "Dra. Julia",
        logradouro: "Avenida dos Bichinhos",
        numero: "890",
        complemento: "S/N",
        bairro: "caninos",
        cep: "93857-247",
        cidade: "São Paulo",
        uf: "SP",
        telefone: "(11) 8901-2345",
        email: "julia@email.com",
        descricao: "Veterinária clínica experiente."
    },

    {
        nome: "Dra. Marta",
        logradouro: "Alameda dos Animais",
        numero: "34",
        complemento: "S/N",
        bairro: "acacias",
        cep: "17833-846",
        cidade: "São Paulo",
        uf: "SP",
        telefone: "(11) 5678-9012",
        email: "marta@email.com",
        descricao: "Especializada em animais exóticos."
    },

    {
        nome: "Dr. André",
        logradouro: "Avenida dos Bichanos",
        numero: "67",
        complemento: "A",
        bairro: "caninos",
        cep: "73653-945",
        cidade: "São Paulo",
        uf: "SP",
        telefone: "(11) 5678-9012",
        email: "andre@email.com",
        descricao: "Ortopedista de animais."
    }
]


for (let i = 0; i < elementosVet.length; i++){

    let article = document.createElement("article")


    article.innerHTML = `
    <h3> ${elementosVet[i].nome} </h3>
    <p>${elementosVet[i].logradouro}, ${elementosVet[i].numero}, ${elementosVet[i].bairro}, ${elementosVet[i].cep}. ${elementosVet[i].cidade}/${elementosVet[i].uf}.</p>
    <p>${elementosVet[i].telefone} / ${elementosVet[i].email}</p>
    <p>${elementosVet[i].descricao}</p>
    `
    
    let main = document.querySelector('main')
    
    main.appendChild(article)

}

for (let i = 0; i < elementosOng.length; i++){

    let article = document.createElement("article")


    article.innerHTML = `
    <h3> ${elementosOng[i].nome} </h3>
    <p>${elementosOng[i].logradouro}, ${elementosOng[i].numero}, ${elementosOng[i].bairro}, ${elementosOng[i].cep}. ${elementosOng[i].cidade}/${elementosOng[i].uf}.</p>
    <p>${elementosOng[i].telefone} / ${elementosOng[i].email}</p>
    <p>${elementosOng[i].descricao}</p>
    `
    
    let main = document.querySelector('main')
    
    main.appendChild(article)

}