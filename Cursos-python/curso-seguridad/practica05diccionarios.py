#Diccionarios en python.
from audioop import add


dicc = {1:"Federico",2:"Jesús",3:"Federico",4:True, 5:False}
dicc1={"nombre": "Federico", "edad":31,"tup":(1,3,False,"Camila")}
dicc2={"nombre": "Federico", "edad":31,"lis":[1,3,False,"Camila"]}
#print(dicc)#Duplicidad en claves no imprime la siguiente.
#print(dicc1) 
#print(len(dicc))

#Acceder a elementos keys(),values(),items().
#x=dicc[5]
#print(x)
#print(dicc2.keys())
#print(dicc.values())
#print(dicc.items())

#Cambiar elementos update().
#dicc[5]= True
#print(dicc)
#dicc.update({3:"Lotito"})
#print(dicc)

#Agregar elementos.
#dicc.update({"Apellido":"Lotito"})
#print(dicc)

#Eliminar elementos pop(),popitems(),del,clear()
#dicc.pop(3) elimina item solicitado por clave
#dicc.popitem()#elimina ultimo elemento
#dicc.clear()
#del dicc[2] Funciona como el pop() pero es una palabra reservada
#print(dicc)