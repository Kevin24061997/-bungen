from random import randint
from timeit import repeat
import time


def run_sorting_algorithm(algorithm, array):
    setup_code = f"from __main__ import {algorithm}" \
        if algorithm != "sorted" else ""

    start = time.time()

    stmt = f"{algorithm}({array})"

    times = repeat(setup=setup_code, stmt=stmt, repeat=3, number=10)

    end = time.time()


    print(f"Ausführungszeit (minimal): {min(times)} bei Algorithmus {algorithm}." )
    print(f"Ausführungszeit          : {end - start} bei Algorithmus {algorithm}." )





def insertion_sort(array):
    n = len(array)

    for i in range(1, n):

        if array[i]<array[i-1]:
            array[i-1], array[i] = array[i], array[i-1]

        for j in range(i-1, 0, -1):

            if array[j]<array[j-1]: 
                array[j-1], array[j] = array[j], array[j-1]



ARRAY_LENGTH = 10_00

if __name__ == "__main__":
    array = [randint(0, 1_000) for i in range(ARRAY_LENGTH)]
    

    run_sorting_algorithm(algorithm="sorted", array=array)
    run_sorting_algorithm(algorithm="insertion_sort", array=array)