let catchCatID = localStorage.getItem("catID");

function catID(){
    if (catchCatID != null) 
    return PRODUCTS_URL + catchCatID + EXT_TYPE
}

const URL = catID() ;

function getHTML(producto) {
    return  ` 
    <div class="row shadow p-0 rounded overflow-hidden mb-3 bg-white" data-id="${producto.id}">
         <div class="col-3 p-0"> 
             <img class="img-fluid" src="${producto.image}" alt=""> </img>
         </div>
         <div class="col-9 d-flex flex-column justify-content-between">
             <div class="productoBody">
            <h3>${producto.name}</h3>
            <p>${producto.description}</p>
      </div>  
         <div class="productoFooter d-flex justify-content-between">
         <p>Cantidad vendidos: <span class="cant"> ${producto.soldCount} </span></p>    
         <div class="precio">
         <span class="moneda"> ${producto.currency}</span>
         <span class="precio"> ${producto.cost} </span>
         </div>
         </div>
       </div> 
     </div>
     ` ; 
}


document.addEventListener("DOMContentLoaded", async function(){
    const listado = document.querySelector(".product-list")
    
    const listaProductos = await getJSONData(URL);
    
    listaProductos.data.products.forEach(producto => {
        listado.innerHTML += getHTML(producto);
    });
        
})