def ensure_integer(x):
    """"
    Diese Funktion prüft, ob die übergebene Zahl in ein Integer umgewandelt werden kann. 
    Wenn dem so ist, geben wir die Zahl als Integer zurück, ansonsten gibt die Funktion 
    ein Null-Wert zurück. 
    """
    try:
        x_as_int = int(x)
        return x_as_int
    except ValueError:
        return None
