for (let contador = 0; contador < 3; contador++){
    console.log(contador)
}
console.log("Fin del ciclo");

//Números pares con for
contador=0;
for(let contador = 0; contador <=10; contador ++){
    if (contador %2 == 0)
        console.log(contador)
        continue;
}
console.log("Fin del ciclo");
