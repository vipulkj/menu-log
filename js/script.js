

const menu = document.querySelector(".menu");

const menumain = menu.querySelector(".menu-main");

const goback = menu.querySelector(".go-back");

const menutrigger = document.querySelector(".mobile-menu-trigger");

const closemenu = menu.querySelector(".mobile-menu-close");

let submenu;
menumain.addEventListener("click", (e) => {
    if(!menu.classList.contains('active')) {
        return ;
    }
    if (e.target.closest('.menu-item-has-children')) {
        const hasChildren = e.target.closest('.menu-item-has-children');
        showSubMenu(hasChildren);
    }
})

goback.addEventListener('click', () => {
    hidesubmenu();
})

menutrigger.addEventListener('click', () => {
    togglemenu();
})

closemenu.addEventListener('click', () => {
    togglemenu();
})


function togglemenu() {
    menu.classList.toggle('active');
    document.querySelector('.menu-overlay').classList.toggle('active');
}

document.querySelector('.menu-overlay').addEventListener('click', () => {
    togglemenu();
})

function showSubMenu(hasChildren) {
    submenu = hasChildren.querySelector('.sub-menu');
    submenu.classList.add('active');
    submenu.style.animation = 'slideleft 0.5s ease forwards';
    const menutitle = hasChildren.querySelector('i').parentNode.childNodes[0].textContent;
    menu.querySelector('.current-menu-title').innerHTML = menutitle;
    menu.querySelector('.mobile-menu-head').classList.add('active');
}

function hidesubmenu() {
    submenu.style.animation = 'slideright 0.5s ease forwards';

    setTimeout(() => {
        submenu.classList.remove('active');
    }, 300);

    menu.querySelector('.current-menu-title').innerHTML = '';
    menu.querySelector('.mobile-menu-head').classList.remove('active');
}



window.onresize = function () {
    if (this.innerWidth > 991) {
        if (menu.classList.contains('active')) {
            togglemenu();
        }
    }
}