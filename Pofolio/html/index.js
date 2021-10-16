let bugar = document.querySelector('.bugar');
let btnBugar = document.querySelector('.btn-bugar');
let navBar = document.querySelector('.nav');
let nav = document.querySelector('.nav-bar');

let open = true;

bugar.addEventListener('click',toggle)

function toggle(){
    if(open){
        btnBugar.classList.add('open');
        navBar.classList.add('open');
        nav.classList.add('open');
        open = false
    }
    else{
        btnBugar.classList.remove('open');
        navBar.classList.remove('open');
        nav.classList.remove('open');
        open = true
    }
}