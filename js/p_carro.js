let bodega =[
    {cantidad:0, nombre:"Botellas", codigo:"1234", descripcion:"botellas de vidrio", precio:1000, imagen:"/img/gallery/bottles.jpg"},
    {cantidad:0, nombre:"Bote", codigo:"5678", descripcion:"tacho de basurah", precio:3500, imagen:"/img/gallery/botebasura.jpg"},
    {cantidad:0, nombre:"colgante", codigo:"9012", descripcion:"colgante pa guaguas", precio:2750, imagen:"/img/gallery/colgadorjeans.jpg"}
];
let carro =[];
    // posiblemente hay que agregar un onchange en el modificador de precio total
function cargar(arreglo){
    document.querySelector(".totalizadorP").innerHTML="";
    arreglo.forEach((element,index) => {
        document.querySelector(".totalizadorP").innerHTML +=
        `<div class="filacaja">
            <div><img class="imagenCarro" src=${element.imagen}></div>
            <div class="nombCod">
                <div><h3>${element.nombre}</h3></div>
                <div><p>codigo${element.codigo}</div>
            </div>
            <button class="btn btn-link px-2" onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
            <i class="bi bi-file-minus"></i>
            </button>
            <input id="form1" min="0" name="${element.nombre}" value="${element.cantidad}" type="number" class="form-control form-control-sm" readonly/>
            <button class="btn btn-link px-2" id="${element.codigo}" onclick="this.parentNode.querySelector('input[name=${element.nombre}]').stepUp();sumar(this)">
            <i class="bi bi-file-plus"></i>
            </button>
            <div id="totalUni">Total de este producto $ ${element.cantidad*element.precio}</div>
            <span class="material-symbols-outlined" onclick="eliminar(${index})"> delete </span>
        </div>
        `
        console.log(carro);
    });
}
// quiero agregar el objeto de un arreglo fijo a uno modificable
function agregar(event) {
    var id = event.id;
    console.log("ID del botón: " + id);
    var buscaArreglos = bodega.find(bodega => bodega.codigo === id);
    console.log(buscaArreglos);
    var codigoEncontrado = buscaArreglos.codigo;
    console.log(codigoEncontrado);
    var busCarro = carro.find(carro => carro.codigo === id);
    if (busCarro == undefined){
        // observar si es necesario cambiar las funciones a find
        // let cantidadAdd = document.querySelector("input.cantidad").value;
        let stock = Number(event.getAttribute('data-product'));
        console.log(stock)
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
    console.log("ID del botón: " + id);
    var buscaItem = carro.find(carro => carro.codigo === id);//recuerda, esto es un objeto
    console.log(buscaItem);
    let cantidadAdd = document.querySelector("input#form1").value;
    console.log(cantidadAdd);
    buscaItem.cantidad = Number(cantidadAdd);
    console.log(buscaItem);
    var Total= document.getElementById("totalUni");
    // tProduct = cantidadAdd * buscaItem.precio;
    var posicion = carro.indexOf(buscaItem);
    console.log(posicion);
    carro[posicion].cantidad = Number(cantidadAdd);
    tProduct = carro[posicion].precio * Number(cantidadAdd);
    Total.innerHTML = "Total de este producto $ " + tProduct;
    console.log(carro);
    cargar(carro);
    // let cantidadAdd = document.querySelector("input.cantidad").value;

}
function eliminar(indice){
    carro.splice(indice,1);
    cargar(carro);
}

cargar(carro);