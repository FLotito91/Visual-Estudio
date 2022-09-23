class Empleado{
    constructor(nombre,sueldo){
        this._nombre = nombre ;
        this._sueldo = sueldo;
    }
    get idEmpleado(){
        return this._idEmpleado;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }
    obtenerDetalles(){
        return `Empleado: \n nombre: ${this._nombre}\n sueldo: $${this._sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre,sueldo,departamento){
        
        super(nombre,sueldo);
        this._departamento = departamento;
        }
        obtenerDetalles(){
            return `Gerente \n${super.obtenerDetalles()} \n Departamento: ${this._departamento} `;
    }
}


let gerente1 = new Gerente("Miguel",199.999,"Sistemas");
console.log(gerente1.obtenerDetalles());
let empleado2 = new Empleado("Roberto", 110.998);
console.log(empleado2.obtenerDetalles());