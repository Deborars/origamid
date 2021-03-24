export default function initDropDownMenu(){


}



const dropDownMenus = document.querySelectorAll("[data-dropdown]");
const body = document.querySelector("body");
dropDownMenus.forEach((menu)=>{
  ['touchstart', 'click'].forEach((userEvent)=>{
    menu.addEventListener(userEvent, handleClick);
  })
})

function handleClick(event){
  event.preventDefault();
  this.classList.toggle("active");
  outsideClick(()=>{
    console.log('ativou');
  });
}

function outsideClick(callback){
  const html = document.documentElement;
  html.addEventListener("click", handleOutsideClick);
  function handleOutsideClick(event){
    callback();
  }
}