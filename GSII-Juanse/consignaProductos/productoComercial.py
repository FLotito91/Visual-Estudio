#!/usr/bin/python3

class ProductoComercial:
    def __init__(self, nombre, precio_costo):
        self.nombre = nombre
        self.precio_costo = precio_costo
    
    def calcular_costo(self):
        return self.precio_costo

    def calcular_precio_venta(self):
        costo = self.calcular_costo()
        return costo + costo * 0.2
