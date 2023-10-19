print('Das ist der Gehaltsrechener von Kevin hier können sie berechnen was sie in der Stunde,Tag,Monat oder im Jahr verdinen.')
print('Und sie sehen ob sie gerig,durschnits oder Top-verdiner sind ')
print('---------------------------------------')



stl = float(input('Bitte gebe dein Stundenlohn ein: '))
day = stl * float(input('Bitte geben sie ein wie viele Stunden sie am Tag Arbeiten: '))
month = day * float(input('Bitte geben sie ein wie viele tage sie im Monat Arbeiten: '))
jahr = month * 12

print('Sie verdinen ' + str(stl) + '$ die Stunde.')
print('Sie verdinen ' + str(day) + '$ am Tag.')
print('Sie verdinen ' + str(month) + '$ im Monat')
print('Sie verdinen ' + str(jahr) + '$ im Jahr')

def verdiner(month):
    if month < 3000:
        print('Sie sind ein gering Verdiener')
        exit(1)
    elif month == 3000:
        print('Sie sind ein durchschnitts Verdiener')
        exit(1)
    elif month <4000:
        print('Sie sind ein durchschnitts Verdiener')
        exit(1)
    elif month == 4000:
        print('Sie sind ein Top Verdiener')
        exit(1)
    elif month > 4000:
        print('Sie sind ein Top Verdiener')
        exit(1)
    
verdinerart = verdiner(month)
print(f'Sie sind ein: {verdinerart}.')