let email = document.getElementById ("email")
let erroEmail = document.getElementById ("erro-email")
erroEmail.style.display = "none" 
let regex = /@/;

let cel = document.getElementById ("phone")
let erroCel = document.getElementById("erro-cel")
erroCel.style.display = "none"

let cpf = document.getElementById("cpf")
let erroCpf = document.getElementById("erro-cpf")
erroCpf.style.display = "none"

let crmv = document.getElementById ("crmv")
let erroCrmv = document.getElementById ("erro-crmv")
erroCrmv.style.display = "none"

let cnpj = document.getElementById ("cnpj")
let erroCnpj = document.getElementById ("erro-cnpj")
erroCnpj.style.display = "none"

let buttom = document.getElementById("buttom-cadastro")

let tutor = document.getElementById("radio1")
let veterinario = document.getElementById("radio2")
let ong = document.getElementById("radio3")
let descricao = document.getElementById("descricao")
let razaoSocial = document.getElementById("razao-social")
let bairro = document.getElementById("bairro")
let logradouro = document.getElementById("logradouro")
let numeroRes = document.getElementById("num")
let complemento = document.getElementById("complemento")

let cep = document.getElementById("cep")
let erroCep = document.getElementById("erro-cep")
erroCep.style.display = "none"

let password = document.getElementById("password")
let confPassword = document.getElementById("confirm-password")
let erroSenha = document.getElementById("erro-senha")
erroSenha.style.display= "none"

ong.addEventListener("change", function() {
    if (ong.checked) {
        tutor.disabled = true;
        veterinario.disabled = true;
        crmv.disabled = true;
        cpf.disabled = true;

      } else {
        tutorRadioButton.disabled = false;
        veterinarioRadioButton.disabled = false;
      }
    });

tutor.addEventListener ("change", function() {
    if (tutor.checked) {
        cnpj.disabled = true
        descricao.disabled = true;
        razaoSocial.disabled = true;
        bairro.disabled = true;
        logradouro.disabled = true;
        num.disabled = true;
        complemento.disabled = true;
        cep.disabled = true;
    }    
})

veterinario.addEventListener ("change", function() {
    if (tutor.checked) {
        cnpj.disabled = true;
        descricao.disabled = true;
        razaoSocial.disabled = true;
    }    
})

buttom.addEventListener("click", function() {
    let hasError = false;

    if (!regex.test(email.value)) {
        erroEmail.style.display = "block";
        hasError = true;
    } else {
        erroEmail.style.display = "none";
    }

    if (cel.value.length !== 11) {
        erroCel.style.display = "block";
        hasError = true;
    } else {
        erroCel.style.display = "none";
    }

    if (cpf.value.length !== 11) {
        erroCpf.style.display = "block";
        hasError = true;
    } else {
        erroCpf.style.display = "none";
    }

    if (crmv.value.length !== 7) {
        erroCrmv.style.display = "block";
        hasError = true;
    } else {
        erroCrmv.style.display = "none";
    }

    if (cnpj.value.length !== 14) {
        erroCnpj.style.display = "block";
        hasError = true;
    } else {
        erroCnpj.style.display = "none";
    }

    if (cep.value.length !== 8) {
        erroCep.style.display = "block";
        hasError = true;
    } else {
        erroCep.style.display = "none";
    }

    if (password.value !== confPassword.value) {
        erroSenha.style.display = "block";
        hasError = true;
    } else {
        erroSenha.style.display = "none";
    }

    if (hasError) {
        return;
    }
})