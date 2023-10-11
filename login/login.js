let login = [
    {
        login: "teste@gmail.com",
        senha: "teste@123"
    }
]

for (let i = 0; i <= login.length; i++) { 
    let email = document.getElementById ("email");
    let senha = document.getElementById ("password");
    
    let buttom = document.getElementById ("buttom-login")

    let erro = document.getElementById ("erro-login")

    erro.style.display = "none"
    
    buttom.addEventListener ("click", function() {
        if (email.value == login[i].login && senha.value == login[i].senha) {
            window.location.href = "../index.html"
        } else {
            erro.style.display = "block"
        }
    } )
}
