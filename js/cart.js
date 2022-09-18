//Array carrito
let cart_array = [];
//Array catalogo
let catalog_array = [];



//Boton vaciar carrito (y session)
const cart_clear = document.getElementById("reset")

cart_clear === null ? "" :

    cart_clear.addEventListener("click", () => {
        sessionStorage.removeItem('carrito')
        cart_array = JSON.parse(sessionStorage.getItem('carrito')) || [];
        document.getElementById("pay").style.display = "none"
        document.getElementById("counter").innerText = "0"
        document.getElementById("pay_popup").classList.remove("open_pay_popup")
        empty_cart()
        document.getElementById("subt").innerHTML = ""
        show_Cart()
    })

const pay_btn = document.getElementById("pay")
pay_btn === null ? "" :
    pay_btn.addEventListener("click", () => {
        document.getElementById("pay_popup").classList.add("open_pay_popup")

        if (document.querySelectorAll('input[type="checkbox"]:checked').length > 0) {

            alert("PAGO REALIZADO CON ÉXITO!! \n SE RECARGARÁ LA PÁGINA")
            sessionStorage.removeItem("carrito")
            document.location.reload()
        }
        else {

        }


        /*       if (document.getElementById("check").checked) {
                  console.log(document.getElementById("check").checked)
                  console.log("está clickeada")
              }
             else {
              console.log(document.getElementById("check"))
                  console.log("no está clickeada")
              } */

    })






//Alerta de producto agregado exitosamente
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
//Alerta cuando no hay usuario logueado
function alerta_id() {
    Toastify({
        text: "Error! Debes loguearte primero",
        duration: 3000,
        //destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right,  skyblue ,  orange )",
        },
        onClick: function () { } // Callback after click
    }).showToast()
}

function alerta_del() {
    Toastify({
        text: "Eliminaste producto del carrito",
        duration: 3000,
        //destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right,  black ,  black )",
        },
        onClick: function () { } // Callback after click
    }).showToast()
}



function button_add_cart() {

    let add_cart = document.getElementsByClassName("add_cart");

    Object.keys(add_cart).forEach(function (element) {
        add_cart[element].addEventListener("click", function (evento) {
            add_cart_click = evento.target
            id = add_cart_click.getAttribute('id')

            add_item_cart(parseInt(id))

        })

    });
}



//Funcion que agrega item a carrito y a session. Luego llama a funcion de toastify y llama mostrar carrito
function add_item_cart(add_id) {

    let found = catalog_array.find(element => element.id === add_id);


    if (user_array.length == 0) {
        alerta_id()
    }

    else {

        let encontrado = cart_array.push(found)
        document.getElementById("counter").innerText = cart_array.length
        let carrito = sessionStorage.setItem("carrito", JSON.stringify(cart_array)) //Almaceno objeto found en sesion para luego construir cart en el html


        alerta_producto()
        show_Cart()





    }
}



//Funcion generadora de catalogos en DOM , BOOTSTRAP Y BOX MODELING
function market() {
    let of = "OFERTA"
    let pc = "PC"
    let cpu = "CPU"
    let accs = "PERIFERICOS"

    if (document.URL.includes("market.html")) { market_boostrap(of) }
    if (document.URL.includes("market-pcgamer.html")) { market_boxmodel(pc) }
    if (document.URL.includes("market-cpu.html")) { market_boxmodel(cpu) }
    if (document.URL.includes("market-accs.html")) { market_boxmodel(accs) }



    function market_boostrap(tipo) {

        let of_array = catalog_array.filter(element => element.tipo === tipo)

        let dom = document.getElementById("market_gen")

        of_array.forEach(element => {
            dom.innerHTML += `         
            <div class="card" data-aos="zoom-in">
            <a href="#"><img src="${element.img}" class="card-img-top" alt="${element.tipo} ${element.id}"></a>
            <div class="card-body">
              <h5 class="card-title-market">${element.tipo} PC GAMER ${element.char.substr(0, 5)} <p><b>${element.precio} ${element.div} </b></p>
              </h5>
              <p class="card-text-market">Especificaciones: ${element.char} </p><a class="btn btn-primary add_cart" role="button" id="${element.id} ">Agregar al carrito</a>
              <p class="card-text-market"><small class="text-muted">Oferta hasta agotar stock</small></p>
            </div>
          </div>
          </div>`

        });


    }


    function market_boxmodel(tipo) {
        let cat_array = catalog_array.filter(element => element.tipo === tipo)

        let dom = document.getElementById("market_gen")

        cat_array.forEach(element => {
            dom.innerHTML += `<div class="market_product animate__animated animate__backInUp animate__delay-0.8s">
        <a href="#">
           <img src="${element.img} " alt="${element.char} " class="product">
        </a>
        <h6>${element.char}</h6>
        <p><b>${element.precio} ${element.div}  </b></p>
        <a class="btn btn-primary add_cart" role="button" id="${element.id}">Agregar al carrito</a>
     </div>`

        })



    }
}




