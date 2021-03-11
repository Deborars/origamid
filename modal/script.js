function initTabNav(){
const tabMenu = document.querySelectorAll(".js-tabmenu li");
const tabContent = document.querySelectorAll(".js-tabcontent article");
tabContent[0].classList.add("active");

if(tabMenu.length && tabContent.length){
function activeTab(index){
  tabContent.forEach((item)=>{
    item.classList.remove("active");
  })
  tabContent[index].classList.add("active");
}

tabMenu.forEach((itemMenu,index)=>{
  itemMenu.addEventListener("click", function(){
    activeTab(index);
  })
})
}
}


initTabNav();

function initAccordion(){
  const accordionList = document.querySelectorAll(".js-accordion dt")
  const active = "active";

  if(accordionList.length){
    accordionList[0].classList.add("active");
    accordionList[0].nextElementSibling.classList.add("active");

    accordionList.forEach((item)=>{
      item.addEventListener("click", activeAccordion);
    })

    function activeAccordion(){
      this.classList.toggle(active);
      this.nextElementSibling.classList.toggle(active);
    }
}
}

initAccordion();


//scroll suave
//clique no link e role a página

function SmoothScrool(){
  const internalLinks = document.querySelectorAll(".js-internalLinks a[href^='#']");

  internalLinks.forEach((item)=>{
    item.addEventListener("click",(event)=>{
      event.preventDefault();
      let hrefItem = item.getAttribute("href");
      activeScrool(hrefItem);
    }
    )
  })

  function activeScrool(item){
    const itemId = document.querySelector(item);
    itemId.scrollIntoView({block: "start", behavior: "smooth"});
  }
}

SmoothScrool();