setInterval(relogio, 1000);

function relogio() {
    const horaAtual = gerarHora();
    const textoHorario = `${horaAtual.hora}:${horaAtual.minuto}:${horaAtual.segundo}`
    const dados = gerarDados();
    document.getElementById("hora").innerHTML = `${textoHorario}`
    document.getElementById("texto").innerHTML = `${dados.texto.join("<br>")}`
    document.getElementById("imagem").src = `${dados.imagem}`
    document.getElementById("texto").style.fontSize = `${!!dados.fonte ? dados.fonte : "48px"}`
}

function gerarHora() {
    const horaAtual = new Date();
    let hora = horaAtual.getHours()
    let minuto = horaAtual.getMinutes()
    let segundo = horaAtual.getSeconds()

    if (hora < 10) hora = `0${hora}`
    if (minuto < 10) minuto = `0${minuto}`
    if (segundo < 10) segundo = `0${segundo}`

    if (true) {
        hora = "23"
        minuto = "05"
    }

    return {
        hora,
        minuto,
        segundo
    }
}

function gerarDados() {
    const horaAtual = gerarHora();
    if (parseInt(horaAtual.hora) == 0) {
        return {
            texto: [
                "MEIA NOITE!!!",
                "HORÁRIO OFICIAL DO",
                "ÓLEO",
                "DE",
                "MACACO"
            ],
            imagem: 'imagens/Macaco-da-noite.jpg',
            fonte: '64px'
        }
    } else if (parseInt(horaAtual.hora) == 1) {
        return {
            texto: [
                "VOCÊ CHEGOU TARDE DEMAIS",
                "PARA O ÓLEO",
                "DE MACACO"
            ],
            imagem: 'imagens/macaco-da-noite-especie.jpg'
        }
    } else if (parseInt(horaAtual.hora) < 23) {
        return {
            texto: [
                "ESTÁ CEDO DEMAIS",
                "PARA O ÓLEO",
                "DE MACACO"
            ],
            imagem: 'imagens/macaco-pequeno.jpg'
        }
    } else if (parseInt(horaAtual.hora) == 23) {
        return {
            texto: [
                "FALTA UMA HORA..."
            ],
            imagem: 'imagens/unnamed.jpg'
        }
    }
}