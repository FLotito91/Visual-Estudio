class Orden{
    static contadorOrdenes=0;
    static get MAX_PRODUCTOS(){
        return 5;
    }
    constructor (){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        //this.contadorProductosAgregados = 0;
    }
    get idOrden(){
        return this._idOrden;
    }
    agregarProducto(producto){
        if (this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            // this._productos[this.contadorProductosAgregados++] = producto;
        }
        else{
            console.log("No se pueden agregar mas productos.")
        }
    }
    calcularTotal(){
        let totalVenta = 0 ;
        for(let producto of this._productos){
            totalVenta += producto._precio; //totalVenta = totalVenta + producto.precio
        }
        return totalVenta;
    }
    mostarOrden(){
        let productosOrden = "";
        for (let producto of this._productos){
            productosOrden+="\n" + producto.toString() + " ";
        }
        console.log(`Orden: ${this._idOrden} Total: ${this.calcularTotal()}
        Productos: ${productosOrden} `);
    }
}

let producto1 = new Producto("mesita",1222);
let producto2 = new Producto("Mesón", 2124);
let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostarOrden();
let orden2 = new Orden();
let producto3 = new Producto("Cinturón",500);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.mostarOrden();
