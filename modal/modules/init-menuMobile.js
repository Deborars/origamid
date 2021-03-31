export default function initMobileMenu(){
  const menuBtn = document.querySelector('[data-menu="button"');
  const menuList = document.querySelector('[data-menu="list"]');
  const html = document.documentElement;

  function open(event){
    event.stopPropagation();
    menuBtn.classList.toggle('active');
    menuList.classList.toggle('active');
  }

  function closeMenuList(){
    menuList.classList.toggle('active');
  }

  menuBtn.addEventListener('click', open);
  html.addEventListener('click', closeMenuList);
}



