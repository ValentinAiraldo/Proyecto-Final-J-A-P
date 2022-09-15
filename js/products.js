let catchCatID = localStorage.getItem("catID");

function catID() {
  if (catchCatID != null) return PRODUCTS_URL + catchCatID + EXT_TYPE;
}

const PRODUCT_URL = catID();

const ORDER_ASC_BY_PRICE = "Precio";
const ORDER_DESC_BY_PRICE = "preciO";
const ORDER_BY_SOLD_COUNT = "Cant.";
let currentProductsArray = [];
let currentSortCriteria = undefined;
let minCount = undefined;
let maxCount = undefined;

function sortProducts(criteria, array) {
  let result = [];
  if (criteria == ORDER_ASC_BY_PRICE) {
    result = array.sort(function (a, b) {
      if (a.cost < b.cost) {
        return -1;
      }
      if (a.cost > b.cost) {
        return 1;
      }
      return 0;
    });
  } else if (criteria == ORDER_DESC_BY_PRICE) {
    result = array.sort(function (a, b) {
      if (a.cost > b.cost) {
        return -1;
      }
      if (a.cost < b.cost) {
        return 1;
      }
      return 0;
    });
  } else if (criteria == ORDER_BY_SOLD_COUNT) {
    result = array.sort(function (a, b) {
      let aCount = a.soldCount;
      let bCount = b.soldCount;

      if (aCount > bCount) {
        return -1;
      }
      if (aCount < bCount) {
        return 1;
      }
      return 0;
    });
  }

  return result;
}

function setProductId(id) {
  localStorage.setItem("product-id", id);
  window.location = "product-info.html"
}

function showProductsList() {
  let htmlContentToAppend = "";
  for (let i = 0; i < currentProductsArray.length; i++) {
    let producto = currentProductsArray[i];

    if (
      (minCount == undefined || producto.cost >= minCount) &&
      (maxCount == undefined || producto.cost <= maxCount)
    ) {
      htmlContentToAppend += ` 
            <div onclick="setProductId(id)" class="row shadow p-0 rounded overflow-hidden mb-3 bg-white texto cursor-active" id="${producto.id}">
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
             `;
    }

    document.getElementById("product-list").innerHTML = htmlContentToAppend;
  }
}

function sortAndShowProducts(sortCriteria, productsArray) {
  currentSortCriteria = sortCriteria;

  if (productsArray != undefined) {
    currentProductsArray = productsArray;
  }

  currentProductsArray = sortProducts(
    currentSortCriteria,
    currentProductsArray
  );

  //Muestro las categorías ordenadas
  showProductsList();
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
  getJSONData(PRODUCT_URL).then(function (resultObj) {
    if (resultObj.status === "ok") {
      currentProductsArray = resultObj.data.products;
      showProductsList();
      //sortAndShowProducts(ORDER_ASC_BY_PRICE, resultObj.data);
    }
  });

  document.getElementById("sortAsc").addEventListener("click", function () {
    sortAndShowProducts(ORDER_ASC_BY_PRICE);
  });

  document.getElementById("sortDesc").addEventListener("click", function () {
    sortAndShowProducts(ORDER_DESC_BY_PRICE);
  });

  document.getElementById("sortByCount").addEventListener("click", function () {
    sortAndShowProducts(ORDER_BY_SOLD_COUNT);
  });

  document
    .getElementById("clearRangeFilter")
    .addEventListener("click", function () {
      document.getElementById("rangeFilterCountMin").value = "";
      document.getElementById("rangeFilterCountMax").value = "";

      minCount = undefined;
      maxCount = undefined;

      showProductsList();
    });

  document
    .getElementById("rangeFilterCount")
    .addEventListener("click", function () {
      //Obtengo el mínimo y máximo de los intervalos para filtrar por cantidad
      //de precio por producto.
      minCount = document.getElementById("rangeFilterCountMin").value;
      maxCount = document.getElementById("rangeFilterCountMax").value;

      if (minCount != undefined && minCount != "" && parseInt(minCount) >= 0) {
        minCount = parseInt(minCount);
      } else {
        minCount = undefined;
      }

      if (maxCount != undefined && maxCount != "" && parseInt(maxCount) >= 0) {
        maxCount = parseInt(maxCount);
      } else {
        maxCount = undefined;
      }

      showProductsList();
    });
});
