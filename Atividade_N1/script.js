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
      pergunta4: "Canhão de Luz Laser",
      pergunta2: "Terraformar planetas",
      pergunta3: "Diamante Azul"
    }
  
    let acertos = 0;
    let total = 4;
  
    for (let i = 1; i <= total; i++) {
      const pergunta = document.querySelector(`input[name="pergunta${i}"]:checked`);
      if (pergunta && pergunta.value === respostasCorretas[`pergunta${i}`]) {
        acertos++;
      }
    }
  
    document.getElementById("resultado").innerText = `Você acertou ${acertos} de ${total} perguntas.`;
  }
