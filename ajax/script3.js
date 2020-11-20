let req = new XMLHttpRequest();
req.open('GET', 'http://localhost:3000/archivo.txt', true);
req.onreadystatechange = function (aEvat){

	if (req.readyState == 4){
		if (req.status == 200)
			console.log(req.responseText);
		else
			console.log("Error al cargar pagina\n");
	}
};
req.send(null);