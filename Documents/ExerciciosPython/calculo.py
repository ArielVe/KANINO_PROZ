
# Estudar mais sobre if else dentro do print, estudar e testar, criar meus próprios
# Exercícios

#palavra = input("Digite uma palavra: ")
#tamanho = int(input("Tamanho da palavra do qual o programa deve exibir: "))

#print(f" {palavra} !" if len(palavra) > tamanho else ' A palavra é menor que o tamanho informado!', end="")
contador = 1

while contador < 10:
    contador += 1
    if contador > 1:
        print(" {} x".format(contador), end="")
    else:
        print(" =", end="")
