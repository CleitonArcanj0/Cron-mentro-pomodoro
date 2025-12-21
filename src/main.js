const campoMin = window.document.getElementById("minutos");
const campoSeg = window.document.getElementById("segundos");


function start() {
    let minutos = 24;
    let segundos = 59;

    tempo = setInterval(function () {

        campoMin.innerText = `${minutos.toString().padStart(2, "0")}`
        campoSeg.innerText = `${segundos.toString().padStart(2, "0")}`

        if (segundos !== 0) {
            segundos--;
        } else {
            if (minutos === 0 && segundos === 0) {
                alert("Acabou o tempo!");
                resetar()
            } else {
                minutos--;
                segundos = 59;
            }
        }
    }, 1000);

}

function parar() {
    clearInterval(tempo)
}

function resetar() {
    campoMin.innerText = "25"
    campoSeg.innerText = "00"
    parar()
}