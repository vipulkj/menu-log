

const menu = document.querySelector(".menu");

const menumain = document.querySelector(".menu-main");
let submenu;
menumain.addEventListener("click", (e) =>{
    if(e.target.closest('.menu-item-has-children')){
        const hasChildren = e.target.closest('.menu-item-has-children');
        showSubMenu(hasChildren);
    }
})

function showSubMenu(hasChildren){
    submenu = hasChildren.querySelector('.sub-menu');
    submenu.classList.add('active');
    submenu.style.animation = 'slideleft 0.5s ease forwards';
    const menutitle = hasChildren.querySelector('i').parentNode.childNodes[0].textContent;
    menu.querySelector('.current-menu-title').innerHTML=menutitle;
    menu.querySelector('.mobile-menu-head').classList.add('active');
}