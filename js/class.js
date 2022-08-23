
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
