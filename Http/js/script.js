let his = document.getElementById("historia");
let trac = document.getElementById("tra");
let ver = document.getElementById("version");
let ejem = document.getElementById("ejemplo");

let bt = document.getElementById("b0");
let bt1 = document.getElementById("b1");
let bt2 = document.getElementById("b2");
let bt3 = document.getElementById("b3");

function volverInicio(){
   	his.style.display = "block";
    trac.style.display = "none";
   }
   bt.addEventListener("click",volverInicio)

function cambiarPagina1(){
         his.style.display = "none";
         trac.style.display = "block"; 
         version.style.display = "none";
         ejem.style.display = "none" 
      }
      bt1.addEventListener("click", cambiarPagina1);

function cambiarPagina2(){
         his.style.display = "none";
         trac.style.display = "none";
         version.style.display = "block";
         ejem.style.display = "none"
      }
      bt2.addEventListener("click", cambiarPagina2);

function cambiarPagina3(){
         his.style.display = "none";
         trac.style.display = "none";
         version.style.display = "none";
         ejem.style.display = "block"

      }
      bt3.addEventListener("click", cambiarPagina3);