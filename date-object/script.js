const aniversario = new Date('Jun 26 2021 23:59');
const agora = new Date();



function calcularDias(time){
  return time / (24 * 60 * 60 * 1000);
}

const diasAgora = Math.floor((calcularDias(agora.getTime())));
const diasAniversario = Math.floor(calcularDias(aniversario.getTime()));

console.log(diasAniversario - diasAgora);

