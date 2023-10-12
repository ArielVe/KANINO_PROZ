const elementosVet = [
    {
        nome: "Nome",
        logradouro: "Nome da rua ou avenida",
        numero: "000",
        complemento: "A",
        bairro: "Bairro",
        cep: "00000-000",
        cidade: "Cidade",
        uf: "UF",
        telefone: "(00) 90000-0000",
        email: "emailusuario@gmail.com",
        descricao: "Veterinário especialista em animais de pequeno porte, realizo consultas gratuitas para PET's de pessoas com baixa renda mediante agendamento"
    },

    {
        nome: "Nome",
        logradouro: "Nome da rua ou avenida",
        numero: "000",
        complemento: "A",
        bairro: "Bairro",
        cep: "00000-000",
        cidade: "Cidade",
        uf: "UF",
        telefone: "(00) 90000-0000",
        email: "emailusuario@gmail.com",
        descricao: "Veterinário especialista em animais de grande porte, realizo consultas gratuitas para PET's de pessoas com baixa renda mediante agendamento"
    },

    {
        nome: "Nome",
        logradouro: "Nome da rua ou avenida",
        numero: "000",
        complemento: "A",
        bairro: "Bairro",
        cep: "00000-000",
        cidade: "Cidade",
        uf: "UF",
        telefone: "(00) 90000-0000",
        email: "emailusuario@gmail.com",
        descricao: "Veterinário especialista em animais de pequeno porte, realizo consultas gratuitas para PET's de pessoas com baixa renda mediante agendamento"
    },

    {
        nome: "Nome",
        logradouro: "Nome da rua ou avenida",
        numero: "000",
        complemento: "A",
        bairro: "Bairro",
        cep: "00000-000",
        cidade: "Cidade",
        uf: "UF",
        telefone: "(00) 90000-0000",
        email: "emailusuario@gmail.com",
        descricao: "Veterinário especialista em animais de grande porte, realizo consultas gratuitas para PET's de pessoas com baixa renda mediante agendamento"
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