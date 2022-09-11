#Herencia y Poliformismo
class padre:
    def __init__(self, numero):
        self.numero = numero
    def menasje1(self):
        print("Hola, buenos días.")
    def mensaje2(self):
        print("Hola, buenas tardes.")
    def mensaje3(self):
        print("Hola, buenas noches.")


class hijo(padre):
    def __init__(self, numero):
#        padre.__init__(self,numero)
        super().__init__(numero)
    def mensaje4(self):
        print(self.numero + 10)
        print("¿como estás?")
    def mensaje5(self):
        print("¿Estás bien entonces?")
    def mensaje6(self):
        print("¿Seguro estás bien?")

ejemplo = hijo(10)
ejemplo.menasje1()
ejemplo.mensaje5()
ejemplo.mensaje3()
ejemplo.mensaje6()
ejemplo.mensaje4()