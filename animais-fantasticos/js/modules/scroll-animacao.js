export default function initAnimacaoScroll(){

  const sections = document.querySelectorAll(".js-scroll");

  if(sections.length){
  const window60per = window.innerHeight * 0.6;

    function animaScroll(){
      sections.forEach((section)=>{
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - window60per) < 0;
        if(isSectionVisible){
          // console.log('animar');
          section.classList.add('ativo');
        }
      })
    }

    animaScroll();

    window.addEventListener('scroll', animaScroll);

  }
}