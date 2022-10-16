const productCart = CART_INFO_URL + 25801 + EXT_TYPE

let cartInfo = [];

let cantidad;


function getCart(){
    htmlContentToAppend = "";
    for(i = 0; i < cartInfo.length; i++){
        let cart = cartInfo[i]
        htmlContentToAppend += `
        <div class="row pb-3">
            <h3 class="text-center my-3">Carritos de Compras</h3>
            <div class="row">
               <h4>Articulos a comprar</h4>
            </div>
            <div class="col-10 d-flex flex-row row-cols-lg-5">
               <span class="col"></span>
               <span class="col"><strong>Nombre</strong></span> 
               <span class="col"><strong>Costo</strong></span>
               <span class="col"><strong>Cantidad</strong></span>
               <span class="col"><strong>SubTotal</strong></span>
            </div>
            <hr>
            <div class="col-10 d-flex flex-row justify-content-around row-cols-lg-5">
               <span class="col"><img class="img-fluid" src="${cart.image}" width="80px" alt=""></span>
               <span class="col d-flex align-content-center flex-wrap">${cart.name}</span>
               <span class="col d-flex align-content-center flex-wrap">${cart.currency}${cart.unitCost}</span>
               <span class="col d-flex align-content-center flex-wrap"><input size="3px" type="text" name="Unidades" id="unidades" value="${cart.count}" onkeyup="multiplicar()"></span>
               <span class="col d-flex align-content-center flex-wrap"><b id="subtotal"></b></span>
            </div>
        </div>     
        `;
    }
     document.getElementById("product").innerHTML = htmlContentToAppend;
}

function multiplicar(){
   cantidad = document.getElementById("unidades").value;
   let SubTotal = document.getElementById("subtotal");
   if (cantidad != 0){
    subtotal = cartInfo[0].unitCost * cantidad
    SubTotal.innerHTML = cartInfo[0].currency + subtotal
   }
}

document.addEventListener("DOMContentLoaded", function(){
    getJSONData(productCart).then(function (resultObj){
        if(resultObj.status === "ok"){
           cartInfo = resultObj.data.articles;
           getCart();
           multiplicar()
        }
     })    
})