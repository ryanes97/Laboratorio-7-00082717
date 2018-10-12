var container;

container = document.getElementById("c1"); 

container.innerText = "Hola Mundo!";

container.style.backgroundColor = "#000000";

container.style.color = "#1cb723";

container.style.width = "200px";

container.style.height = "200px";

container.innerHTML = "<input type=”text” placeholder=’escriba su texto’>";

/*Usando "document.getElementsByClassName"*/

var containers = document.getElementsByClassName("c2");

Array.prototype.forEach.call(containers, element => {
    element.style.backgroundColor = "#009999";
    element.innerHTML = "<input type='text' placeholder='escriba su texto'>";
});

/*Eventos*/

var boton = document.getElementById("btn-click");

boton.onclick = function(evt) 
{ 
alert("Hola mundo"); 
}

var btnCopy = document.getElementById("btnCopy");

btnCopy.onclick = function(evt) 
{ 
let msj = document.getElementById('textMsj').value;
document.getElementById('showMsj').innerText = msj;
}