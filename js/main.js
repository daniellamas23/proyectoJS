



//Arreglos para usuarios y catalogos
let user_array = [];
let catalog_array = [];




//Constructor de objetos con clase
class usuario {

    constructor(user, pass) {

        this.user = user
        this.pass = pass

    }

    bienvenida() {
        return this.user
    }

}

const acceder = document.getElementById("acceder");

acceder.addEventListener("click",() => {

	crear_usuario();
});




function crear_usuario() {
    let user = document.getElementById("user").value
    let pass = document.getElementById("pass").value


    if (user.length == 0 || pass.length == 0) {
        alert("Ingrese usuario y contraseña para acceder")
        document.getElementById("user").value = ""
        document.getElementById("pass").value = ""

    }
    else {
        let user1 = new usuario(user, pass)
        user_array.push(user1)
        console.log("LOG output array usuarios")
        console.log(user_array)
        let bienvenida = document.getElementById("bienvenido")
        bienvenido.innerText = "Bienvenido " + user1.bienvenida() + " !!!"
        boton = document.getElementById("button_cart")
        boton.style.display = "inline"
        return user1 
     }     
      
    }

