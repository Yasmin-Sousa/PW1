function verificarQuiz() {
    // Gabarito com as respostas corretas
    const respostasCorretas = {
      pergunta1: "Pérola",
      pergunta2: "Canhão de Luz Laser",
      pergunta3: "Diamante Azul",
      pergunta4: "Terraformar planetas",
      pergunta6: "Barriga",
      pergunta7: "2013-11-04",
      pergunta8: "5 temporadas"
    }
  
    let acertos = 0;
    let total = 8;
    
     // Verifica perguntas 1 a 4 (radio)
    for (let i = 1; i <= 4; i++) {
      const pergunta = document.querySelector(`input[name="pergunta${i}"]:checked`);
      if (pergunta && pergunta.value === respostasCorretas[`pergunta${i}`]) {
        acertos++;
      }
    }
    // Verifica pergunta 7 (date)
    const dataSelecionada = document.getElementById("p7").value;
    if (dataSelecionada === respostasCorretas.pergunta7) {
      acertos++;
    }

    // Verifica pergunta 5 (checkbox)
    const respostasCheckbox = ["Lapis Lazuli", "Jasper"];
    const checkboxesMarcados = Array.from(document.querySelectorAll('input[name="pergunta5"]:checked'))
                                    .map(checkbox => checkbox.value);

    const todasCorretas = checkboxesMarcados.length === respostasCheckbox.length &&
      respostasCheckbox.every(opcao => checkboxesMarcados.includes(opcao));

    if (todasCorretas) {
      acertos++;
    }

    // Verifica pergunta 6 (select)
    const valorSelecionado = document.getElementById("p6").value;
    if (valorSelecionado === respostasCorretas.pergunta6) {
      acertos++;
    }

    // Verifica pergunta 6 (select)
    const valorSelecionado2 = document.getElementById("p8").value;
    if (valorSelecionado2 === respostasCorretas.pergunta8) {
      acertos++;
    }

    // Exibe resultado final
    document.getElementById("resultado").innerText =
      `Você acertou ${acertos} de ${total} perguntas.`;

    // Mostrar campo de nome e salvar pontuação
    document.getElementById("envioResultado").style.display = "block";
    sessionStorage.setItem("pontuacaoFinal", acertos); // guarda pontuação temporariamente
}

function enviarResultado() {
  const nome = document.getElementById("nomeUsuario").value.trim();
  const pontos = Number(sessionStorage.getItem("pontuacaoFinal"));

  if (!nome) {
    alert("Por favor, digite um nome.");
    return;
  }

  fetch("http://localhost:3000/resultado", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, pontos }),
  })
    .then(res => res.json())
    .then(() => {
      alert("Resultado enviado!");
      mostrarRanking();
    });
}

function mostrarRanking() {
  fetch("http://localhost:3000/ranking")
    .then(res => res.json())
    .then(ranking => {
      const lista = document.getElementById("rankingLista");
      lista.innerHTML = "";
      ranking.forEach((r, i) => {
        lista.innerHTML += `<li>${i + 1}. ${r.nome} — ${r.pontos} ponto(s)</li>`;
      });
    });
}
