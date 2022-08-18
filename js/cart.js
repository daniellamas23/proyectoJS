let catalog_array = [];
//Carrito de compras
let cart_array = [];




const listar = document.getElementById("button_list");

listar.addEventListener("click", () => {
    let div = document.getElementById("div_session")
    sessionStorage.removeItem("IsThisFirstTime_Log_From_LiveServer"); //elimino clave-valor generada por live server
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

function verSessionStorage() {
    let div = document.getElementById("div_session")
    for (let i = 0; i < sessionStorage.length; i++) {
        let clave = sessionStorage.key(i);
        let valor = sessionStorage.getItem(clave)
        div.innerHTML += clave + ")" + valor + "<br>"

    }

}

const session_clear = document.getElementById("reset") //reseteo para trabajar con storage limpio
    session_clear.addEventListener("click", () => {
        sessionStorage.clear() 
 })




const button_add_cart = document.getElementById("button_add_cart")
button_add_cart.addEventListener("click", () => {
    cart_add()
})





class catalogo {  //Constructor de objetos catalogos

    constructor(id, tipo, char, div, precio, img) {

        this.id = id;
        this.tipo = tipo;
        this.char = char;
        this.div = div;
        this.precio = precio;
        this.img = img;
    }

    mostar_catalogo() {

        return this.id + ") " + this.tipo + " " + this.char + "\n " + this.div + " " + this.precio + "\n";
    }

}



function add_item_cart(add_id) {

    let found = catalog_array.find(element => element.id === add_id);


    if (found == undefined) {

        alert("ERROR! \n Debiste seleccionar un ID de producto válido")
    }

    else {

        let encontrado = cart_array.push(found)

        sessionStorage.setItem(cart_array.length - 1, JSON.stringify(found)) //Almaceno objeto found en sesion para luego construir cart en el html





        alert("Se agregó al carrito el producto " + found.tipo + " " + found.char + " " + found.div + " " + found.precio)

        document.getElementById('title').innerHTML = "Tus artículos en el carrito:  <hr> "
        document.getElementById("carrito").innerHTML = cart()

        document.getElementById('subt').innerHTML = "Total a pagar: " + suma()
        pagar = document.getElementById("pay")
        pagar.style.display = "inline"







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
        del_icon = '</p><i id="' + n + '" class="fa-solid fa-square-xmark fa-xl"></i></span>'
        cart_var += "<div id='div_" + n + "'><img src='" + cart_array[n].img + "' class='cart-img'><span id='item_cart'><p><b>" + (n + 1) + ")</b> " + cart_array[n].tipo + " " + cart_array[n].char + " " + cart_array[n].div + " " + cart_array[n].precio + del_icon + "<hr></span></div>"
    }

    return cart_var

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


const articulo_1 = catalog_array.push(new catalogo(1, "PC", "INTEL I5 12600K - 16 GB RAM DDR4 3600Mhz - GTX1650 4GB GDDR5 - SSD 480 GB ", "USD", 1350, "../img/PC_INTEL_PROMO2.jpg"))
const articulo_2 = catalog_array.push(new catalogo(2, "PC", "AMD RYZEN 7 5800X - 16 GB RAM DDR4 3600Mhz - GTX1660 TI 6GB GDDR5 - SSD 1TB ", "USD", 1600, "../img/PC_RYZEN_PROMO.webp"))
const articulo_3 = catalog_array.push(new catalogo(3, "PC", "INTEL I7 11700F - 32 GB RAM DDR4 3600Mhz - RTX 3060 TI 8GB GDDR 6 - SSD 2TB", "USD", 1990, "../img/PC_INTEL_PROMO3.jpg"))
const articulo_4 = catalog_array.push(new catalogo(4, "PC", "INTEL I7 11700F - 32 GB RAM DDR4 3600Mhz - SSD 480 GB", "USD", 990, "../img/PC_INTEL_PROMO3.jpg"))
const articulo_5 = catalog_array.push(new catalogo(5, "PC", "INTEL I5 12600K - 16 GB RAM DDR4 3600Mhz - GTX 1660 TI 6GB GDDR5 - SSD 2TB", "USD", 1399, "../img/PC_INTEL_PROMO2.jpg"))
const articulo_6 = catalog_array.push(new catalogo(6, "PC", "INTEL I5 11400 - 32 GB RAM DDR4 3600Mhz - RTX 3060 TI 8GB GDDR 6 - SSD 2TB", "USD", 1990, "../img/PC_INTEL_PROMO2.jpg"))
const articulo_7 = catalog_array.push(new catalogo(7, "PC", "AMD RYZEN 7 5700G - 32 GB RAM DDR4 3600Mhz - SSD 2TB", "USD", 1299, "../img/PC_RYZEN_PROMO.webp"))
const articulo_8 = catalog_array.push(new catalogo(8, "CPU", "INTEL I7 12700 12 Núcleos 3.6Ghz TURBO 4.8Ghz", "USD", 500, "../img/I7-12700.jpg"))
const articulo_9 = catalog_array.push(new catalogo(9, "CPU", "AMD RYZEN 9 5950X 16 Núcleos 3.4Ghz TURBO 4.9Ghz ", "USD", 900, "../img/Ryzen9-5950X.jpg"))
const articulo_10 = catalog_array.push(new catalogo(10, "CPU", "INTEL I5 11400 6 Núcleos 2.6Ghz TURBO 4.4Ghz", "USD", 240, "../img/I5-11400.jpg"))






console.log("LOG output array catálogo")
console.log(catalog_array)

console.log("LOG output array carrito")
console.log(cart_array)


