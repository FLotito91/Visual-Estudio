let horaDia = 5;

if (horaDia >=6 && horaDia <=11){
    saludo = "buenos días";
}
else if (horaDia >=12 && horaDia <=18){
    saludo = "buenas tardes";
}
else if(horaDia >=18 && horaDia <=24){
    saludo = "buenas noches";
}
else if (horaDia >=0 && horaDia <=05){
    saludo = "durmiendo";
}
else {
    saludo = "No corresponde";
}

console.log (saludo)