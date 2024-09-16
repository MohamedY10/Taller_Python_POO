class Persona:
    def __init__(self, nom, cognoms, edad, color):
        self.nom = nom
        self.cognoms = cognoms
        self.edad = edad
        self.color = color

    def descripcion(self):
        return (f"""
        ·Nombre: {self.nom}
        ·Apellidos: {self.cognoms}
        ·Edad: {self.edad}
        ·Color favorito: {self.color}
        """)


def crear_persona():
    nom = input("Ingresa el nombre de la persona: ")
    cognoms = input("Ingresa los apellidos de la persona: ")
    edad = int(input("Ingresa la edad de la persona: "))
    color = input("Ingresa el color favorito de la persona: ")

    return Persona(nom, cognoms, edad, color)



personaje = crear_persona()
print(personaje.descripcion())
