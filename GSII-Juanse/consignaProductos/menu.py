#!/usr/bin/python3

from listaPrecios import ListaPrecios
import sys

class Menu:
    def __init__(self):
        self.lista = ListaPrecios()
        self.productos_para_probar()

    def productos_para_probar(self):
        self.lista.agregar_producto_comercial("Producto Comercial 1", 1000)
        self.lista.agregar_producto_comercial("Producto Comercial 2", 2000)
        self.lista.agregar_producto_industrial("Producto Industrial 1", 2000, [-2,10,4])
        self.lista.agregar_producto_industrial("Producto Industrial 2", 3000, [-3,-7,5])
        self.lista.agregar_producto_industrial("Producto Industrial 3", 2500, [5,4,2])

    def ejecutar(self):
        while True:
            self.elegir_opcion()

    def elegir_opcion(self):
        print ('''
1- Agregar producto comercial
2- Agregar producto industrial
3- Buscar producto por nombre
4- Obtener el producto más barato
5- Salir''')
        opcion = int(input("Elija la opción: "))

        if opcion == 1:
            self.agregar_comercial()
        elif opcion == 2:
            self.agregar_industrial()
        elif opcion == 3:
            self.buscar_por_nombre()
        elif opcion == 4:
            self.obtener_mas_barato()
        elif opcion == 5:
            self.salir()


    def agregar_comercial(self):
        nombre = input("Ingrese el nombre: ")
        costo = int(input("Ingrese el precio de costo:: "))
        self.lista.agregar_producto_comercial(nombre, costo)

    def agregar_industrial(self):
        nombre = input("Ingrese el nombre: ")
        costo = int(input("Ingrese el precio de costo: "))
        cantidad_de_trabajadores = int(input("Ingrese cuántos trabajadores hubo: "))

        remuneraciones = []
        for i in range(cantidad_de_trabajadores):
            horas = int(input("Ingrese las horas trabajadas: "))
            calificado = input("¿Es trabajo calificado? (S/N) ")
            if calificado == "S" or calificado == "s":
                horas = -horas
            remuneraciones.append(horas)

        self.lista.agregar_producto_industrial(nombre, costo, remuneraciones)


    def buscar_por_nombre(self):
        nombre_a_buscar = input("Ingrese nombre para buscar: ")
        productos = self.lista.buscar_por_nombre(nombre_a_buscar)
        for producto in productos:
            s = producto.nombre + ": $" + str(producto.calcular_precio_venta())
            print(s)

    def obtener_mas_barato(self):
        producto = self.lista.producto_mas_barato()
        if producto:
            s = producto.nombre + ": $" + str(producto.calcular_precio_venta())
            print(s)
        else:
            print("No hay ningún producto en la lista")
        
    def salir(self):
        print("Gracias por utilizar el sistema.")
        sys.exit(0)


if __name__ == "__main__":
    Menu().ejecutar()
