#Encapsulamiento
class encap:
#doble guion bajo (__) para encapsular
#lo privado haciendolo inmutable.
    
    def __init__(self):
        self.__numero = 0
    
    def operacion(self):
        print(self.__numero + 20)

    def resultado(self):
        return self.__numero


ejemplo = encap()
ejemplo.operacion()
ejemplo.numero = 23
print(ejemplo.resultado())