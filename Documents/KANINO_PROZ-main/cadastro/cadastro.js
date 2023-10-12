
let email = document.getElementById ("email");
let senha2 = document.getElementById ("password");
let button = document.getElementById("botao");

let cadastro = [
    {
        senha: "senha1234"
    }
]


button.addEventListener ("click", function() {
    if (senha2.value == cadastro[0].senha) {
        alert ('Bem vindo')
    } else {
        alert ("Senha Incorreta, tente novamente")
    }
} );