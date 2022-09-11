#Listas en python.
from email.errors import NoBoundaryInMultipartDefect


nombres = ["Federico","Jesus","Matias","Celeste","María","Camila"]
numeros= [1, 4, 6, 8, 9]
mezclada = [1,"Federico",False,"Carlos",13,True]

#print(len(mezclada))

#Acceder a elementos de una lista.
#print (nombres[2])
#print(mezclada[1:3])

#Cambiar elementos de una lista.
#nombres[5] = "Taffo"
#nombres [0:3]= "Fede"


#Métodos de las listas append(), remove()
nombres.append("Miguel")
print(nombres)
nombres.remove("Jesus")
print(nombres)
print(numeros)
numeros.remove(4)
print(numeros)
