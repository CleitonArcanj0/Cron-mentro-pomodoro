const campoMin = window.document.getElementById("minutos");
const campoSeg = window.document.getElementById("segundos");
let tempo
let minutos 
let segundos
let rodando = false
let qtd_start_ativado = 0

const start = () => {
    if (qtd_start_ativado === 0) {
        minutos = 24
        segundos = 59
        qtd_start_ativado++
        
    } else if (qtd_start_ativado > 0 && rodando === false) {
        rodando = true
        minutos = Number(window.document.getElementById("minutos").innerHTML)
        segundos = Number(window.document.getElementById("segundos").innerHTML)
        temp(minutos, segundos)
    }

    //impede que o usuário crie vários intervalos
    if (tempo) {
        return
    }
    rodando = true
    temp(minutos, segundos)

}

const temp = (minutos, segundos) => {
    if (rodando === true) {

        tempo = setInterval(function () {

            campoMin.innerText = `${minutos.toString().padStart(2, "0")}`
            campoSeg.innerText = `${segundos.toString().padStart(2, "0")}`

            if (segundos !== 0) {
                segundos--;

            } else {

                if (minutos === 0) {
                    alert("Acabou o tempo!");
                    qtd_start_ativado = 0
                    resetar()

                } else {
                    minutos--;
                    segundos = 59;
                }

            }


        }, 1000);

    }

}


const parar = () => {
    clearInterval(tempo)
    rodando = false
}

const resetar = () => {
    parar()
    tempo = null
    qtd_start_ativado = 0
    campoMin.innerText = "25"
    campoSeg.innerText = "00"
}