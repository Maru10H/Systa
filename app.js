
//////////////////////hamburguesa///////////////

let burger = document.querySelector('.navbar-burger');
let menu = document.querySelector('.navbar-menu')
let link= document.querySelectorAll('.navbar-menu > .navbar-end > .navbar-item')


if (burger !== null) {
    burger.addEventListener('click', function() {

        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
        
        if(menu.classList.contains('is-active')){
            for(let c=0; c < link.length; c++){
                link[c].addEventListener('click', transicionMenu)
            }
        }    
    });

}

function transicionMenu(){
    setTimeout(function(){
        menu.classList.toggle('is-active');
        // menu.classList.remove('is-active')
    },300); 
}

//////////////////////menu despegado con scroll//////////////////////////

window.addEventListener("scroll", menuFijo)

function menuFijo(){
    let menu= document.querySelector(".navbar")
    menu.classList.toggle("has-background-warning", window.scrollY > 0)
}

//////////////////smooth scroll///////////////////////////////
const links = document.querySelectorAll(".navbar-menu > .navbar-end > a");

for (const link of links) {
      link.addEventListener("click", clickHandler);
}

document.getElementById("botonNosotros").addEventListener("click", clickHandler)
document.getElementById("botonQuiero").addEventListener("click", clickHandler)
document.getElementById("logo").addEventListener("click", clickHandler)
document.getElementById("botonPresupuesto").addEventListener("click", clickHandler)

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
 
  document.querySelector(href).scrollIntoView({
    behavior: "smooth"
  });
}

/////////////////////////////modal-ejemplo de libro/////////////

let modalOpen=document.querySelectorAll(".open-modal")
let modales=document.querySelectorAll(".modal") 
let modalClose=document.querySelectorAll(".modal-background")
let cruzCerrar=document.querySelectorAll(".modal-close")

if(modalOpen.length > 0){
    modalOpen.forEach(img => {
        img.addEventListener('click', function(){
            document.getElementById(this.dataset.target).classList.add('is-active')
        });
    });
}

if(modalClose.length > 0){
    modalClose.forEach(backg => {
        backg.addEventListener('click', function(){
            modales.forEach(modal => {
                modal.classList.remove('is-active')
            });
        })
    });
}

if(cruzCerrar.length > 0){
    cruzCerrar.forEach(cerrar => {
        cerrar.addEventListener('click', function(){
            modales.forEach(modal => {
                modal.classList.remove('is-active')
            });
        })
    });
}




