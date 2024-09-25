class Biblioteca:
    def __init__(self, nom, adreca):
        self.nom = nom
        self.adreca = adreca
        self.llista_llibres = []

    def mostra_cataleg(self):
        if self.llista_llibres:
            for llibre in self.llista_llibres:
                print(llibre.descripcio())
        else:
            print("No hi ha cap llibre creat")


    def add_llibres(self, llibre):
        self.llista_llibres.append(llibre)


    def write_llista_llibres(self, fitxer):
        fitxer.write_llista_llibres(self.llista_llibres)



    #def to_dict(self):
    #   d = {}
    #   d["ISBN"] = self.isbn
    #   d["titol"] = self.titol
    #   d["autor"] = self.autor
    #   d["nombre_pagines"] = self.nombre_pagines
    #   d["en_prestec"] = self.en_prestec
    #   return d


class Llibre:
    def __init__(self, isbn, titol, autor, nombre_pagines, en_prestec=False):
        self.isbn = isbn
        self.titol = titol
        self.autor = autor
        self.nombre_pagines = nombre_pagines
        self.en_prestec = en_prestec

    def descripcio(self):
        estat_prestec =  False if self.en_prestec else True
        return f"""
        ISBN: {self.isbn}
        Titol: {self.titol}
        Autor: {self.autor}
        Nombre de pagines: {self.nombre_pagines}
        Estat préstec: {estat_prestec}
        """

    def posa_en_prestec(self):
        self.en_prestec= True

    def retornat_de_prestec(self):
        self.en_prestec= False

class Fitxer:
    def write_llista_llibres(self, llista):
        pass

class FitxerCSV:
    def write_llista_llibres(self, llista):
        f = open("libros.csv", "w")
        for libro in llista:
            f.write(f"ISBN:{libro.isbn};Titol:{libro.titol};Autor:{libro.autor};Nombre de pagines:{libro.nombre_pagines};En prestec:{libro.en_prestec}\n")
        f.close()

    def creaFitxer(extension:str):
        if extension == "csv":
            fitxer = FitxerCSV("biblio.csv")
        elif extension == "xml":
            fitxer = FitxerXML("biblio.xml")
        elif extension == "json":
            fitxer = FitxerJSON("biblio.json")
        else:
            print("Fitxer no trobat")
            return None



class FitxerXML:
    pass


class FitxerJSON:
    pass