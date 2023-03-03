class Empleado extends Persona{
    static _idEmpleado = 0;
    constructor(nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad);
        this._sueldo = sueldo;
        this._idEmpleado = ++Empleado._idEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }
    //sobreescritura
    toString(){
        return `
        ID empleado: ${Empleado._idEmpleado}. 
        ${super.toString()}. 
        Con un sueldo de: \$${this.sueldo}`;
    } 
}

