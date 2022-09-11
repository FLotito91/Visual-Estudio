from Empleado import Empleado

class EmpleadoPermanente(Empleado):
    def __init__(self, nombre, apellido, dni, salario, antiguedad):
        super().__init__(nombre,apellido,dni,salario)
        self.antiguedad = antiguedad

    def calcular_comision(self):
        comision = self.salario * self.antiguedad / 100
        return comision

    def calcular_ingreso_total(self):
        super().calcular_ingreso_total()


    def coincide(self, texto_a_buscar):
        super().coincide()

    def mostrar_datos(self):
        texto = super().mostrar_datos()
        texto += f"Antigüedad: {self.antiguedad}\n"
        return texto
