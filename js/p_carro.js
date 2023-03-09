let bodega =[
    {cantidad:0, cuadro:"A", nombre:"Botellas", codigo:"1234", descripcion:"botellas de vidrio", precio:10000, imagen:"/img/gallery/bottles.jpg"},
    {cantidad:0, cuadro:"B", nombre:"Bote", codigo:"5678", descripcion:"tacho de basurah", precio:3500, imagen:"/img/gallery/botebasura.jpg"},
    {cantidad:0, cuadro:"C", nombre:"colgante", codigo:"9012", descripcion:"colgante pa guaguas", precio:2750, imagen:"/img/gallery/colgadorjeans.jpg"}
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
            <button id="${element.codigo}" class="btn btn-link px-2" onclick="this.parentNode.querySelector('input[name=${element.nombre}]').stepDown();restar(this);neto()">
            <i class="bi bi-file-minus"></i>
            </button>
            <input id="${element.cuadro}" min="0" name="${element.nombre}" value="${element.cantidad}" type="number" class="form-control form-control-sm" readonly/>
            <button class="btn btn-link px-2" id="${element.codigo}" onclick="this.parentNode.querySelector('input[name=${element.nombre}]').stepUp();sumar(this);neto()">
            <i class="bi bi-file-plus"></i>
            </button>
            <div id="totalUni">Total de este producto $ ${element.cantidad*element.precio}</div>
            <span class="material-symbols-outlined pointer" onclick="eliminar(${index})"> Delete </span>
        </div>
        `
    });
}
// quiero agregar el objeto de un arreglo fijo a uno modificable
function agregar(event) {
    var id = event.id;

    var buscaArreglos = bodega.find(bodega => bodega.codigo === id);

    var codigoEncontrado = buscaArreglos.codigo;

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

    buscaItem.cantidad = Number(cantidadAdd);

    var Total= document.getElementById("totalUni");
    // tProduct = cantidadAdd * buscaItem.precio;
    var posicion = carro.indexOf(buscaItem);

    carro[posicion].cantidad = Number(cantidadAdd);
    tProduct = carro[posicion].precio * Number(cantidadAdd);
    Total.innerHTML = "Total de este producto $ " + tProduct;

    cargar(carro);
    // let cantidadAdd = document.querySelector("input.cantidad").value;

}
function restar(event){
    var id = event.id;

    var buscaItem = carro.find(carro => carro.codigo === id);//recuerda, esto es un objeto

    var cuadro = buscaItem.cuadro;
    let cantidadAdd = document.querySelector("input#"+cuadro).value;

    buscaItem.cantidad = Number(cantidadAdd);

    var Total= document.getElementById("totalUni");
    // tProduct = cantidadAdd * buscaItem.precio;
    var posicion = carro.indexOf(buscaItem);

    carro[posicion].cantidad = Number(cantidadAdd);
    tProduct = carro[posicion].precio * Number(cantidadAdd);
    Total.innerHTML = "Total de este producto $ " + tProduct;

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
        if (suma < 100000){
            var valor=suma*0.05
            despacho.innerHTML = "Total despacho: $"+ (valor);
            despacho = valor
        }else{
            despacho.innerHTML = "Total despacho: GRATIS";
            despacho = 0;
        }
        
        let total = document.getElementById("valorTotal");
        total.innerHTML = "Total + Impuestos: $"+ (suma+despacho+bIva);

        cargar(carro);
}

function abrirPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
  }
  
  function cerrarPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
  }

cargar(carro);