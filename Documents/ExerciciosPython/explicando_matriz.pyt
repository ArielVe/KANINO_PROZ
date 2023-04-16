# Crie um programa que declare uma matriz de dimensão 3x3 e preencha com
# valores lidos pelo teclado.No final, mostre a matriz na tela, com a
# formatação correta.
# Utilizando For range ao inves de While.

matriz = [[],[],[]]
c2 = 0

for i in range(0,3):
    numero = int(input(f"Digite um valor para [{c2}, {i}]: "))
    matriz[0].append(numero)

    if i >= 2:
        c2+= 1

for i in range(0,3):
    numero = int(input(f"Digite um valor para [{c2}, {i}]: "))
    matriz[1].append(numero)

    if i >= 2:
        c2+= 1

for i in range(0,3):
    numero = int(input(f"Digite um valor para [{c2}, {i}]: "))
    matriz[2].append(numero)

    if i >= 2:
        c2+= 1

for n in matriz[0]:
    print(f"[{n:^5}] ", end="")
print("")
for n in matriz[1]:
    print(f"[{n:^5}] ", end="")
print("")
for n in matriz[2]:
    print(f"[{n:^5}] ", end="")
print("")


