# Erstelle ein Programm das aus 2 Zahlen m² errechnet
#
def teste(value):
    try:
        value =float(value)
    except Exception:
        print("Deine Eingabe ist fehlerhaft")
        exit(1)
    return value 

print(" ")
print("----------------------------------------------")
print(" Ich berechne für Dich eine Fläche in m²")
print("----------------------------------------------")
Zahl1 = input("Für die m² Berechnung brauche ich die erste  Zahl: ")
Zahl1 = teste(Zahl1)

Zahl2 = input("Für die m² Berechnung brauche ich die zweite Zahl: ")
Zahl2 = teste(Zahl2)


print(f"Das Ergebnis ist {Zahl1 * Zahl2} m²")

