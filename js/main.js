let bodega =[
    {cantidad:0, cuadro:"A", nombre:"Organizador_de_oficina", codigo:"P001", descripcion:"Organizador colgante de oficina con 4 contenedores.", precio:15000, imagen:"../img/gallery/0eae610c59a2d3a723dcd36b1ecba6f2 (1).jpg"},
    {cantidad:0, cuadro:"B", nombre:"Lámpara_metal_colgante", codigo:"P002", descripcion:"Lámpara de láminas de metal con aberturas.", precio:100000, imagen:"../img/gallery/decoracion-con-cosas-recicladas-lamparas.jpg"},
    {cantidad:0, cuadro:"C", nombre:"Organizador_escolar", codigo:"P003", descripcion:"Organizador transportable para útiles escolares.", precio:12000, imagen:"../img/gallery/organizador-con-latas-recicladas.jpg"},
    {cantidad:0, cuadro:"D", nombre:"Libreta_reciclada", codigo:"P004", descripcion:"Libreta de papel reciclado 100 hojas 12x9 cm con lápiz.", precio:6000, imagen:"../img/gallery/libreta-hecha-hojas-recicladas-espiral-espacio-escribir-hoja-blanco-colores-otono-lapiz-reciclado_603822-118.jpg"},
    {cantidad:0, cuadro:"E", nombre:"Macetero_diseños", codigo:"P005", descripcion:"Macetero diseño infantil, 10 cm de diámetro.", precio:10000, imagen:"../img/gallery/qqqhcer.jpg"},
    {cantidad:0, cuadro:"F", nombre:"Peineta_madera", codigo:"P006", descripcion:"Peineta ecológica de madera de 15 cm.", precio:12000, imagen:"../img/gallery/cepillo-madera-beneficios.jpg"},
    {cantidad:0, cuadro:"G", nombre:"Macetero_colgante", codigo:"P007", descripcion:"Macetero de plástico colgante 20x10 cm.", precio:7000, imagen:"../img/gallery/cómo-crear-macetas-recicladas-y-decorar-tu-patio.jpg"},
    {cantidad:0, cuadro:"H", nombre:"Macetero_vidrio", codigo:"P008", descripcion:"Macetero de vidrio de 37x15 cm de diámetro.", precio:30000, imagen:"/img/gallery/bottles.jpg"},
    {cantidad:0, cuadro:"I", nombre:"Colgador_para_celular", codigo:"P009", descripcion:"Colgador para smartphone.", precio:8000, imagen:"../img/gallery/colgadorjeans.jpg"},
    {cantidad:0, cuadro:"J", nombre:"Balancín_color_amarillo", codigo:"P010", descripcion:"Balancín pequeño color amarillo.", precio:30000, imagen:"../img/gallery/balancin.jpg"},
    {cantidad:0, cuadro:"K", nombre:"Perchero_rock_dorado", codigo:"P011", descripcion:"Percheros de metal.", precio:35000, imagen:"../img/gallery/tenedors.jpg"},
    {cantidad:0, cuadro:"L", nombre:"Basurero", codigo:"P012", descripcion:"Basurero con forma de diamante.", precio:35000, imagen:"../img/gallery/botebasura.jpg"}
];
let carro =[];
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

function payUp(){
    if(carro.cantidad > 0){
        neto();
        carro.cantidad = 0
        alert("Has pagado satisfactoriamente");
    }
    else{
        alert("No hay articulos en su carro")
    }
}


//Funcion de carro nuevo

