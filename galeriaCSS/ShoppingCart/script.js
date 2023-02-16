productCount=0;
cartTotal=0;
shoppingTotal=0;
// document.querySelector("addPrice").addEventListener("click",shopAdd);

// function shopAdd(){
//     let price = document.getElementById("addPrice");
//     let cash = Number(price.value);
//     cartTotal = cartTotal + cash;
//     localStorage.shoppingTotal = cartTotal;


// }

// function cartAdd(){
//     // solamente me esta añadiendo 15.000 al valor final, ver problemas con id
//     if (typeof(Storage) !== "undefined") {
//         if (localStorage.productCount) {
//          localStorage.productCount = Number(localStorage.productCount)+1;
//          let addPrice = document.getElementById("addPrice");
//          let price = Number(addPrice.value);
//          localStorage.shoppingTotal = Number(localStorage.shoppingTotal)+price;
//         } 
//         else {
//            localStorage.productCount = 1;
//            let addPrice = document.getElementById("addPrice");
//            let price = Number(addPrice.value);
//            localStorage.shoppingTotal = price;
//         }
//         document.getElementById("productCount").innerHTML = localStorage.productCount;
//         document.getElementById("shoppingTotal").innerHTML = localStorage.shoppingTotal;
//         }
//         else {
//           document.getElementById("productCount").innerHTML = "Oye! tu navegador web no soporta almacenado web :C";
//           document.getElementById("shoppingTotal").innerHTML = "Oye! tu navegador web no soporta almacenado web :C";
//         }
        
//     }
// function resetCart(){
//         if(localStorage.productCount > 0){
//           localStorage.clear();
//           document.getElementById("productCount").innerHTML = 0;
//           document.getElementById("shoppingTotal").innerHTML = 0;
//         //   window.location.reload(); ya no se necesita refrescar pagina
//         }
//         else{
//           alert("No hay articulos en el carro");
//         }  
// }
// function pressAdd(value){
//     localStorage.shoppingTotal = Number((localStorage.shoppingTotal)+value);
//     document.getElementById("shoppingTotal").innerHTML = localStorage.shoppingTotal;




// }
let cartAdd = button => {
    let cash = Number(button.getAttribute('data-price'));
    cartTotal = cartTotal + cash;
    localStorage.shoppingTotal = cartTotal;
    document.getElementById("shoppingTotal").innerHTML = localStorage.shoppingTotal;


}
// https://www.dofactory.com/html/button/data