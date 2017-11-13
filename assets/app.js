var btn =document.getElementById("btn");
btn.addEventListener("click",function(){

//Contenedor
var containerList= document.getElementById("contenedor-listas");	
//rescatar input
var nombreLista=document.getElementById("agregar").value;

//crear elementos
var lista=document.createElement("div");

//Creamos nodos de texto
var nodoTextComment=document.createTextNode(nombreLista);	

lista.appendChild(nodoTextComment);


}