    document.getElementById("number").addEventListener("keydown", e => e.keyCode != 38 && e.keyCode != 40 && e.preventDefault()); //El usuario solo puede utlizar las flechas arriba y abajo en el teclado
    const input = document.querySelector("#number"); //Selecciona la etiqueta que tenga un id, aqui por ejemplo está seleccionando a la etiqueta que tenga el ID de numeros
    const valueInput = document.getElementById("text"); //Selecciona todos los elementos con la ID especificada.
    input.addEventListener('change',numbers);//el addEventListener recibe dos parametros toma el evento change  y lo pone a escuchar,
//y un segundo argumento para llamar cada vez que se desencadena el evento descrito.


function numbers(number){
    if ((number.target.value>0) && (number.target.value<=3)){ //si el valor de la etiqueta es mayor a 0 y es menor o igual a 3 entonces:
        valueInput.innerText = "Muy deficiente";//Muestra eso en la pantalla
    }
    if ((number.target.value>3) && (number.target.value<=5)){
        valueInput.innerText = "Insuficiente";
    }
    if ((number.target.value>5) && (number.target.value<=6)){
        valueInput.innerText = "Suficiente";
    }
    if ((number.target.value>6) && (number.target.value<=7)){
        valueInput.innerText = "Bien";
    }
    if ((number.target.value>7) && (number.target.value<=9)){
        valueInput.innerText = "Notable";
    }
    if ((number.target.value>9) && (number.target.value<=10)){
        valueInput.innerText = "Excelente";
    }}

function nComment(){//Función para hacer un sistema local de comentarios (Se reinician los comentarios una vez se actualiza la página)
    let li = document.createElement("li");
    let enteredValue = document.getElementById("newcomment").value;
    let text = document.createTextNode(enteredValue);
    li.appendChild(text);

    if(enteredValue === ''){
        alert("Ingrese un comentario!")
    } else {
        document.getElementById("comments").appendChild(li);
    }
    document.getElementById("newcomment").value = "";
    li.className = "comment";

    let erase = document.createElement("p");
    erase.innerHTML = ("Borrar");//El parrafo va a contener el texto de Borrar.
    erase.className = "close";
    li.appendChild(erase);

    let close = document.getElementsByClassName("close");
    let i;
    for (i= 0; i < close.length; i++){
        close[i].onclick = function(){
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}

//Funcion del formulario
function limpiarForm(){
    document.getElementById("contact-frm").reset();
}

function validarForm(){

    var verificar = true;
    var expRegNombre= /^([a-z ñáéíóú]{2,60})$/i;
	var expRegEmail =  /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,4})+$/;

    var nombre = document.getElementById("nombre");
    var email = document.getElementById("email");
    var comentarios = document.getElementById("comentarios");

    if(!nombre.value){
        alert("El campo nombre es requerido");
        nombre.focus();
        verificar=false;
    }else if(!expRegNombre.exec(nombre.value)){
        alert("El campo nombre solo acepta letras");
        nombre.focus();
        verificar=false;
    }else if(!email.value){
        alert("El campo email es requerido");
        email.focus();
        verificar=false;
    }else if(!expRegEmail.exec(email.value)){
        alert("El campo email no es válido");
        email.focus();
        verificar=false;
    }else if(!comentarios.value){
        alert("El campo comentario es requerido");
        comentarios.focus();
        verificar=false;
    }if(verificar){
        alert("Se ha enviado el formulario");
        limpiarForm();
        }
}


window.onload=function(){
    var botonEnviar;
    botonEnviar = document.getElementById("enviar");
    botonEnviar.onclick= validarForm,limpiarForm()

}





//All good