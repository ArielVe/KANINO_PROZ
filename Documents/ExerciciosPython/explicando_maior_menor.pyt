#Utilizando o For para encontrar o maior valor de uma lista.

numeros = [1,2,34,56,7,8,9,7]
maior = 0
for n in range(0,len(numeros)):
    if n == 0:
        maior = numeros[n]
    elif numeros[n] > maior:
        maior = numeros[n]

print(f"Maior valor da lista é {maior}.")