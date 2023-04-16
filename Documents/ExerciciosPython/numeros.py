# Desenvolva um programa que leia quatro valores pelo teclado e guarde-os
# em uma Tupla.No final, mostre:
# A) Quantas vezes apareceu o valor 9.
# B) Em que posição foi digitado o número 3.
# C) Quais foram os números pares. 

#Meu primeiro jetio, sem utilizar a Tupla.
def analisar_numeros():
    lista_numeros = []
    lista_pares = []
    posicao_3 = []
    valor9 = 0
    contador = 0
   
    for n in range(1,5):
        numero = int(input(f"Digite o {n} número: "))
        if numero == 9:
            valor9 += 1
        if numero % 2 == 0:
            lista_pares.append(numero)
        if numero == 3:
            contador += 1
            posicao_3.append(contador)
   
    lista_numeros.append(numero)
    numeros_digitados = tuple(lista_numeros)

    print(f"O número 9 apareceu {valor9} vezes")
    print(f"O número 3 foi digitado na {posicao_3} posição")
    print(f"{lista_pares} foram os números pares digitados.")     
#analisar_numeros()

# Meu segundo Jeito, utilizando a Tupla e outros metodos.
def analisar_numeros2():
    lista_numeros = []
    lista_pares = []
    posicao_3 = []
    contador = 0
   
    for n in range(1,5):
        numero = int(input(f"Digite o {n} número: "))
        if numero == 3:
            contador += 1
            posicao_3.append(contador)
        lista_numeros.append(numero)

    par = ''
    numeros_digitados = tuple(lista_numeros)
    for numero in numeros_digitados:
        #se o número for par e não ser igual ao número par anterior ele pode ser 
        # adicionado.
        if numero % 2 == 0 and not numero == par:
            par = numero
            lista_pares.append(numero)

    numeros_pares = ', '.join((str(par) for par in lista_pares))
    posicao3 = ', '.join((str(num) for num in posicao_3))
    valor9 = numeros_digitados.count(9)
        
    print(f"O número 9 apareceu {valor9} vezes")
    print(f"O número 3 foi digitado na {posicao3} posição")
    print(f"Os números pares digitados foram {numeros_pares}.") 

analisar_numeros2()  