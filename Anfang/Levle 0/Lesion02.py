# Aufgabe: Erstelle ein Programm, das aus drei Zahlen die größte Zahl zurückgibt. 

def get_max(x: int, y: int, z: int):
    first_winner = None

    if x > y:
        first_winner = x
    else:
        first_winner = y

    if first_winner > z:
        return first_winner
    else:
        return z

# biggestInt = get_max(12, 24, 24)
# print(f"Die größte Zahl ist: {biggestInt}.")


wert1 = 4567
wert2 = 4567
wert3 = 12

def analyse(x,y,z):
    print(x)
    print(y)
    print(z)

    if x >= y and x >= z:
        print("Wert1 ist größer")
    elif y >= x and y >= z:
        print("Wert2 ist größer")
    elif z >= x and z >= x: 
       print("Wert3 ist größer")

# analyse(wert1,wert2,wert3)

def check_value(value):
    try:
        value = int(value)
    except Exception:
        print("Jo... was hast du am Wort 'Zahl' nicht verstanden...")
        exit(1)
    return value

# print("")
# print("Hallo! Ich teste für dich drei Zahlen und gebe dir die größte zurück.")
# print("------------------------------------------------------------------------")
# myX = input("Bitte gib die erste Zahl ein: ")
# myY = input("Bitte gib die zweite Zahl ein: ")
# myZ = input("Bitte gib die dritte Zahl ein: ")

# myX = check_value(myX)
# myY = check_value(myY)
# myZ = check_value(myZ)

# biggestInt = get_max(myX, myY, myZ)
# print(f"Die größte Zahl ist: {biggestInt}.")




myList = [1, 2, 3, 4, 5]  # Veränderbar!!
myOtherList = ["Banana", "Apple", "Kiwi"]
myList2 = [1, "Banana"]

myList = (1, 2, 3, 4)  # Nicht mehr veränderbar!



# Meine Liste
# - 1
# - 2
# - 3
# - 4
# - 5

####################################################################
####################################################################
####################################################################
####################################################################
####################################################################
####################################################################

# Die vom Nutzer eingegebenen Zahlen. 
usersNumbers = []
userWillGiveMoreNumbers = True

while userWillGiveMoreNumbers:
    usersNumber = input("Gib uns eine Zahl (wenn leer, dann fertig): ")

    # Alternative 1: Abbruchbedingung
    if usersNumber == "":
        userWillGiveMoreNumbers = False
    else:
        usersNumber = check_value(usersNumber)
        usersNumbers.append(usersNumber)

    # Alternative 2: Abbruchbedingung
    # willContinue = input("Willst du mehr Zahlen eingeben? (j/n): ")
    # if willContinue == "n":
    #     userWillGiveMoreNumbers = False

biggestNumber = max(usersNumbers)
print(f"Die größte Zahl aus dem Array {usersNumbers} ist die Zahl {biggestNumber}.")