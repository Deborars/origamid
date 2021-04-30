export default function initAnimanumeros(){
  const numeros = document.querySelectorAll('[data-numero]');

  numeros.forEach((numero)=>{
  const total = +numero.innerText;
  const incremento = total / 100;

  let start = 0;

  const timer = setInterval(()=>{
    start = Math.floor(start + incremento);
    numero.innerText = start;
    if(start > total){
      numero.innerText = total;//pq o start ultrapassa o valor do numero e assim reatribuiumos o valor certo;
      clearInterval(timer);//timer é o id do setinterval 
    }
  },25 * Math.random())
  })
}


