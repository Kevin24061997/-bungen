print('''
Willkommen beim Spiel FizzBuzz!

Es wird von 1 Hochgezähl und die aufgabe des Spielers ist es,

Wenn die Zahl durch 3 teilbar ist, wird anstelle der Zahl 3 das Wort Fizz eingegeben.
Wenn die Zahl durch 5 teilbar ist, wird anstelle der Zahl 5 das Wort Buzz eingegeben.
Und wenn die Zahl sowohl durch 3 als auch durch 5 teilbar ist, wird anstelle der Zahl FizzBuzz eingegeben.
Wenn die Zahl nicht durch 3 oder 5 teilbar ist, kann der Spieler einfach "Enter" drücken - also weiter gehen.
Hat der Spieler eine falsche Angabe gemacht, endet das Spiel.
Außerdem wird dem Spieler angezeigt, wie oft die Eingabe richtig war.

Viel Spaß beim Spielen.
''')
num = 1
print(num)

for i in range(1,99999):
    print(i)

def Answer():
    input('Bitte gebe Fizz, Buzz, FizzBuzz oder drücke Enter: ')
    while True:
    #checking that number is divisible by both 3 and 5
        if(num%3==0 and num%5==0):
            print("FizzBuzz")
            return True
    #checking that number is divisible by 3
        elif(num%3 == 0):
            print("Fizz")
            return True
    #checking that number is divisible by 5
        elif(num%5 == 0):
            print("Buzz")
            return True
    #And if not divisible by either of them print num as it is
        else:
            print(int(num + 1))
            return True
