export default function initTooltip(){
  const tooltips = document.querySelectorAll('[data-tooltip]');

tooltips.forEach((item)=>{
  item.addEventListener('mouseover', onMouseOver)
})

function onMouseOver(event){
  const tooltipBox = criarTooltipBox(this);


  //atribuindo o tooltipBox e o element ao objeto

  onMouseMove.tooltipBox = tooltipBox;
  this.addEventListener('mousemove', onMouseMove);

  onMouseLeave.tooltipBox = tooltipBox;
  onMouseLeave.element = this;
  this.addEventListener('mouseleave', onMouseLeave);
  
}

/*foi passado um objento dentro addEventListener e nele é preciso que sempre tenha
a função handleEvent
*/
const onMouseLeave = {
  tooltipBox: '',
  handleEvent(){
    this.tooltipBox.remove();
    this.element.removeEventListener('mouseleave', onMouseLeave)
  }
}

const onMouseMove = {
  handleEvent(event){
  this.tooltipBox.style.top = event.pageY + 20 +'px';
  this.tooltipBox.style.left = event.pageX + 20 +'px';
  this.element.removeEventListener('mousemove', onMouseMove)
  }
}

function criarTooltipBox(element){
  const tooltipBox = document.createElement('div');
  const text = element.getAttribute('aria-label');
  tooltipBox.classList.add('tooltip');
  tooltipBox.innerText = text;
  document.body.appendChild(tooltipBox)
  return tooltipBox
}
}

