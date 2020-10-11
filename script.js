setInterval(relogio, 1000);

function relogio(){
    const horaAtual = gerarHora();
    const texto = `${horaAtual.hora}:${horaAtual.minuto}:${horaAtual.segundo}`
    document.getElementById("hora").innerHTML = texto
}

function gerarHora(){
    const horaAtual = new Date();
    const hora = horaAtual.getHours()
    const minuto = horaAtual.getMinutes()
    const segundo = horaAtual.getSeconds()

    if(hora < 10) hora = `0${hora}`
    if(minuto < 10) minuto = `0${minuto}`
    if(segundo < 10) segundo = `0${segundo}`

    return {
        hora,
        minuto,
        segundo
    }
}

function gerarTexto(){
    const hora = gerarHora();
    return [
        "Está cedo demais",
        "para o óleo",
        "de macaco."
    ]
}