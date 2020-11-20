//ejemplo de solicitud sincronica con eventos
//load, error, progress
//1. se crea objeto de solicitud
let xhr = new XMLHttpRequest();
//2. se configura: solicitud-GET
xhr.open('GET', 'http://localhost:3000/archivo.txt');
//3. se envia la solicitud
xhr.send();
//4. los siguientes seran invocados despues de que la respuesta sea recibida
xhr.onload = function(){
	if (xhr.status != 200){
		alert(`Error ${xhr.status}: ${xhr.statusText}`);
	}else{
		alert(`Listo, se recibieron ${xhr.response.lenght} bytes`);
	}
};

xhr.onprogress = function(event){
	if (event,lenghtComputable){
		alert(`Recibidos ${event.loaded} de ${event.total} bytes`);
	}else{
		alert(`Recibidos ${event.loaded} bytes`);
	}
};

xhr.onerror = function(){
	alert("Fallo solicitud");
};