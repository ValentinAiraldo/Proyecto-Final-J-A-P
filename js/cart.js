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
               <span class="col d-flex align-content-center flex-wrap"><input size="3px" type="text" name="Unidades" id="unidades" value="${cart.count}" onkeyup="multiplicar()" required></span>
               <span class="col d-flex align-content-center flex-wrap"><b id="subtotal"></b></span>
            </div>
        </div>     
        `;
    }
     document.getElementById("product").innerHTML = htmlContentToAppend;
   }
     
function multiplicar(){  
      cantidad = document.getElementById("unidades").value;
      let currency = cartInfo[0].currency
      let SubTotal1 = document.getElementById("subtotal");
      let subtotal2 = document.getElementById("subtotal2");
      let costo = document.getElementById("costo");
      let total = document.getElementById("total");
      let elementoActivo = document.querySelector('input[name="envio"]:checked'); 
      subtotal = cartInfo[0].unitCost * cantidad;
      if (elementoActivo){
      costoP = elementoActivo.value
      subtotal = cartInfo[0].unitCost * cantidad;
      SubTotal1.innerHTML = currency + subtotal;
      subtotal2.innerHTML = currency + subtotal;
      costoE = subtotal * costoP
      costoF = Math.round(costoE)
      costo.innerHTML = currency + costoF;
      totalP = subtotal + costoE;
      total.innerHTML = currency + totalP;
      } else {
         SubTotal1.innerHTML = currency + subtotal;
         subtotal2.innerHTML = currency + subtotal;
         costo.innerHTML = currency + 0;
         total.innerHTML = currency + subtotal;
      }
}

function pagos(){
   let debito = document.querySelector('input[id="debito"]:checked');
   let credito = document.querySelector('input[id="credito"]:checked');
   let pago = document.getElementById("pago");
   let tipoPago = document.getElementById("tipo-pago");
   if (debito){
    htmlContentToAppend = `<div class="col-6">
    <label for="num-cuenta" class="col-form-label">Número de cuenta</label>
    <input  type="text" class="form-control" id="num-cuenta" required>
    <div class="invalid-feedback">
    Ingresa un número de cuenta
    </div>
  </div>` 
    pago.innerHTML = htmlContentToAppend;
    tipoPago.innerHTML = `Transferencia Bancaria`;
   } else if (credito){
      htmlContentToAppend = ` <div class="row col-12">
      <div class="col-6">
        <label for="num-tarjeta">Número de tarjeta</label>
        <input type="text" class="form-control" id="num-tarjeta" width="525px" required> 
        <div class="invalid-feedback">
        Ingresa un número de tarjeta
        </div>
      </div>

      <div class="col-4">
        <label for="num-tarjeta">Código de seg.</label>
        <input type="text" class="form-control" id="codigo-seg" width="315px" required>
        <div class="invalid-feedback">
        Ingresa un código de seguridad
        </div>
      </div>

      <div class="col-6 mt-2">
       <label for="vencimiento">Vencimiento (MM/AA)</label>
       <input type="text" class="form-control" id="vencimiento" width="315px" required>
       <div class="invalid-feedback">
       Ingresa una fecha de vencimiento
       </div>
     </div>
    </div>
    </div>` 
      pago.innerHTML = htmlContentToAppend;
      tipoPago.innerHTML = `Tarjeta de crédito`;
   }
}

let checkPago1 = document.getElementById("debito");
let checkPago2 = document.getElementById("credito");

function validarPago() {
     let seleccion = document.getElementById("seleccion");
   if (checkPago1.checked || checkPago2.checked) {
     seleccion.innerHTML = ``;
   } else {
     seleccion.innerHTML = `<p class="unchecked">Debe seleccionar una forma de pago</p>`;
   }
 }

checkPago1.onchange = validarPago;
checkPago2.onchange = validarPago;

function showAlertSuccess() {
   document.getElementById("alert-success").classList.add("show");
}

(function () {
   'use strict'
   var forms = document.querySelectorAll('.needs-validation')
   Array.prototype.slice.call(forms)
   .forEach(function (form) {
      form.addEventListener('submit', function (event) {
         if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
         } else {
            showAlertSuccess();
         }
         form.classList.add('was-validated')
      }, false)
   })
})()


document.addEventListener("DOMContentLoaded", function(){
   getJSONData(productCart).then(function (resultObj){
      if(resultObj.status === "ok"){
         cartInfo = resultObj.data.articles;
         getCart();
         multiplicar();
      }    
   })
})  