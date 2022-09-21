class Cliente extends Persona{
    static _idCliente = 0;
    static _fechaRegistro = new Date();
    constructor(nombre,apellido,edad,fechaRegistro){
        super(nombre,apellido,edad);
        this._idCliente = ++Cliente._idCliente;
        this._fechaRegistro = fechaRegistro;
    }
        toString(){
            return `
            ID cliente: ${Cliente._idCliente}. 
            Fecha de registro: ${Cliente._fechaRegistro}. 
            ${super.toString()}`;
        }
    }
