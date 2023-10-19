def check_value(value):     # Funktion welche die Eingaben überprüft
    try:
        value = float(value)        # Das Value wird darauf überprüft, ob es eine Zahl ist
    except ValueError:
        print("Das ist keine Zahl bro")
        exit(1)
    return value

usersNumbers = []
userWillGiveMoreNumbers = True

while userWillGiveMoreNumbers:
    usersNumber = check_value(input("Gib uns eine Zahl: "))            # User gibt eine Zahl ein
    usersNumbers.append(usersNumber)                                # usersNumber wird zu usersNumbers hinzugefügt

    if input("Willst du mehr Zahlen eingeben? (j/n)") == "n":           # Abbruchkriterium
        userWillGiveMoreNumbers = False

arraylength = len(usersNumbers)                             # die Anzahl der Einträge in der Liste werden ausgelesen
print(f"Es gibt {arraylength} Einträge in der Liste.")
print(f"Diese Einträge sind in der Liste: {usersNumbers}")
                   
Ergebnis = 0
i = 0                   # Zähler zum hochzählen bis man die Länge der Liste erreicht hat

while i < arraylength:                  # Zähler wird mit der Länge der Liste verglichen, solang der Zähler kleiner ist läuft die Schleife
    Ergebnis = Ergebnis + usersNumbers[i]           # Die Einträge der Liste werden nacheinander addiert
    i = i + 1                     # Zähler wird +1 gerechnet
    
print(f"Alle Einträge in der Liste addiert ergeben folgendes Ergebnis: {Ergebnis}")