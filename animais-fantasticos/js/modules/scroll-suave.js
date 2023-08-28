//scroll suave
//clique no link e role a página

export default function SmoothScrool(){
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

