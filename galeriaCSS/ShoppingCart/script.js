productCount=0;
cartTotal=0;
shoppingTotal=0;
// funcion de sumar numero de productos y total de carro
let cartAdd = button => {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.productCount && localStorage.shoppingTotal) {
            localStorage.productCount = Number(localStorage.productCount)+1;
            let cash = Number(button.getAttribute('data-price'));
            cartTotal = cartTotal + cash;
            localStorage.shoppingTotal = cartTotal;
            document.getElementById("shoppingTotal").innerHTML = localStorage.shoppingTotal;
            document.getElementById("productCount").innerHTML = localStorage.productCount;
        }
        // else da un valor inicial al "undefined" de localStorage
        else{ 
            localStorage.productCount = 1;
            let cash = Number(button.getAttribute('data-price'));
            cartTotal = 0;
            cartTotal = cartTotal + cash;
            localStorage.shoppingTotal = cartTotal;
        }
        document.getElementById("productCount").innerHTML = localStorage.productCount;
        document.getElementById("shoppingTotal").innerHTML = localStorage.shoppingTotal;
        }
}
// funcion de limpiar carro de compra
function resetCart(){
    if(localStorage.productCount > 0 || localStorage.shoppingTotal>0){
      localStorage.clear();
      document.getElementById("productCount").innerHTML = 0;
      document.getElementById("shoppingTotal").innerHTML = 0;
    //   window.location.reload(); ya no se necesita refrescar pagina
    }
    else{
      alert("No hay articulos en el carro");
    }  
}
function payUp(){
    if(localStorage.productCount > 0 && localStorage.shoppingTotal>0){
        localStorage.clear();
        document.getElementById("productCount").innerHTML = 0;
        document.getElementById("shoppingTotal").innerHTML = 0;
        alert("Has pagado satisfactoriamente");
    }
    else{
        alert("No hay articulos en su carro")
    }
}
// https://www.dofactory.com/html/button/data explica como obtener valores por medio de "data"