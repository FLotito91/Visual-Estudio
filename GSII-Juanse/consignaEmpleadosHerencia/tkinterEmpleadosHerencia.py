import tkinter as tk
from tkinter import Entry, Menu, Menubutton, Canvas
ventanaPrincipal = tk.Tk()
ventanaPrincipal.title("Ventana Principal")
ventanaPrincipal.geometry("380x380")
ventanaPrincipal.configure(background="white")
ventanaPrincipal.mainloop()
barramenutk = tk.Label(
    ventanaPrincipal, text="Argentina", bg="black", font="red")
barramenutk.pack(padx="30x", pady="30x")
