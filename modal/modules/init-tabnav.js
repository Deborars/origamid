
export default function initTabNav(){
const tabMenu = document.querySelectorAll(".js-tabmenu li");
const tabContent = document.querySelectorAll(".js-tabcontent article");
tabContent[0].classList.add("active");

if(tabMenu.length && tabContent.length){
function activeTab(index){
  tabContent.forEach((item)=>{
    item.classList.remove("active");
  })
  const direcao = (tabContent[index].dataset.anime);
  tabContent[index].classList.add("active", direcao);
}

tabMenu.forEach((itemMenu,index)=>{
  itemMenu.addEventListener("click", function(){
    activeTab(index);
  })
})
}
}