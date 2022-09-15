const catchProductID = localStorage.getItem("product-id")

function productID(){
    if (catchProductID) 
    return PRODUCT_INFO_URL + catchProductID + EXT_TYPE
}

function commentsID(){
   if(catchProductID)
   return PRODUCT_INFO_COMMENTS_URL + catchProductID + EXT_TYPE
}

const product_URL = productID();

const comments_URL = commentsID();

let productInfo = [];

let commentsInfo = [];

function showProduct() {
    htmlContentToAppend = ""; 
    let  producto = productInfo;
    htmlContentToAppend +=
        `<div class="row my-3 mx-1 d-flex" id= "${producto.id}">
           <div class="row">
               <h3>${producto.name}</h3> 
           </div>
           <hr>
           <div class="row">
             <div>
               <b>Precio</b>
              <div>
                 <span>${producto.currency}</span>
                 <span>${producto.cost}</span>
              </div>   
             </div>
              <div>
                 <b>Descripción</b>
                 <p>${producto.description}</p>
              </div>
              <div>
                 <b>Categoria</b>
                 <p>${producto.category}</p>
              </div>
              <div> 
                 <b>Cantidad de vendidos</b>
                 <p>${producto.soldCount}</p>
              </div>
             <div>
                 <b>Imagenes Ilustrativas</b>
               <div class="row" id="images">
              
               </div>
             </div>
           </div>
         </div> `;

         document.getElementById("container").innerHTML = htmlContentToAppend;

}

function showImages(){
   htmlContentToAppend = "";
   for(i = 0; i < productInfo.images.length; i++ ){
      let images = productInfo.images[i]
      htmlContentToAppend +=
      `<div class="col-3"><img class="img-fluid" src="${images}" alt=""></div>
                `;
   }
   document.getElementById("images").innerHTML = htmlContentToAppend
}

function showComments(){
   htmlContentToAppend = "";
   for(i = 0; i < commentsInfo.length; i++){
      let comment = commentsInfo[i]
     if (comment.score == 1) { 
            htmlContentToAppend += 
      `
      <div class="row" id="comment">
      <div class="col-12 justify-content-between" id="">
         <b class="col-3"><span>${comment.user}</span></b>
         <span class="col-3"> - ${comment.dateTime} - </span>
         <span class="col-3" id="score">
                  <span class="fa fa-star checked" id="option1"></span>
                  <span class="fa fa-star" id="option2"></span>
                  <span class="fa fa-star" id="option3"></span>
                  <span class="fa fa-star" id="option4"></span>
                  <span class="fa fa-star" id="option5"></span> 
         </span>    
      </div>
      <div class="row col-9">
      <p>${comment.description}</p>
      </div>
      <hr>
      </div>`;
      
      document.getElementById("comments").innerHTML = htmlContentToAppend;
      }
      if (comment.score == 2) { 
         htmlContentToAppend += 
      `
      <div class="row" id="comment">
      <div class="col-12 justify-content-between" id="">
         <b class="col-3"><span>${comment.user}</span></b>
         <span class="col-3"> - ${comment.dateTime} - </span>
         <span class="col-3" id="score">
               <span class="fa fa-star checked" id="option1"></span>
               <span class="fa fa-star checked" id="option2"></span>
               <span class="fa fa-star" id="option3"></span>
               <span class="fa fa-star" id="option4"></span>
               <span class="fa fa-star" id="option5"></span> 
         </span>    
      </div>
      <div class="row col-9">
      <p>${comment.description}</p>
      </div>
      <hr>
      </div>`;
   
      document.getElementById("comments").innerHTML = htmlContentToAppend;
      }     
      if (comment.score == 3) {
         htmlContentToAppend +=
            `
      <div class="row" id="comment">
      <div class="col-12 justify-content-between" id="">
         <b class="col-3"><span>${comment.user}</span></b>
         <span class="col-3"> - ${comment.dateTime} - </span>
         <span class="col-3" id="score">
                  <span class="fa fa-star checked" id="option1"></span>
                  <span class="fa fa-star checked" id="option2"></span>
                  <span class="fa fa-star checked" id="option3"></span>
                  <span class="fa fa-star" id="option4"></span>
                  <span class="fa fa-star" id="option5"></span> 
         </span>    
      </div>
      <div class="row col-9">
      <p>${comment.description}</p>
      </div>
      <hr>
      </div>`;

      document.getElementById("comments").innerHTML = htmlContentToAppend;
      }     
      if (comment.score == 4) {
         htmlContentToAppend +=
            `
      <div class="row" id="comment">
      <div class="col-12 justify-content-between" id="">
         <b class="col-3"><span>${comment.user}</span></b>
         <span class="col-3"> - ${comment.dateTime} - </span>
         <span class="col-3" id="score">
                  <span class="fa fa-star checked" id="option1"></span>
                  <span class="fa fa-star checked" id="option2"></span>
                  <span class="fa fa-star checked" id="option3"></span>
                  <span class="fa fa-star checked" id="option4"></span>
                  <span class="fa fa-star" id="option5"></span> 
         </span>    
      </div>
      <div class="row col-9">
      <p>${comment.description}</p>
      </div>
      <hr>
      </div>`;

         document.getElementById("comments").innerHTML = htmlContentToAppend;
      }   
      if (comment.score == 5) {
         htmlContentToAppend +=
            `
      <div class="row" id="comment">
      <div class="col-12 justify-content-between" id="">
         <b class="col-3"><span>${comment.user}</span></b>
         <span class="col-3"> - ${comment.dateTime} - </span>
         <span class="col-3" id="score">
                  <span class="fa fa-star checked" id="option1"></span>
                  <span class="fa fa-star checked" id="option2"></span>
                  <span class="fa fa-star checked" id="option3"></span>
                  <span class="fa fa-star checked" id="option4"></span>
                  <span class="fa fa-star checked" id="option5"></span> 
         </span>    
      </div>
      <div class="row col-9">
      <p>${comment.description}</p>
      </div>
      <hr>
      </div>`;

         document.getElementById("comments").innerHTML = htmlContentToAppend;
      }   
      //console.log(htmlContentToAppend);
   }
} 
   
document.addEventListener("DOMContentLoaded", function(e){
   getJSONData(product_URL).then(function (resultObj) {
      if (resultObj.status === "ok") { 
          productInfo = resultObj.data;
          showProduct()
          showImages()
         }
   }) 
   getJSONData(comments_URL).then(function (resultObj){
      if(resultObj.status === "ok"){
         commentsInfo = resultObj.data;
         showComments()
      }
   })
})
