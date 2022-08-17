function showAlertEmailIncorrect() {
    document.getElementById("alert-danger-email").classList.add("show");
}

function showAlertPasswordIncorrect() {
    document.getElementById("alert-danger-password").classList.add("show");
}

document.addEventListener("DOMContentLoaded", ()=> {
    const boton = document.querySelector("button");

    boton.addEventListener("click", (evento)=>{
        evento.preventDefault();
        const email = document.querySelector("#email");
        const password = document.querySelector("#password");

         if (email.value === ""){ 
            showAlertEmailIncorrect()
        } else { 
            if (password.value === "" )
            showAlertPasswordIncorrect() 
        } 
    })
})

