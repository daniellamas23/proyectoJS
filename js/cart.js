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






// Escucho boton texto session storage
const listar = document.getElementById("button_list");

listar === null ? console.log("Boton button_list No existe en esta pagina") : 

listar.addEventListener("click", () => {
    let div = document.getElementById("div_session")

    if (sessionStorage.length == 0) {
        alert("aun no has guardado objetos en session storage")

        listar.innerHTML = "Haz click para ver objetos almacenados en local storage (prueba agregando un objeto al carrito)"
    }

    if (div.textContent.length > 0) { }
    else {
        verSessionStorage()

    }

}
);
//Veo session storage
function verSessionStorage() {
    let div = document.getElementById("div_session")
    for (let i = 0; i < sessionStorage.length; i++) {
        let clave = sessionStorage.key(i);
        let valor = sessionStorage.getItem(clave)
        div.innerHTML += clave + ")" + valor + "<br>"

    }

}
//Boton reseteo sesion storage


const session_clear = document.getElementById("reset") //reseteo para trabajar con storage limpio

session_clear === null ? console.log("Boton reset No existe en esta pagina") : 

session_clear.addEventListener("click", () => {
    sessionStorage.clear()
})

const ver_cat = document.getElementById("ver_cat");

ver_cat === null ? console.log("Boton ver_cat no existe en esta pagina") :

ver_cat.addEventListener("click", () => {

    cart_array.length === 0 ? alert("Aun no hay objetos en el carrito") : document.getElementById("carrito").innerHTML = cart(), get_del_button()

});


//Escucho boton para añadir elemento al carrito
const button_add_cart = document.getElementById("button_add_cart")
button_add_cart === null ? console.log("Boton button_add_cart no existe en esta pagina") :
button_add_cart.addEventListener("click", () => {
    cart_add()
})






function add_item_cart(add_id) {

    let found = catalog_array.find(element => element.id === add_id);


    if (found == undefined) {

        alert("ERROR! \n Debiste seleccionar un ID de producto válido")
    }

    else {

        let encontrado = cart_array.push(found)

        let carrito = sessionStorage.setItem("carrito", JSON.stringify(cart_array)) //Almaceno objeto found en sesion para luego construir cart en el html





        alert("Se agregó al carrito el producto " + found.tipo + " " + found.char + " " + found.div + " " + found.precio)
        
        document.getElementById('title').innerHTML = "Tus artículos en el carrito:  <hr> "   
        document.getElementById("carrito").innerHTML = cart()
        get_del_button()
        document.getElementById('subt').innerHTML = "Total a pagar: " + suma()
        pagar = document.getElementById("pay")
        pagar.style.display = "inline"





        return carrito

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
        cart_var += "<div id='div_" + n + "'><img src='" + cart_array[n].img + "' class='cart-img'><span id='item_cart'><p><b>" + (n + 1) + ")</b> " + cart_array[n].tipo + " " + cart_array[n].char + " " + cart_array[n].div + " " + cart_array[n].precio + del_icon + "<hr></span></div>"
    }


    return cart_var
}



function get_del_button() { //falta agregar que al hacer click envie el value del boton a del_product

    let buttons = document.getElementsByClassName("fa-square-xmark");
    let i
    for (i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", respuesta)
        function respuesta() {

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



function stock() {

    let stock = "";
    for (let i = 0; i < catalog_array.length; i++) {
        stock += catalog_array[i].mostar_catalogo();
    }

    return stock;

}






console.log("LOG output array catálogo")
console.log(catalog_array)
console.log("LOG output spread array catálogo")
console.log(...catalog_array)


