let menuBtn = document.querySelector(".menu-btn");
let hambuger = document.querySelector(".btn-bugar");
let nav = document.querySelector(".nav");
let menuNav = document.querySelector('.menu-nav');
let navItem = document.querySelectorAll('.nav_item');



let showMenu = false;

menuBtn.addEventListener("click",toggle);

function toggle(){
    if(!showMenu){
        hambuger.classList.add("open");
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItem.forEach(item => item.classList.add('open'));

        showMenu=true;
    }
    else{
        hambuger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItem.forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
}