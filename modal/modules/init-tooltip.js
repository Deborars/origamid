export default initToolTip()
{

}


const tooltips = document.querySelectorAll('[data-tooltip]');


tooltips.forEach((item)=>{
  item.addEventListener("mousemove", onMouseMove);
})

function onMouseMove(event){
  console.log(event);
}

