//Carrito de compras
let cart_array = [];
let catalog_array = [];

//Productos
catalog_array.push(new catalogo(1, "PC", "INTEL I5 12600K - 16 GB RAM DDR4 3600Mhz - GTX1650 4GB GDDR5 - SSD 480 GB ", "USD", 1350, "../img/PC_INTEL_PROMO2.jpg"))
catalog_array.push(new catalogo(2, "PC", "AMD RYZEN 7 5800X - 16 GB RAM DDR4 3600Mhz - GTX1660 TI 6GB GDDR5 - SSD 1TB ", "USD", 1600, "../img/PC_RYZEN_PROMO.webp"))
catalog_array.push(new catalogo(3, "PC", "INTEL I7 11700F - 32 GB RAM DDR4 3600Mhz - RTX 3060 TI 8GB GDDR 6 - SSD 2TB", "USD", 1990, "../img/PC_INTEL_PROMO3.jpg"))
catalog_array.push(new catalogo(4, "PC", "INTEL I7 11700F - 32 GB RAM DDR4 3600Mhz - SSD 480 GB", "USD", 990, "../img/PC_INTEL_PROMO3.jpg"))
catalog_array.push(new catalogo(5, "PC", "INTEL I5 12600K - 16 GB RAM DDR4 3600Mhz - GTX 1660 TI 6GB GDDR5 - SSD 2TB", "USD", 1399, "../img/PC_INTEL_PROMO2.jpg"))
catalog_array.push(new catalogo(6, "PC", "INTEL I5 11400 - 32 GB RAM DDR4 3600Mhz - RTX 3060 TI 8GB GDDR 6 - SSD 2TB", "USD", 1990, "../img/PC_INTEL_PROMO2.jpg"))
catalog_array.push(new catalogo(7, "PC", "AMD RYZEN 7 5700G - 32 GB RAM DDR4 3600Mhz - SSD 2TB", "USD", 1299, "../img/PC_RYZEN_PROMO.webp"))
catalog_array.push(new catalogo(8, "CPU", "INTEL I7 12700 12 Núcleos 3.6Ghz TURBO 4.8Ghz", "USD", 500, "../img/I7-12700.jpg"))
catalog_array.push(new catalogo(9, "CPU", "AMD RYZEN 9 5950X 16 Núcleos 3.4Ghz TURBO 4.9Ghz ", "USD", 900, "../img/Ryzen9-5950X.jpg"))
catalog_array.push(new catalogo(10, "CPU", "INTEL I5 11400 6 Núcleos 2.6Ghz TURBO 4.4Ghz", "USD", 240, "../img/I5-11400.jpg"))







//Boton vaciar carrito (y session)
const cart_clear = document.getElementById("reset")

cart_clear === null ? console.log("Boton reset No existe en esta pagina") :

    cart_clear.addEventListener("click", () => {
        sessionStorage.clear()
        cart_array = JSON.parse(sessionStorage.getItem('carrito')) || [];
        document.getElementById("pay").style.display = "none"
        empty_cart()
        document.getElementById("subt").innerHTML = ""
        show_Cart()
    })




//Escucho boton para añadir elemento al carrito
const button_add_cart = document.getElementById("button_add_cart")
button_add_cart === null ? console.log("Boton button_add_cart no existe en esta pagina") :
    button_add_cart.addEventListener("click", () => {
        cart_add()
    })

function alerta_producto() {
    Toastify({
        text: "Se agregó el producto al carrito",
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, green , grey )",
        },
        onClick: function () { } // Callback after click
    }).showToast()

    Toastify({
        text: "Haz click aqui para ir al carrito",
        destination: "../pages/cart.html",
        gravity: "bottom",
        duration: 5000,
        newWindow: true
    }).showToast()
}

function alerta_id() {
    Toastify({
        text: "Error! Selecciona un ID válido",
        duration: 3000,
        //destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right,  black ,  grey )",
        },
        onClick: function () { } // Callback after click
    }).showToast()
}



function add_item_cart(add_id) {

    let found = catalog_array.find(element => element.id === add_id);


    if (found == undefined) {

        alerta_id()
    }

    else {

        let encontrado = cart_array.push(found)

        let carrito = sessionStorage.setItem("carrito", JSON.stringify(cart_array)) //Almaceno objeto found en sesion para luego construir cart en el html


        alerta_producto()
        show_Cart()
        get_del_button()




    }


}






function cart_add() {

    let add_id = parseInt(document.getElementById("id_add").value)

    add_item_cart(add_id)
    document.getElementById("id_add").value = ""
}






function cart() {

    let cart_var = "";
    let del_icon
    for (let n = 0; n < cart_array.length; n++) {
        del_icon = '</p><i value="' + n + '" class="fa-solid fa-square-xmark fa-xl" ></i></span>'
        cart_var += "<div id='div_" + n + "' class='animate__animated animate__fadeInUp'><img src='" + cart_array[n].img + "' class='cart-img'><span id='item_cart'><p><b>" + (n + 1) + ")</b> " + cart_array[n].tipo + " " + cart_array[n].char + " " + cart_array[n].div + " " + cart_array[n].precio + del_icon + "<hr></span></div>"
    }

    if (cart_array.length > 0 && document.URL.includes("cart.html")) {
        document.getElementById('title').innerHTML = "Tus artículos en el carrito:  <hr> "
        document.getElementById('subt').innerHTML = "Total a pagar: " + suma()
        pagar = document.getElementById("pay")
        pagar.style.display = "inline"

    }

    return cart_var
}

function show_Cart() {
    if (document.URL.includes("cart.html")) {
        document.getElementById("title").style.cssText = "text-align:center;max-width:50%;max-height:25px;border-radius:10px 10px;margin:auto;letter-spacing:2px;font-size:16px;background:rgba(0,0,0,.80);color:white;font-weigth:600;"
        document.getElementById("carrito").innerHTML = cart()

    }


}

function empty_cart() {
    if (document.URL.includes("cart.html")) {
        document.getElementById("title").innerHTML = "Aún no has agregado nada al carrito"
        document.getElementById("title").style.cssText = "text-align:center;max-width:50%;max-height:25px;border-radius:10px 10px;margin:auto;letter-spacing:2px;font-size:16px;background:rgba(0,0,0,.80);color:white;font-weigth:600;"

    }


}




function get_del_button() { //falta agregar que al hacer click envie el value del boton a del_product

    let buttons = document.getElementsByClassName("fa-square-xmark");
    let i
    for (i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", respuesta)
        function respuesta() {
            for (i = 0; i < buttons.length; i++) {
                console.log(buttons[i].getAttribute('value'))     //obtuve todos los valores -- VER DESDE ACÁ
            }
            alert("boton escucha")


        }


    }










}


function del_product(id) {

    cart_array.splice(id, 1)

    document.getElementById("carrito").innerHTML = cart()
}


function suma() {
    let total = 0
    for (let n = 0; n < cart_array.length; n++) {
        total += cart_array[n].precio
    }
    return "USD " + total
}







console.log("LOG output array catálogo")
console.log(catalog_array)
console.log("LOG output spread array catálogo")
console.log(...catalog_array)


