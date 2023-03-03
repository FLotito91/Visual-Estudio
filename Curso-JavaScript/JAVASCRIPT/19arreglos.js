//let autos = new Array("BMW","MB","Volvo");

const autos = ["BMW","MB","VOLVO"];
console.log(autos);

console.log(autos[1]);
console.log(autos[2]);

for (let i = 0; i <autos.length;i++){
    console.log(i+":"+autos[i]);
}

autos[1] = "MercedezBenz";
console.log(autos[1]);
autos.push("Audi");

console.log(autos);
console.log(autos.length);

autos[autos.length] = "Cadillac";
console.log(autos);
autos[6] = "Toyota";//no es recomendable dejar elementos vacíos, ocupa espacio.
console.log(autos);
console.log(Array.isArray(autos));
console.log(autos instanceof Array);
