let tempoTotal = 9;
let tempoPorPartida = 2;
let Partidas = tempoTotal / tempoPorPartida;
let calculo = Partidas % tempoTotal;

console.log(`Tem ${calculo} horas ainda`);