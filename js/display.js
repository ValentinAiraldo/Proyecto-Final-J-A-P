document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});

/*var Usuario =  localStorage.getItem("Usuario")

function getHTML(){
   return `<li class="nav-item">
   <a class="nav-link" href="">${Usuario}</a>
 </li>`
}

document.addEventListener("DOMContentLoaded", async function(){
    const navbar = document.querySelector("#navBar")
    
    navbar.innerHTML += getHTML();  
})*/