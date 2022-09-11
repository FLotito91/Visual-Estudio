#!/usr/bin/python3

from copyreg import constructor
from http.client import PRECONDITION_FAILED
from operator import countOf


class ProductoIndustrial:
    '''Escribir aquí el código de esta clase'''
    def __init__(self,nombre,costo,remuneraciones):
            self.nombre = nombre
            self.costo = costo
            self.remuneraciones = remuneraciones

    def precio_costo(self):
        precio_sub_total = 0
        for remu in self.remuneraciones:
            if remu <= 0:
                precio_sub_total+remu*-1200
            else: 
                precio_sub_total+remu*1000  
            total=precio_sub_total+self.costo
            print(total)
            return total
    def calcular_precio_venta(self):
        costito = self.precio_costo()
        costito = costito* 25/100
        total = self.precio_costo() + costito
        print(total)
        return total

#- Los productos industriales tienen:
  #  a. Un nombre
  #  b. Un costo de materia prima.
  #  c. Una lista de costos de mano de obra, cuyos valores están expresados en
 #horas. Si el valor es positivo, se trata de mano de obra no-calificada (que se
#paga $1000 por hora), y si es negativo, de mano de obra calificada (que se paga
#$1200 por hora). 
