AOS.init();
const dataEvento = new Date("Apr 2, 2024 19:00:00");
const timeEvento = dataEvento.getTime();
const contadorTempo = setInterval(function() {
    const agora = new Date();
    const tempoAtual = agora.getTime();
    const DistanceEvent = timeEvento - tempoAtual;
    const dia = 86400000;
    const hora = 3600000;
    const minuto = 60000;
    const diaEvento = Math.floor(DistanceEvent / dia);
    const horaEvento = Math.floor(DistanceEvent % dia / hora);
    const minutoEvento = Math.floor(DistanceEvent % hora / minuto);
    const segundoEvento = Math.floor(DistanceEvent % minuto / 1000);
    document.getElementById("contador").innerHTML = `${diaEvento}d ${horaEvento}h ${minutoEvento}m ${segundoEvento}s`;
    if (DistanceEvent < 0) {
        clearInterval(contadorTempo);
        document.getElementById("contador").innerHTML = "Evento expirado";
    }
}, 1000);

//# sourceMappingURL=index.f75de5e1.js.map
