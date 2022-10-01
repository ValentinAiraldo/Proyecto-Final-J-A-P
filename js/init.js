const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL = "https://japceibal.github.io/emercado-api/sell/publish.json";
const PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/";
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/";
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/";
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const EXT_TYPE = ".json";

let showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

let hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

let getJSONData = function(url){
    let result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}

var Usuario =  localStorage.getItem("Usuario")

function getHTML(){
   return `
   <div class="dropdown" id="User">
   <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">
     ${Usuario}
   </button>
 
   <ul class="dropdown-menu">
     <li><a class="dropdown-item" href="cart.html">Mi carrito</a></li>
     <li><a class="dropdown-item" href="my-profile.html">Mi perfil</a></li>
     <li onclick="deleteUsername()"><a class="dropdown-item" href="index.html">Cerrar sesión</a></li>
   </ul>
 </div>
 `
}

document.addEventListener("DOMContentLoaded", async function(){
  const navbar = document.querySelector("#navBar")
  if(Usuario){ 
    navbar.innerHTML += getHTML(); 
  }
    noUsername()  
  })

function deleteUsername(){
  localStorage.removeItem("Usuario")
}

function noUsername(){
  if (!Usuario){
    location.href = "index.html";
  }
}