let persona = {
    nombre: "Juan",
    apellido: "Perez",
    email: "jperez@mail.com",
    edad: 31,
    get nombreCompleto(){
        return this.nombre + " " + this.apellido
    }
}

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.email);
//console.log(persona.nombreCompleto());

let persona2 = new Object();
persona2.nombre="Carlos";
persona2.domicilio= "Santa Fe";
persona2.telefono="3243223";

console.log(persona2.telefono);
console.log(persona["apellido"]);


//for in 

for(nombrePropiedad in persona){
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad])
}
//agregar
persona.telefono = "543543455";
console.log(persona);
persona.tel = "3245555";
persona.telefono= "323424422";
console.log(persona);
//delete
delete persona.tel;
console.log(persona);

//Concatenar cada valor de cada propiedad
console.log(persona.nombre + ", "+persona.apellido);

//for in
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

//En array
let personaArray = Object.values(persona);
console.log(personaArray);

//En string
let personaString = JSON.stringify(persona);
console.log(personaString);
console.log(personaString)