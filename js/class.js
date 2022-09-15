
class catalogo {  //Constructor de objetos catalogos

    constructor(id, tipo, char, div, precio, img) {

        this.id = id;
        this.tipo = tipo;
        this.char = char;
        this.div = div;
        this.precio = precio;
        this.img = img;
    }

}



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