//Funcion generadora de carrito en DOM
function cart() {

    let cart_var = "";
    let del_icon
    for (let n = 0; n < cart_array.length; n++) {
        del_icon = '</p><i value="' + n + '" class="fa-solid fa-square-xmark fa-xl" ></i></span>'
        cart_var += "<div id='div_" + n + "' class='animate__animated animate__fadeInUp'><img src='" + cart_array[n].img + "' class='cart-img'><span id='item_cart'><p><b>" + (n + 1) + ")</b> " + cart_array[n].tipo + " " + cart_array[n].char + " " + cart_array[n].div + " " + cart_array[n].precio + del_icon + "<hr></span></div>"
    }

    if (cart_array.length > 0 && document.URL.includes("cart.html")) {
        document.getElementById('title').innerHTML = "Tus artículos en el carrito:  <br> "
        document.getElementById('subt').innerHTML = "Total a pagar: " + suma()
        pagar = document.getElementById("pay")
        pagar.style.display = "inline"

    }

    return cart_var
}
//Funcion que se invoca cuando se necesita hacer una actualizacion del dom carrito
function show_Cart() {
    if (document.URL.includes("cart.html")) {
        document.getElementById("title").style.cssText = "text-align:center;max-width:50%;max-height:25px;border-radius:10px 10px;margin:auto;letter-spacing:2px;font-size:16px;background:rgba(0,0,0,.80);color:white;font-weigth:600;margin-top:3%;"
        document.getElementById("reset").style = "display:inline;"
        document.getElementById("carrito").innerHTML = cart()

    }


}
//Funcion que se invoca cuando el carrito está vacio para modificar algunos elementos del DOM
function empty_cart() {
    if (document.URL.includes("cart.html")) {
        document.getElementById("title").innerHTML = "Aún no has agregado nada al carrito"
        document.getElementById("title").style.cssText = "text-align:center;max-width:50%;max-height:25px;border-radius:10px 10px;margin:auto;letter-spacing:2px;font-size:16px;background:rgba(0,0,0,.80);color:white;font-weigth:600;margin-top:3%;"
        document.getElementById("pay").style.display = "none"
        document.getElementById("reset_div").style.display = "none"
        document.getElementById('subt').innerHTML = ""
    }


}


//Funcion que reconoce evento de click sobre boton de eliminar producto y obtiene value del boton 
function get_del_button() {
    let buttons = document.getElementsByClassName("fa-square-xmark");

    Object.keys(buttons).forEach(function (element) {
        buttons[element].addEventListener("click", function (evento) {
            buttons_click = evento.target
            id = buttons_click.getAttribute('value')

            del_product(id)

        })

    });

}

//Funcion que deletea producto ID de cart_array y de session y luego actualiza carrito en el dom y vuelve a llamar funcion de escuchar botones 
function del_product(id) {

    cart_array.splice(id, 1)
    let session_array = JSON.parse(sessionStorage.getItem('carrito'))
    session_array.splice(id, 1)
    sessionStorage.setItem('carrito', JSON.stringify(session_array))
    document.getElementById("counter").innerText = cart_array.length
    alerta_del()

    cart_array.length === 0 ? empty_cart() + show_Cart() : show_Cart()
    get_del_button()
}

//Actualiza valor suma
function suma() {
    let total = 0
    for (let n = 0; n < cart_array.length; n++) {
        total += cart_array[n].precio
    }
    return "USD " + total
}



