let searchForm = document.querySelector('.search-form');

document.querySelector('#search').onclick = () =>{
    searchForm.classList.toggle('active');
    shopping.classList.remove('active');
    login.classList.remove('active');
    menu.classList.remove('active');
}

let shopping = document.querySelector('.shopping-cart-form');

document.querySelector('#shopping-cart').onclick = () =>{
    shopping.classList.toggle('active');
    searchForm.classList.remove('active');
    login.classList.remove('active');
    menu.classList.remove('active');
}

let login = document.querySelector('.login-form');

document.querySelector('#login').onclick = () =>{
    login.classList.toggle('active');
    searchForm.classList.remove('active');
    shopping.classList.remove('active');
    menu.classList.remove('active');
}

let menu = document.querySelector('.navbar');

document.querySelector('#menu-bar').onclick = () =>{
    menu.classList.toggle('active');
    login.classList.remove('active');
    searchForm.classList.remove('active');
    shopping.classList.remove('active');
}

window.onscroll = () =>{
    menu.classList.remove('active');
    login.classList.remove('active');
    searchForm.classList.remove('active');
    shopping.classList.remove('active');
}

