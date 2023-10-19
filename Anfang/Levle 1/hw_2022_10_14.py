# Aufgabe 1 
from array import array


def task_1(): 
    name = input("Bitte Namen eingeben: ")
    age = int(input("Bitte Alter eingeben: "))

    if age < 18:
        print(f"Hallo {name}! Ich wünsche dir einen schönen Tag.")
    else: 
        print(f"Hallo {name}! Ich wünsche Ihnen einen schönen Tag.")


# Aufgabe 2
def task_2():
    # users_list = input("Bitte Zahlen eingeben, K")
    users_list = [5, 10, 15, 20, 25]
    
    # Alternative 1
    new_list = []
    new_list.append(users_list[0])
    new_list.append(users_list[-1])
    
    # Alternative 2
    new_list = [users_list[0], users_list[-1]]

    print(new_list)


# Aufgabe 3
def task_3():
    users_number = input("Bitte Zahl eingeben: ")

    try:
        users_number = int(users_number)
    except ValueError:
        print("Eingabe ist keine Zahl. Bitte gültige Zahl eingeben.")
        exit(1)
    
    if users_number % 2 == 0:
        print(f"Die Zahl {users_number} ist gerade.")
    else:
        print(f"Die Zahl {users_number} ist ungerade.")


# Aufgabe 4
def task_4():
    name = input("Bitte Namen eingeben: ")
    age = int(input("Bitte Alter eingeben: "))

    goal = 100
    current_year = 2022

    age_diff = goal - age
    year_when_user_is_100 = current_year + age_diff

    print(f"Hi {name}! Du bist im Jahr {year_when_user_is_100} 100 Jahre alt.")



# Examples for string interpolation. 
# myName = "Sandra"
# print("1: Hallo,", myName, "!")
# print("2: Hallo, " + myName + "!")
# print(f"3: Hallo, {myName}!")
# print("4: Hallo, %s!" % (myName))


# Zahlen
myInteger = 12345   # Ganzzahlen
myFloat = 12345.6   # Nachkommazahlen

-4      # Integer
-4.0    # Float

# print(type(-4))
# print(type(-4.0))
# print(type(2 - 0.5))

# Boolean
myBoolean = True        # oder False

# String
myString = "Jascha"     # Zeichenketten

# Null
myNull = None   # Null, null, NaN

# Listen und Arrays
myList = ["Banane", "Apfel", "Gurke"]
print(type(myList))

myTuple = ("Banane", "Apfel", "Gurke")
print(type(myTuple))


myUnsortedList = [2, 1, 10, 5, 4]
myUnsortedList.sort()
print(myUnsortedList)