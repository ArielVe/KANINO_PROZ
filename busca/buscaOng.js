const elementosOng = [
    {
        nome: "Ong Amor pelos Animais",
        logradouro: "Alameda dos Animais",
        numero: "789",
        complemento: "S/N",
        bairro: "Jardins",
        cep: "18367-938",
        cidade: "São Paulo",
        uf: "SP",
        telefone: "(11) 7890-5678",
        email: "ong1@email.com",
        descricao: "Ong que atua a mais de 10 anos no cuidado e resgate de animais vítimas de maus tratos e abandono"
    },

    {
        nome: "Ong Proteção Animal",
        logradouro: "Rua dos Cães",
        numero: "234",
        complemento: "A",
        bairro: "Santo Amaro",
        cep: "83724-837",
        cidade: "São Paulo",
        uf: "SP",
        telefone: "(11) 2345-8901",
        email: "ong2@email.com",
        descricao: "Campanhas de adoção responsável."
    },

    {
        nome: "Ong Ajuda Animal",
        logradouro: "Travessa dos Queridos",
        numero: "90",
        complemento: "S/N",
        bairro: "Jd. do Cães",
        cep: "93736-836",
        cidade: "São Paulo",
        uf: "SP",
        telefone: "(11) 9012-3456",
        email: "ong7@email.com",
        descricao: "Resgate e tratamento de animais doentes."
    },

    {
        nome: "Ong Coração Animal",
        logradouro: "Alameda dos Peludos",
        numero: "34",
        complemento: "B",
        bairro: "Dois Corações",
        cep: "63847-834",
        cidade: "São Paulo",
        uf: "SP",
        telefone: "(11) 2345-6789",
        email: "emailusuario@gmail.com",
        descricao: "Veterinário especialista em animais de grande porte, realizo consultas gratuitas para PET's de pessoas com baixa renda mediante agendamento"
    }
]

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