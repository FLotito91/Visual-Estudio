#!/usr/bin/python3

from productoComercial import ProductoComercial
from productoIndustrial import ProductoIndustrial

class ListaPrecios:
    def __init__(self):
        self.lista_precios = []
    
    def agregar_producto_comercial(self, nombre, costo): 
        p = ProductoComercial(nombre, costo)
        self.lista_precios.append(p)

    def agregar_producto_industrial(self, nombre, costo, remuneraciones): 
        p = ProductoIndustrial(nombre, costo, remuneraciones)
        self.lista_precios.append(p)

    def buscar_por_nombre(self, texto):
        coincidentes = []
        for producto in self.lista_precios:
            if texto in producto.nombre:
                coincidentes.append(producto)
        return coincidentes
    
    def producto_mas_barato(self):
        precio_menor = 999999
        for precio in self.lista_precios:
            if precio_menor < precio.calcular_precio_venta():
                precio = precio.calcular_precio_venta()
                precio_menor = precio
            return precio

