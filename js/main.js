

//Arreglos para usuarios y catalogos
let user_array = [];


function cargar_catalogo() {
    fetch('../js/catalog.json').then(
        (respuesta) =>
            respuesta.json()

    ).then((catalog) => {

        catalog.forEach(element => {
            catalog_array.push(new catalogo(element.id, element.tipo, element.char, element.div, element.precio, element.img))

        })

    })
}
document.URL.includes("index.html")  ? "" : cargar_catalogo(); //Evito error en index porque no encuentra la ruta para catalog.json





// Evento que se dispara cuadno se carga la pagina
document.addEventListener('DOMContentLoaded', () => {

    sessionStorage.removeItem("IsThisFirstTime_Log_From_LiveServer"); //elimino clave-valor generada por live server
    cart_array = JSON.parse(sessionStorage.getItem('carrito')) || [];
    document.URL.includes("cart.html") && cart_array.length > 0 ? show_Cart() + get_del_button() : empty_cart();
    console.log(document.URL.includes("cart.html"))
    /*  if (document.URL.includes("cart.html") && cart_array.length > 0 ) {
        show_Cart()
        get_del_button()
    }
    else{
        empty_cart() 
        console.log("nada en carrito")
    }  */

}
)




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
acceder === null ? console.log("boton acceder no existe en esta pagina") :
    acceder.addEventListener("click", () => {

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


