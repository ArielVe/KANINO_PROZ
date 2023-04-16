
teste = list()

teste.append("Jamile")
teste.append(19)
galera = list()
galera.append(teste[:]) # [:] significa copiar

teste[0] = "Jessica"
teste[1] = 18
galera.append(teste[:])
print(galera)

galera2 = [["João", 19], ["Maria", 23], ["Joaquin", 13], ["Jamile", 16]]
print(galera2[0])#pegar a primeira lista
print(galera2[0][0])#pegar o primeiro item da lista do joao 

for pessoa in galera2:
    print(pessoa[0])#printar apenas os nomes das pessoas na lista.

for pessoa in galera2:
    print(pessoa[1])#printar apenas as idades das pessoas na lista.

for pessoa in galera2:
    print(f"{pessoa[0]} tem {pessoa[1]} anos de idade.")

#terceiro topico:
pessoal = list()
dado = list()

for c in range(0, 5):
    dado.append(str(input(f"Digite o nome da {c} pessoa: ")))
    dado.append(int(input(f"Digite a idade da {c} pessoa: ")))
    pessoal.append(dado[:])
    dado.clear()
print(pessoal)

#Exercicio com Listas compostas
total_maior = total_menor = 0
for pessoa in pessoal:
    if pessoa[1] >= 21:
        print(f"{pessoa[0]} é maior de idade!")
        total_maior += 1
    else:
        print(f"{pessoa[0]} é menor de idade!")
        total_menor += 1
print(f"São {total_maior} pessoas maior de idade, ")
print(f"E {total_menor} pessoas menor de idade.")