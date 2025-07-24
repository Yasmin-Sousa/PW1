//const radio1 =
//document.querySelector("input[name='pergunta1']:checked").value

//console.log(radio1)
let mensagemSucesso = "Acertou!"
let P5b = document.getElementById("p5")
//const Perg5 = document.getElementById("p5")
const checkbox = document.getElementById("p5b");
const isChecked = checkbox.checked;
if (isChecked){
    console.log(acertou)
    P5b.textContent = mensagemSucesso
} else {
    console.log(errou)
}
