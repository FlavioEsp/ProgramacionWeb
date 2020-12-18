var select = document.getElementById('opcion1');
select.addEventListener('change',
  function(){
    var selectedOption = this.options[select.selectedIndex];
    var fila="<tr><td></td><td>"+selectedOption.text+"</td><td></td><td></td><td></td></tr>";
    var fila1="<tr><td></td><td>"+selectedOption.text+"</td><td></td><td></td><td></td></tr>";
    var fila2="<tr><td></td><td>"+selectedOption.text+"</td><td></td><td></td><td></td></tr>";
    var btn = document.createElement("TR");
   	btn.innerHTML=fila;
    document.getElementById("tabla").appendChild(btn);
    var btn1 = document.createElement("TR");
   	btn1.innerHTML=fila;
    document.getElementById("tabla").appendChild(btn1);
    var btn2 = document.createElement("TR");
   	btn2.innerHTML=fila;
    document.getElementById("tabla").appendChild(btn2);
  });

let bt3 = document.getElementById("log");
let bt4 = document.getElementById("con");

let bt = document.getElementById("in3");
let bt0 = document.getElementById("inicia");
let bt1 = document.getElementById("in2");
let bt2 = document.getElementById("in1");

function iniciar(){
    bt3.style.display = "block";
    bt4.style.display = "none";
   }
   bt.addEventListener("click",iniciar)

   function iniciar0(){
    bt3.style.display = "none";
    bt4.style.display = "block";
   }
   bt0.addEventListener("click",iniciar0)

   function iniciar2(){
    bt3.style.display = "none";
    bt4.style.display = "block";
   }
   bt1.addEventListener("click",iniciar2)

   function iniciar3(){
    bt3.style.display = "none";
    bt4.style.display = "block";
   }
   bt2.addEventListener("click",iniciar3)