from tkinter import Y


myText = "Hallo, Welt!"
myAge = 25
myFuel = 0.5 
thorstenAge = "26"
likesTee = True

 # print((myAge + thorstenAge) / 2)

#   print(thorstenAge + myText)
 
def print_hello_world():
    print("Hello, World!")

#print_hello_world()

def add_and_print(x, y):
    summe = x + y 
    print (summe)

add_and_print(2, 3)

def add(x: int, y: int):   
    summe = x + y # kann man kützen return x + y
    return summe 

myValue = add_and_print(2, 3)
print(myValue)

def dosheliektee(likesTee):
    if likesTee:
        print("Yes")
    else: 
        print ("No")

dosheliektee(False)