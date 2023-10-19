# # Funktion welche die Eingaben überprüft
# def check_value(value):
#     try:
#         # Das Value wird darauf überprüft, ob es eine Zahl ist
#         value = float(value)        
#     except ValueError:
#         print("Das ist keine Zahl bro")
#         exit(1)
#     return value


# usersNumbers = []
# userWillGiveMoreNumbers = True


# while userWillGiveMoreNumbers:
#     # User gibt eine Zahl ein
#     usersNumber = check_value(input("Gib uns eine Zahl: "))         
#     # usersNumber wird zu usersNumbers hinzugefügt   
#     usersNumbers.append(usersNumber)                                

#     # Abbruchkriterium
#     if input("Willst du mehr Zahlen eingeben? (j/n)") == "n":
#         userWillGiveMoreNumbers = False


# # Die Anzahl der Einträge in der Liste werden ausgelesen
# arraylength = len(usersNumbers)                             
# print(f"Es gibt {arraylength} Einträge in der Liste.")
# print(f"Diese Einträge sind in der Liste: {usersNumbers}")
                   
# ergebnis = 0

# # Zähler zum hochzählen bis man die Länge der Liste erreicht hat
# i = 0                   

# # Zähler wird mit der Länge der Liste verglichen, solang der Zähler kleiner ist läuft die Schleife
# while i < arraylength:                  
#     # Die Einträge der Liste werden nacheinander addiert
#     ergebnis = ergebnis + usersNumbers[i]           
    
#     # Zähler wird +1 gerechnet
#     i = i + 1                     
    
# print(f"Alle Einträge in der Liste addiert ergeben folgendes Ergebnis: {ergebnis}")





myArray = ["Banane", "Apfel", "Pflaume"]

myArrayLength = len(myArray)

i = 0
while i < myArrayLength:
    print(i, myArray[i])
    i = i + 1

print("-------------------------")

for element in myArray:     # element <-- ["Banane", "Apfel", "Pflaume"]
    print(element)


users = ["Djordje", "Julius", "Sebastian", "Önder", "Mediya", "Kevin"]

for (index, value) in enumerate(users):
    print(index, value)
