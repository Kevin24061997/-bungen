# WAS 22-10 Python Grundkurs


# #################
# Teil 1
# #################
print("Hallo, Welt! Dies ist mein erstes Python Programm")

# Anfang
myText1    = "Hallo, Welt! Die ist mein zweites Python Programm, aber etwas ausgebauter\n"
myText2    = "Heute ist der Erste Tag an dem wie programmieren lernen.\n"
myFirstDay = "1"

print(myText1)
print(myText2)
print(myFirstDay)

# Kann auch so aussehen

print(myText1 +  myText2 +  myFirstDay)



# #################
# Teil 2
# #################
# Primitive Datentypen
int   = 123                         # Datentyp Integer, dieser kann nur Ganzzahlen speichern.
float = 1.23                        # Datentyp Float, dieser kann Komma Zahlen speichern.
myString = "IchBinEinString"        # Datentyp Die ist ein String, dieser kann Test und auch Zahlen speichern. Aber man kann damit nicht rechnen.
myBool = True                       # Datentyp Boolean, sagt nur "An" oder "Aus" (True oder False)



# #################
# Teil 3
# #################

# Was ist eine Funktion? Das ist ein Schnipsel Code den wir einmal schreiben und dann wiederverwenden können.

# "def leitet die Funktion ein, dann kommt der Funktionsname".
# Hier wird einfach nur simpel ein "Hello, World" auf der Konsole ausgegeben.
def hello_world():                  
    print("Hello, World")           

# Hier wird die Funktion ausgeführt und man kann sie immer wieder verwenden.
hello_world()



# #################
# Teil 4
# #################

# Hier werden 2 Zahlen zusammen addiert. Zur Erläuterung: "def" leitet wieder die Funktion und "add_and_print" ist der Name
# in den Klammern hinter dem Namen geht Python automatisch davon aus das "x, y" vom Datentyp INT sind. Also das der
# der Block eine Rechnung wird. Mann muss die beiden INTEGER NICHT EXTRA DEFINIEREN. Die Rechnung funktioniert dennoch.
def add_and_print(x, y):            
    summe = x + y
    print(summe)

# Hier führen wir die Funktion aus. 
# In die Klammer schreiben wir entsprechen die Zahlen mit welchen wir rechnen möchten.
add_and_print(1, 2)
add_and_print(3, 4)
add_and_print(5, 6)


# Hier das gleiche wie oben nur das wir hier eben den Datentyp definieren
#
# Hier das gleiche wie oben nur das wir hier eben den Datentyp definieren
def add_and_print(x: int, y: int):
    summe = x + y
    print(summe)


# Dies ist eine Python Funktion, die 2 Argumente (x, y) annimmt. 
# Durch die Notation `x: int` wird darauf hingewiesen, dass die Funktion
# nur Integer für den Wert `x` annimmt. Selbiges gilt für `y`. 
# Zum Schluss wird der berechnete Wert aus `x + y` zurückgegeben. 
def add(x: int, y: int):  
    summe = x + y
    return summe

myValue = add(123, 3)
print(myValue)  # Gibt aus: `126`



# #################
# Teil 5
# #################

# Diese Funktion nimmt ebenfalls ein Argument entgegen `likesTea`. 
# Basierend darauf, ob `likesTea` `True` oder `False` ist, gibt die 
# Funktion eine andere Ausgabe aus. 
# Wenn `likesTea` den Wert `True` hat, dann erscheint die Ausgabe `Yes!`. 
# Andernfalls erscheint die Ausgabe `No!`. 
def doesSheLikesTea(likesTea): 
    if likesTea:
        print("Yes!")
    else:
        print("No!")
doesSheLikesTea(False)