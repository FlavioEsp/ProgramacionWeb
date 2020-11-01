let pag1 = document.getElementById("pag1");
let pag2 = document.getElementById("pag2");
let pag3 = document.getElementById("pag3");
let pag4 = document.getElementById("pag4");
let pag5 = document.getElementById("pag5");
let pag6 = document.getElementById("pag6");
let pag7 = document.getElementById("pag7");

let btn = document.getElementById("bot");
let btn2 = document.getElementById("bot2");

 function volverInicio()
   {
   	pag1.style.display = "block";
    pag2.style.display = "none";
    pag3.style.display = "none";
    pag4.style.display = "none";
    pag5.style.display = "none";
    pag6.style.display = "none";
    pag7.style.display = "none";
   }
   btn2.addEventListener("click", volverInicio);

   var opcion = 0; 
   function cambiarPagina()
   {
      if(opcion==0){
         pag1.style.display = "none";
         pag2.style.display = "block";
         pag3.style.display = "none";
         pag4.style.display = "none";
         pag5.style.display = "none";
         pag6.style.display = "none";
         pag7.style.display = "none";
         btn4.addEventListener("click", cambiarPagina);
         opcion = 1;
      }else if(opcion==1){
    pag1.style.display = "none";
    pag2.style.display = "none";
    pag3.style.display = "block";
    pag4.style.display = "none";
    pag5.style.display = "none";
    pag6.style.display = "none";
    pag7.style.display = "none";
         btn.addEventListener("click", cambiarPagina);
         opcion = 2;
      }else if(opcion==2){
    pag1.style.display = "none";
    pag2.style.display = "none";
    pag3.style.display = "none";
    pag4.style.display = "block";
    pag5.style.display = "none";
    pag6.style.display = "none";
    pag7.style.display = "none";
         btn.addEventListener("click", cambiarPagina);
         opcion = 3;
      }else if(opcion==3){
    pag1.style.display = "block";
    pag2.style.display = "none";
    pag3.style.display = "none";
    pag4.style.display = "none";
    pag5.style.display = "block";
    pag6.style.display = "none";
    pag7.style.display = "none";
         btn.addEventListener("click", cambiarPagina);
         opcion = 4;
      }else if(opcion==4){
    pag1.style.display = "block";
    pag2.style.display = "none";
    pag3.style.display = "none";
    pag4.style.display = "none";
    pag5.style.display = "none";
    pag6.style.display = "block";
    pag7.style.display = "none";
         btn.addEventListener("click", cambiarPagina);
         opcion = 5;
      }else if(opcion==5){
         pag1.style.display = "none";
    pag2.style.display = "none";
    pag3.style.display = "none";
    pag4.style.display = "none";
    pag5.style.display = "none";
    pag6.style.display = "none";
    pag7.style.display = "block";
         btn.addEventListener("click", cambiarPagina);
      }
   }
   btn.addEventListener("click", cambiarPagina);