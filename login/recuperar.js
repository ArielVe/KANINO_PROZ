let login = [
    {
        login: "teste@gmail.com",
        senha: "teste@123"
    }
]

for (let i = 0; i < login.length; i++) {

    let email = document.getElementById ("email");
    let senha = document.getElementById ("password");
    let senhaRecuperada = document.getElementById ("password2")
    let buttomRec = document.getElementById ("buttom-rec")

    let span = document.querySelector("span")

    buttomRec.addEventListener ("click", function() {
        if (email.value == login[i].login && senha.value == senhaRecuperada.value) {
            span.id = "redefinir-senha"
            span.innerText = "Sua senha foi redefinida com sucesso."
            login[i].senha = senha.value
        } else {
            span.id = "erro-rec"
            span.innerText = "Informações incorretas, por favor, insira novamente."
        }
    } )
    }