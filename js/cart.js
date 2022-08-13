let catalog_array = [];
//Carrito de compras
let cart_array = [];

class catalogo {  //Constructor de objetos catalogos

    constructor(id, tipo, char, div, precio) {

        this.id = id;
        this.tipo = tipo;
        this.char = char;
        this.div = div;
        this.precio = precio;
    }

    mostar_catalogo() {

        return this.id + ") " + this.tipo + " " + this.char + "\n " + this.div + " " + this.precio + "\n";
    }

}



function add_pc() {

    catalog_array.push(new catalogo(prompt("Ingrese un ID"), prompt("Ingrese un tipo de articulo"), prompt("Ingrese la descripcion del articulo"), prompt("Ingrese divisa (USD, $, EUR)"), prompt("Ingrese precio del artículo ")));

}

function delete_pc() {

    let eliminar = parseInt(prompt("Opciones:\n 1) Elimina el primer producto \n 2) Elimina el segundo producto \n 3) Elimina el último producto "))

    if (eliminar == 1) {
        catalog_array.shift();
        alert("Se eliminó el producto nro 1")

    }

    else if (eliminar == 2) {

        catalog_array.splice(eliminar - 1, 1)


        alert("Se eliminó el producto nro 2")
    }

    else if (eliminar == 3) {

        catalog_array.pop()

        alert("Se eliminó el último producto")
    }


    else {
        alert("No seleccionaste una opción válida")
    }

}

function add_item_cart(add_id) {

    let found = catalog_array.find(element => element.id === add_id);


    if (found == undefined) {

        alert("ERROR! \n Debiste seleccionar un ID de producto válido")
    }

    else {
        let encontrado = cart_array.push(found)
        alert("Se agregó al carrito el producto " + found.tipo + " " + found.char + " " + found.div + " " + found.precio)
        //document.getElementById('carrito').innerHTML += "<hr>"
        //document.getElementById('carrito').innerHTML += "Se agregó al carrito: " + found.tipo + " " + found.char + " " + found.precio
        //document.getElementById('carrito').innerHTML += "<hr>"

        document.getElementById('title').innerHTML = "Tus artículos en el carrito:  <hr> "
        document.getElementById('carrito').innerHTML = cart()
        document.getElementById('subt').innerHTML = "Total a pagar: " + suma()
        pagar = document.getElementById("pay")
        pagar.style.display = "inline"

    }



}





function cart_add() {

    let add_id = parseInt(prompt("Elige un ID de producto para agregar al carrito: \n " + stock()))
    add_item_cart(add_id)


}


function cart() {
    let cart = "";
    let del_icon = document.getElementById("carrito").innerHTML = '</p><i id="del" class="fa-solid fa-square-xmark fa-xl" onclick=""></i></span>'
    for (let n = 0; n < cart_array.length; n++) {
        cart += "<span id='item_cart'><p>" + "<b>" + (n + 1) + ")</b> " + cart_array[n].tipo + " " + cart_array[n].char + " " + cart_array[n].div + " " + cart_array[n].precio + del_icon + "<hr></span>"

    }
    return cart 
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


const articulo_1 = catalog_array.push(new catalogo(1, "PC", "INTEL I5 12600K - 16 GB RAM DDR4 3600Mhz - GTX1650 4GB GDDR5 - SSD 480 GB ", "USD", 1350))
const articulo_2 = catalog_array.push(new catalogo(2, "PC", "AMD RYZEN 7 5800X - 16 GB RAM DDR4 3600Mhz - GTX1660 TI 6GB GDDR5 - SSD 1TB ", "USD", 1600))
const articulo_3 = catalog_array.push(new catalogo(3, "PC", "INTEL I7 11700F - 32 GB RAM DDR4 3600Mhz - RTX 3060 TI 8GB GDDR 6 - SSD 2TB", "USD", 1990))
const articulo_4 = catalog_array.push(new catalogo(4, "PC", "INTEL I7 11700F - 32 GB RAM DDR4 3600Mhz - SSD 480 GB", "USD", 990))
const articulo_5 = catalog_array.push(new catalogo(5, "PC", "INTEL I5 12600K - 16 GB RAM DDR4 3600Mhz - GTX 1660 TI 6GB GDDR5 - SSD 2TB", "USD", 1399))
const articulo_6 = catalog_array.push(new catalogo(6, "PC", "INTEL I5 11400 - 32 GB RAM DDR4 3600Mhz - RTX 3060 TI 8GB GDDR 6 - SSD 2TB", "USD", 1990))
const articulo_7 = catalog_array.push(new catalogo(7, "PC", "AMD RYZEN 7 5700G - 32 GB RAM DDR4 3600Mhz - SSD 2TB", "USD", 1299))
const articulo_8 = catalog_array.push(new catalogo(8, "CPU", "INTEL I7 12700 12 Núcleos 3.6Ghz TURBO 4.8Ghz", "USD", 500))
const articulo_9 = catalog_array.push(new catalogo(9, "CPU", "AMD RYZEN 9 5950X 16 Núcleos 3.4Ghz TURBO 4.9Ghz ", "USD", 900))
const articulo_10 = catalog_array.push(new catalogo(10, "CPU", "INTEL I5 11400 6 Núcleos 2.6Ghz TURBO 4.4Ghz", "USD", 240))






console.log("LOG output array catálogo")
console.log(catalog_array)

console.log("LOG output array carrito")
console.log(cart_array)


/* FOR MULTIPLICADOR X2 DE CATÁLOGO
for (let i = 1; i < 11; i++ ) {


    add_item_cart(i)


}
*/

