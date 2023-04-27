const menu = document.querySelector("#menu");
const menu_mobile = document.querySelector(".menu_mobile")

menu.style.maxHeight = "0px";

menu_mobile.addEventListener("click",()=>{
    if(menu.style.maxHeight == "0px")
    menu.style.maxHeight = "150px"
    else
    menu.style.maxHeight = "0px"
})

let logo = document.querySelector("#logo")
let home = document.querySelector("#home")

