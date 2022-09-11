#Como usar las tuplas.
nombres= ("Carlos","Marcos","Federico")
numeros = (4,6,8,12,31,23,4)
valor = (True,True,False,True,False)
convinado=("Federico", 21,False,"Marcos", 25)
#print(len(nombres))
#print(numeros)
#print(valor)
#print(convinado)

#Acceder a elemntos de una tupla
#print(valor[1:3])

#Actualizar una tupla.
#x=list(nombres)
#x[1] = "Lotito"
#nombres=tuple(x)
#print(nombres)

#Desempaquetar una tupla.
(cuatro,ocho,seis,doce,treintayuno,veintetres,cuatro)= numeros
print(seis)
print(ocho)
#Métodos de una tupla cont(), index() 
print(numeros.count(4))
print(numeros.index(seis))