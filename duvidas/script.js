// Função para adicionar uma nova pergunta ao blog
function adicionarPergunta() {
  var perguntaInput = document.getElementById("perguntaInput");
  var pergunta = perguntaInput.value.trim();

  if (pergunta !== "") {
    var dataHora = new Date().toLocaleString();
    var blog = document.getElementById("blog");
    var perguntaDiv = document.createElement("div");
    perguntaDiv.className = "pergunta";
    perguntaDiv.innerHTML = `<p>${pergunta}</p><br><p>${dataHora}</p><br><hr><button onclick="exibirResposta(this)" id="btnDuv2">Responder</button><div class="resposta"><textarea cols="190" rows="auto" placeholder="Digite sua resposta aqui..."></textarea><button onclick="enviarResposta(this)" id="btnDuv3">Enviar Resposta</button></div>`;
    blog.appendChild(perguntaDiv);
    perguntaInput.value = "";
  }
}

// Função para exibir o campo de resposta
function exibirResposta(button) {
  var respostaDiv = button.nextElementSibling;
  respostaDiv.style.display = "block";
  button.style.display = "none";
}

// Função para enviar uma resposta e ocultar o campo de resposta
function enviarResposta(button) {
  var respostaDiv = button.parentNode;
  var respostaTextarea = respostaDiv.querySelector("textarea");
  var resposta = respostaTextarea.value;

  if (resposta !== "") {
    var dataHora = new Date().toLocaleString();
    var respostaP = document.createElement("p");
    respostaP.innerHTML = `<br><span class="resposta-titulo"><strong>Resposta:</strong></span> ${resposta}`;
    var dataHoraP = document.createElement("p");
    dataHoraP.textContent = `${dataHora}`;
    dataHoraP.classList.add("espaco-resposta");
    respostaDiv.parentNode.insertBefore(respostaP, respostaDiv);
    respostaDiv.parentNode.insertBefore(dataHoraP, respostaDiv);

    respostaTextarea.value = "";
    respostaDiv.style.display = "none";
  }
}

// Função para exibir o modal
window.onload = function () {
  var modal = document.getElementById("modal");
  modal.style.display = "block";
};

// Função para fechar o modal
function fecharModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}
