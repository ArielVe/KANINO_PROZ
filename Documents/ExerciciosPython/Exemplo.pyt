
#fn = f-1 + fn-2

n1, n2 = 0, 1
contador = 0

while contador <= 10:
    print("{} - ".format(n1), end="")
    nth = n1 + n2
    n1 = n2
    n2 = nth
    contador +=1
     
print("FIM")