class DispositivoEntrada{
    constructor(tipoEntrada,marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;
    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton(){
        return this._idRaton;
    }
    toString(){
        return `Ratón: [ID Raton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, Marca: ${this._marca}]`;
    }
}

class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;
    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    
    
    get idTeclado(){
        return this._idTeclado;
    }
    toString(){
        return `Teclado: [ ID Teclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, Marca: ${this._marca}]`;
    }
}

class Monitor{
    static contadorMonitores = 0;
    constructor(marca,tamaño){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }
    get idMonitor(){
        return this._idMonitor;
    }   
    toString(){
        return `Monitor: [ ID Monitor: ${this._idMonitor}, tamaño: ${this._tamaño}", Marca: ${this._marca}]`;
    }
}

class Computadora{
    static contadorComputadoras = 0;
    constructor(nombre,monitor,raton,teclado){
        this._idComputadora = ++Computadora.contadorComputadoras; 
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;
    }
    toString(){
        return ` Computadora: [ ID Computadora: ${this._idComputadora}: Nombre: ${this._nombre}, \n |${this._monitor}",\n |${this._raton},\n |${this._teclado}]`;
    }

}

class Orden{
    static contadorOrdenes = 0;
    constructor(){
            this._idOrden = ++Orden.contadorOrdenes;
            this._computadoras = [];
    }
    get idOrden(){
        return this._idOrden;
    }
    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }
    mostrarOrden(){
        let computadorasOrden = "";
        for (let computadora of this._computadoras){
            computadorasOrden+=`\n${computadora}`;
        }
        console.log(`Orden: ${this._idOrden},Computadoras: ${computadorasOrden}`);
    }
}

let raton1 = new Raton("USB", "Logitech");
let raton2 = new Raton("USB", "HP");

let teclado1 = new Teclado("Bluetooh","Logi");
let teclado2 = new Teclado("Wi Fi","Genius");

let monitor1 = new Monitor("LG", 27);
let monitor2= new Monitor("Dell",32);
let monitor3 = new Monitor("Samsung",28)

let computadora1 = new Computadora("SuperGaming",raton1,teclado2,monitor2);
let computadora2 = new Computadora("Armada",raton2,teclado1,monitor3);
let orden1 = new Orden();
let orden2 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora1);
orden2.agregarComputadora(computadora2);
orden2.agregarComputadora(computadora2);
orden2.agregarComputadora(computadora1);
orden2.agregarComputadora(computadora1);


orden1.mostrarOrden();
orden2.mostrarOrden();
