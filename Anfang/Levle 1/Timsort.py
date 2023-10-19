import random

def timsort(arr):
    # Minimumsortgröße festlegen
    MIN_MERGE = 32
    n = len(arr)
    tmp = [0] * n
    
    # Merge-Sort-Funktion
    def merge(arr, left, middle, right, tmp):
        left_end = middle - 1
        tmp_pos = left
        num_elements = right - left
        # Schleife über Elemente im linken und rechten Teil-Array
        while (left <= left_end) and (middle <= right):
            # Vergleich des ersten Elements im linken und rechten Teil-Array
            if arr[left] <= arr[middle]:
                tmp[tmp_pos] = arr[left]
                left += 1
            else:
                tmp[tmp_pos] = arr[middle]
                middle += 1
            tmp_pos += 1

        # Füge restliche Elemente des linken Teil-Arrays hinzu
        while left <= left_end:
            tmp[tmp_pos] = arr[left]
            left += 1
            tmp_pos += 1

        # Füge restliche Elemente des rechten Teil-Arrays hinzu
        while middle <= right:
            tmp[tmp_pos] = arr[middle]
            middle += 1
            tmp_pos += 1
        
        # Kopiere sortierte Elemente zurück ins Original-Array
        for i in range(tmp_pos):
            arr[left + i] = tmp[left + i]

    
    for size in range(MIN_MERGE, n+1, MIN_MERGE):
        # Schleife über alle möglichen Startindizes des Arrays
        for start in range(0, n, size):
            # Sortieren des Teil-Arrays mit aktueller Größe und aktuellem Startindex
            merge(arr, start, start + size//2, min((start + size), n), tmp)
    return arr

# Generate an array of 1000 random values
arr = [random.randint(1,1000) for _ in range(1000)]

# Sort the array
sorted_arr = timsort(arr)

# Ausgabe des sortierten Arrays
print(sorted_arr)
