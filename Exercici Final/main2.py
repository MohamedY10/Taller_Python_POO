from main import Biblioteca, Llibre, Fitxer, FitxerCSV, FitxerXML, FitxerJSON 

llibre1 = Llibre("99348977", "El mecanoscrit del segon origen", "Manuel de Pedrolo", 340, False)
llibre2 = Llibre("78668734", "La Bíblia", "San Pedro", 500, True)


biblioteca = Biblioteca("Biblioteca Central", "Carrer Major, 1")


biblioteca.add_llibres(llibre1)
biblioteca.add_llibres(llibre2)
biblioteca.mostra_cataleg()

llibre1.posa_en_prestec()

biblioteca.mostra_cataleg()

f = FitxerCSV()
biblioteca.write_llista_llibres(f)

fitxer1 = Fitxer.creaFitxer()