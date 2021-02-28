let showMenu=false;
let menu=document.querySelector(".burger-menu"); 
let button=document.querySelector(".burger-menu__button");
button.addEventListener('click',e=>{
    showMenu=!showMenu;
      button.classList.toggle("clicked");
      (showMenu)?menu.style.display="flex" : menu.style.display="none" 
})
