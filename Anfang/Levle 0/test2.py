def get_max_number(x: int, y: int, z: int):
       
    if x > y:
        first_winner = x
    else:
        first_winner = y

    if first_winner > z:
        return first_winner
    else:
        return z
        
print("")
print("Hallo! Ich teste für Dich drei Zahlen und gebe Dir die größte zurück")
print("--------------------------------------------------------------------")

myX = input("Bitte gib die erste Zahl ein: ")
myY = input("Bitte gib die zweite Zahl ein: ")
myZ = input("Bitte gib die dritte Zahl ein: ")

def check_value(value):
    try:
       value = int(value)
    except ValueError:
       print("Jo... was hast Du am Wort 'Zahl' nicht verstanden...")
    return value

myX = check_value(myX)
myY = check_value(myY)
myZ = check_value(myZ)

biggestInt = get_max_number(myX, myY, myZ)
print(f"Die größte Zahl ist: {biggestInt}.")