function cargar(arreglo){
    document.querySelector(".totalizadorP").innerHTML="";
    arreglo.forEach((element,index) => {
        document.querySelector(".totalizadorP").innerHTML +=
        `<div class="filacaja">
            <div><img class="imagenCarro" src=${element.imagen}></div>
            <div class="nombCod">
                <div><h3>${element.nombre.split("_").join(" ")}</h3></div>
                <p>codigo: ${element.codigo}<p>
            </div>
            <button id="${element.codigo}"class="btn btn-link px-2" onclick="this.parentNode.querySelector('input[name=${element.nombre}]').stepDown();restar(this);neto()">
            <i class="bi bi-file-minus"></i>
            </button>
            <input id="${element.cuadro}" min="0" name="${element.nombre}" value="${element.cantidad}" type="number" class="form-control form-control-sm" readonly/>
            <button class="btn btn-link px-2" id="${element.codigo}" onclick="this.parentNode.querySelector('input[name=${element.nombre}]').stepUp();sumar(this);neto()">
            <i class="bi bi-file-plus"></i>
            </button>
            <div id="totalUni"><strong>Total de este producto</strong> <br> ${"$"+ element.cantidad*element.precio}</div>
            <i id="trash" class="fa-solid fa-trash" onclick="eliminar(${index})" ></i>
        </div>
        `
    });
}
// quiero agregar el objeto de un arreglo fijo a uno modificable
function agregar(event) {
    var id = event.id;
    var buscaArreglos = bodega.find(bodega => bodega.codigo === id);
    var busCarro = carro.find(carro => carro.codigo === id);
    if (busCarro == undefined){
        // observar si es necesario cambiar las funciones a find
        // let cantidadAdd = document.querySelector("input.cantidad").value;
        let stock = Number(event.getAttribute('data-product'));

        carro.push(bodega[stock]);
        // let ultimaPosicion = carro.length -1;
        // console.log(ultimaPosicion);
        
        // carro[ultimaPosicion].cantidad = Number(cantidadAdd);
        cargar(carro);
    }else{
        alert("Este producto ya ha sido añadido");
    }

}
function sumar(event){
    var id = event.id;

    var buscaItem = carro.find(carro => carro.codigo === id);//recuerda, esto es un objeto

    var cuadro = buscaItem.cuadro;
    let cantidadAdd = document.querySelector("input#"+cuadro).value;
    let cant = document.getElementById("productCount");
    buscaItem.cantidad = Number(cantidadAdd);

    var Total= document.getElementById("totalUni");
    // tProduct = cantidadAdd * buscaItem.precio;
    var posicion = carro.indexOf(buscaItem);

    carro[posicion].cantidad = Number(cantidadAdd);
    tProduct = carro[posicion].precio * Number(cantidadAdd);
    Total.innerHTML = "Total de este producto $ " + tProduct;
    var suma = 0;
    for(var i = 0 ; i < carro.length; i++){
        suma += carro[i].cantidad;
    }
    cant.innerHTML = "Cantidad de Productos: " + suma;
    cargar(carro);
    // let cantidadAdd = document.querySelector("input.cantidad").value;

}
function restar(event){
    var id = event.id;
    var buscaItem = carro.find(carro => carro.codigo === id);//recuerda, esto es un objeto
    var cuadro = buscaItem.cuadro;
    let cant = document.getElementById("productCount");
    let cantidadAdd = document.querySelector("input#"+cuadro).value;
    buscaItem.cantidad = Number(cantidadAdd);
    var Total= document.getElementById("totalUni");
    // tProduct = cantidadAdd * buscaItem.precio;
    var posicion = carro.indexOf(buscaItem);
    carro[posicion].cantidad = Number(cantidadAdd);
    tProduct = carro[posicion].precio * Number(cantidadAdd);
    Total.innerHTML = "Total de este producto $ " + tProduct;
    var suma = 0;
    for(var i = 0 ; i < carro.length; i++){
        suma += carro[i].cantidad;
    }
    cant.innerHTML = "Cantidad de Productos: " +  suma;
    cargar(carro);
    
    // let cantidadAdd = document.querySelector("input.cantidad").value;

}
function eliminar(indice){
    carro[indice].cantidad=0;
    carro.splice(indice,1);
    cargar(carro);
    neto();
}


function neto(){
        var suma = 0;
        for(var i = 0 ; i < carro.length; i++){
            suma += carro[i].cantidad * carro[i].precio;
        }
        let neto = document.getElementById("valorNeto");
        neto.innerHTML= "Total valor Neto: "+ suma;
        let iva = document.getElementById("valorIva");
        let bIva = suma * 0.19
        iva.innerHTML = "Valor IVA: "+ bIva;
        let despacho = document.getElementById("valorDespacho")
        if ((suma+bIva) < 100000){
            var valor=suma*0.05
            despacho.innerHTML = "Total despacho: $"+ (valor);
            despacho = valor
        }else{
            despacho.innerHTML = "Total despacho: GRATIS";
            despacho = 0;
        }
        let total = document.getElementById("valorTotal");
        total.innerHTML = " $"+(suma+despacho+bIva);
        cargar(carro);
        console.log(carro)
    }

function abrirPopup() {
    var popup = document.getElementById("popup");
    popup.classList.add("animate__fadeInUp");
    popup.classList.remove("animate__fadeOutDown");
    popup.style.display = "block";
  }

  function cerrarPopup() {
    var popup = document.getElementById("popup");
    popup.classList.add("animate__fadeOutDown");
    popup.classList.remove("animate__fadeInUp");
    // popup.style.display = "none";
  }

cargar(carro);

//All good