let miNumero = "17c";

let edad = Number(miNumero);
console.log (edad);

if (isNaN(edad)){
    console.log("No es un número")
}
else{
    if (edad >=18){
        console.log("Puede votar");
    }
    else{
        console.log("Es muy jover para votar");
    }
    
}
edad = 18;
if (isNaN (edad)){
    console.log("No es un número")
}
else{ 
    let resultado = (edad >=18)? "Puede votar" : "Muy jover para votar";
    console.log(resultado);
}