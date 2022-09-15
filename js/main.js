

//Arreglos para usuarios y catalogos
let user_array = [];

//Se carga catalogo en diferido con fetch
function cargar_catalogo() {
    fetch('../js/catalog.json').then(
        (respuesta) =>
            respuesta.json()

    ).then((catalog) => {

        catalog.forEach(element => {
            catalog_array.push(new catalogo(element.id, element.tipo, element.char, element.div, element.precio, element.img))

        })

    }).then(() => {
        market()
    })
}
document.URL.includes("index.html") ? "" : cargar_catalogo(); //Evito error en index porque no encuentra la ruta para catalog.json



const login = document.getElementById('login_btn')
login === null ? "" :
    login.addEventListener("click", () => {
        if (user_array.length > 0) {
            alert("ya te encuentras logueado")
        }
        else {
            add_class = document.getElementById("popup")
            add_class.classList.add("open_popup");
        }
    })

const close_popup = document.getElementById('cross_btn')
close_popup === null ? "" :
    close_popup.addEventListener("click", () => {
        let del_class = document.getElementById("popup")
        del_class.classList.remove("open_popup")
    })



// Evento que se dispara cuadno se carga la pagina
document.addEventListener('DOMContentLoaded', () => {

    sessionStorage.removeItem("IsThisFirstTime_Log_From_LiveServer"); //elimino clave-valor generada por live server
    cart_array = JSON.parse(sessionStorage.getItem('carrito')) || [];
    user_array = JSON.parse(sessionStorage.getItem('user')) || [];
    document.URL.includes("cart.html") && cart_array.length > 0 ? show_Cart() + get_del_button() : empty_cart();
}
)



const acceder = document.getElementById("acceder");
acceder === null ? "" :
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
        let user_session = sessionStorage.setItem("user", JSON.stringify(user_array))


        setTimeout(login_sucesfull, 1000)
        function login_sucesfull() {
            let bienvenida = document.getElementById("bienvenido")
            bienvenido.innerText = "Bienvenido " + user1.bienvenida() + " !!!"
            boton = document.getElementById("button_cart")
            boton.style = "text-align:center;"
            document.getElementById("tick").style = "display:inline;max-width:15%;margin-right: 35%;"
            document.getElementById("acceder").style = "display:none"
            document.getElementById("user").style = "display:none"
            document.getElementById("pass").style = "display:none"
            return user1

        }

    }

}


