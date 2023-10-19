# ################################################
# ################################################
# ################################################
class Tisch:
    # Attribute
    anzahl_beine: int = 4
    maximale_hoehe: float
    minimale_hoehe: float
    aktuelle_hoehe: float
    breite: float
    laenge: float

    def fahre_hoch(self):
        self.aktuelle_hoehe = self.maximale_hoehe

    def fahre_runter(self):
        self.aktuelle_hoehe = self.minimale_hoehe

    def flip_table(self):
        print("(ノಠ益ಠ)ノ彡┻━┻")


tisch_von_thomas = Tisch()
tisch_von_thomas.anzahl_beine = 6
tisch_von_thomas.maximale_hoehe = 0.78
tisch_von_thomas.breite = 0.52
tisch_von_thomas.laenge = 1.20
tisch_von_thomas.flip_table()

tisch_von_djordje = Tisch()
tisch_von_djordje.anzahl_beine = 2
tisch_von_djordje.maximale_hoehe = 1.20
tisch_von_djordje.breite = 0.50
tisch_von_djordje.laenge = 1.20


# ################################################
# ################################################
# ################################################
class Brief:
    # Attribute
    titel: str
    adressat: str
    text: str
    ist_geschlossen: bool

    def wegschemisen(self):
        del self

    def oeffnen(self):
        self.ist_geschlossen = False




# Beispielhafte Betrachtung einer Klasse in Form einer Tabelle:
# 
# Tabelle Brief
#
#                           title       adressat        text
# brief_an_irina              
# brief_an_thomas
# brief_an_sebastian

brief_an_irina = Brief()
brief_an_irina.titel = "Hallo"
brief_an_irina.adressat = "Irina Schröder - irgendwo auf dem Meer"
brief_an_irina.text = "Cool, dass du Cloud Zeugs machst!"

brief_an_thomas = Brief()
brief_an_thomas.adressat = "Thomas Heß - irgendwo in Deutschland"
brief_an_thomas.titel = "Rechnung"
brief_an_thomas.text = "Muhahahahahaha"

brief_an_sebastian = Brief()


# ################################################
# ################################################
# ################################################
class Auto:
    # Attribute
    anzahl_raeder: int
    anzahl_tueren: int
    max_geschwindigkeit: float
    aktuelle_geschwindigkeit: float = 0
    kofferraumvolumen: float
    anzahl_ps: float
    farbe: str
    anzahl_sitze: int
    marke: str
    model: str
    eigentuemer: str

    # Methoden
    def __init__(self, marke, model) -> None:
        # Konstruktor
        self.marke = marke
        self.model = model

    def fahre(self):
        self.aktuelle_geschwindigkeit = 30

    def bremse(self):
        self.aktuelle_geschwindigkeit = 0

    def tritt_voll_durch(self):
        self.aktuelle_geschwindigkeit = 300
    


auto_von_jascha = Auto(marke="VW", model="Passat")

# auto_von_jascha.marke = "VW"
# auto_von_jascha.model = "Passat"
auto_von_jascha.fahre()
auto_von_jascha.bremse()
auto_von_jascha.tritt_voll_durch()
auto_von_jascha.bremse()
auto_von_jascha