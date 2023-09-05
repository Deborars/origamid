export default function initDropdownMenu(){


}

const dropdownMenus = document.querySelectorAll('[data-dropdown]')



/*
  interajo pelo os li que vieram da constante acima e faço um array com os eventos
  que quero considerar e percorro eles e a cada interação adiciono o evento atual ao menu que
  faz referencia a const dropdownMenus
*/
dropdownMenus.forEach((menu)=>{
  ['touchstart', 'click'].forEach(UserEvent =>{
    menu.addEventListener(UserEvent, handleclick)
  })
})

function handleclick(event){
  event.preventDefault();
  this.classList.toggle('active')
}