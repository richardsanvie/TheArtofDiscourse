AOS.init();

const dataEvento = new Date("Apr 2, 2024 19:00:00");
const timeEvento = dataEvento.getTime();

const contadorTempo = setInterval(function () {
    const agora = new Date();
    const tempoAtual = agora.getTime();

    const DistanceEvent = timeEvento - tempoAtual;

    const dia = 1000 * 60 * 60 * 24;
    const hora = 1000 * 60 * 60;
    const minuto = 1000 * 60;

    const diaEvento = Math.floor(DistanceEvent / dia);
    const horaEvento = Math.floor((DistanceEvent % dia) / hora);
    const minutoEvento = Math.floor((DistanceEvent % hora) / minuto);
    const segundoEvento = Math.floor((DistanceEvent % minuto) / 1000);

    document.getElementById('contador').innerHTML = `${diaEvento}d ${horaEvento}h ${minutoEvento}m ${segundoEvento}s`;


})