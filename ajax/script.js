
function cargarDoc(){
	let xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200) {
            this.responseText;
		}
	};
	xhttp.open("GET", "archivo.txt", true);
	xhttp.send();
}