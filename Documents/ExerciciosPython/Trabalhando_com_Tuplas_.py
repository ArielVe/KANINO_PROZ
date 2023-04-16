# Trabalhando com Tuplas
# Listas, Tuplas e dicionários podem ser consideradas variáveis compostas.
# tuplas são imutáveis

lanche = ("hamburger", "pudim", "suco", "pizza", "Batata Frita")
print(lanche[1:3])# mostrar o elemento entre o elemento um e o elemento 3

print(lanche[:2])# não irá mostrar os elementos que vem depois do 2,
#(não exibe o elemento 2 inclusive) 

for comida in lanche:
    print(f"Eu vou comer {comida}")
print("Comi pra Caramba!")

for c in range(0, len(lanche)):
    print(f"Eu vou comer {lanche[c]}")
print("Enchi a Pança!")

contador = 0
while contador != len(lanche):
    print(f"Eu vou comer {lanche[contador]}")
    contador += 1
print("Tava Bão Demais!")

cont = 0
while True:
    for c in range(0, len(lanche)):
        print(f"Eu vou comer {lanche[c]}")
        cont += 1  
    if cont == len(lanche):
        break

for posicao, comida in enumerate(lanche):
    print(f"Eu vou comer {comida} na posição {posicao}.")

print(sorted(lanche))# exibir os itens da tupla em ordem alfabética.
numeros = (2, 6, 7, 9, 5, 6)
numeros2 = (3, 4, 1, 0, 8)
juntos = numeros + numeros2
print(juntos)
print(juntos.count(6))# a função calcula quantas vezes aparece o número 6.

pessoa = ("Jennifer", 24, "F", 1.68, 67)
print(pessoa)
#Não da para deletar um item na tupla, mas da para deletar a tupla inteira.