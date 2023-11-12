const btn_menu = document.querySelector(".menu_hambur");
const lista_menu = document.querySelector(".navbar ul");


btn_menu.addEventListener("click",() => {

lista_menu.classList.toggle("menu_visible");

})