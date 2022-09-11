class AlumnoPresencial: 
    def __init__(self, nombre, apellido, dni, notas_tp, asist):
        self.nombre = nombre
        self.apellido = apellido
        self.dni = dni
        self.notas_tp = notas_tp
        self.asist = asist

    def obtener_nota_final(self):
        if self.asist <= 70 or any(self.notas_tp < 6) : 
            return 1
        else: 
            if len(self.notas_tp) == 1:
                return self.notas_tp
            else:
                menor_nota = 10
                for notas in self.notas_tp:
                    if notas<menor_nota:
                        menor_nota = notas
                sub_total = sum(self.notas_tp) - menor_nota
                total = sub_total / (len(self.notas_tp)-1)
                return total
    def mostrar_datos(self):
        texto = f"Estudiante: {self.nombre} {self.apellido}\n"
        texto+= f"DNI: {self.dni}\n"
        texto+= "Nota: " + str(self.obtener_nota_final()) + "\n"
        return texto
