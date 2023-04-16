#Uma forma mais enxuta de mostrar dados de uma lista composta
#(que possui uma lista dentro dela).

lista = [["","",""],["","",""],["","",""]]

for l in range(0,3):
    for c in range(0,3):
        lista[l][c] = str(input(f"Digite um nome para [{l}, {c}]: "))

for l in range(0,3):
    for c in range(0,3):
        print(f"[ {lista[l][c]:^5} ] ", end="")
    print("")