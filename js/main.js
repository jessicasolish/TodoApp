//Mis Variables

var botonTexto = document.getElementById("botonTexto");
var texto = document.getElementById("texto");
var lista = document.getElementById("lista");




//FUNCIONES
function elminarItem(evento){
    console.log("elminarItem");
    var li = evento.target.parentNode;
    lista.removeChild(li);
} 

function agregarTexto(){
    var letras = texto.value ;
    var li = document.createElement("li");
    var p = document.createTextNode( letras );
    var button = document.createElement("button");
    if(letras == ""){
        texto.setAttribute("placeholder"," Añade Una Tarea,no dejes en Blanco!!!");
    }else{
        button.setAttribute("class","btn-danger");
        button.addEventListener("click", elminarItem);
        var buttonTexto = document.createTextNode('x');
        button.appendChild(buttonTexto);
        li.appendChild(p);
        li.appendChild(button);
        lista.appendChild(li);
        }
    
}

function eliminarTodo(){
    lista.innerHTML = "";
}
botonTexto.addEventListener("click", agregarTexto );
