class Producto{
    static contadorProductos = 0;
    constructor(nombre,precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;

    }
    get idProducto(){
        return this._idProducto;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get precio(){
        return this._nombre;
    }
    set precio(precio){
        this._precio = precio;
    }
    toString(){
        return `
        ID Producto: ${this._idProducto}
        Nombre Producto: ${this._nombre}
        Precio Producto: $${this._precio}
        `
    }
}



let producto1 = new Producto("mesita",1222);
console.log(producto1.toString());