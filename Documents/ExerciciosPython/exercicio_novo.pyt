#Um metodo simples de verificar se um item de uma lista é String ou int.

lista = []
lista.append(input("Seu Nome: "))
lista.append(int(input("Sua idade: ")))

for item in lista:
    if type(item) is int:
        print(f"Idade: {item}")
    else:
        print(f"Nome: {item}")
