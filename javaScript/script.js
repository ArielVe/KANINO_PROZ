$(document).ready(function(){
    $(`.carousel`).slick({
        //slidesToShow: 1, // Quantidade de itens visíveis ao mesmo tempo
        //slidesToScroll: 3, // Quantidade de itens a serem rolados
        autoplay: true, // Ativar o modo de reprodução automática
        autoplaySpeed: 3000, // Intervalo de tempo entre os slides (em milissegundos)
    });
});

document.getElementById("depoimento-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var nome = document.getElementById("meuInput").value;
    var depoimento = document.getElementById("depoimentoInput").value;

    var depoimentos = JSON.parse(localStorage.getItem("depoimentos")) || [];
    depoimentos.push({ nome, depoimento });
    localStorage.setItem("depoimentos", JSON.stringify(depoimentos));

    updateDepoimentos();
});

function updateDepoimentos() {
    var depoimentos = JSON.parse(localStorage.getItem("depoimentos")) || [];
    var depoimentoContainer = document.getElementById("depoimento-container");

    depoimentoContainer.innerHTML = ""; // Limpa o contêiner

    depoimentos.forEach(function(depoimento) {
        var paragrafo = document.createElement("p");
        paragrafo.textContent = depoimento.nome + ": " + depoimento.depoimento;
        depoimentoContainer.appendChild(paragrafo);
    });
}

// Carrega os depoimentos quando a página é carregada
window.addEventListener("load", updateDepoimentos);
