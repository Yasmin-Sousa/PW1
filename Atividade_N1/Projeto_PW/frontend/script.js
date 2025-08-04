/*const radio1 =
document.querySelector("input[name='pergunta1']:checked").value

//console.log(radio1)
let mensagemSucesso = "Acertou!"
let P5 = document.getElementById("p5")
const Perg5 = document.getElementById("p5")
const checkbox = document.getElementById("p5b");
checkbox.addEventListener("click")
const isChecked = checkbox.checked;
function verificarCheckbox() {
    if (isChecked){
        console.log(checkbox.value);
        console.log(acertou);
        P5b.textContent = mensagemSucesso
    } else {
        console.log(errou)
    }
}
*/
/*function verificarResposta() {
    // Seleciona o input marcado da pergunta q1
    const respostaSelecionada = document.querySelector('input[name="pergunta1"]:checked');
  
    // Verifica se o usuário marcou alguma opção
    if (!respostaSelecionada) {
      document.getElementById("resultado").innerText = "Por favor, selecione uma resposta.";
      return;
    }
  
    // Resposta correta
    const respostaCorreta = "Pérola";
  
    // Verifica se a resposta está correta
    if (respostaSelecionada.value == respostaCorreta) {
      document.getElementById("resultado").innerText = "Resposta correta!";
    } else {
      document.getElementById("resultado").innerText = "Resposta errada!";
    }
  }
*/
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
}