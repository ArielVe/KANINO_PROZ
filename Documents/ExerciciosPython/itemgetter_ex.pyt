# Explicando a função itemgetter da biblioteca Python operator.
# operator.itemgetter() busca por um " item" usando o metodo do operador  __getitem__(). 
# Se múltiplos valores são retornados , a função retorna eles em uma tupla. 
# Essa função funciona com dicionários Python, strings, listas, e tuplas

from operator import itemgetter

numeros = [[4, 80], [3, 60], [2, 90], [5, 70]]
# Aqui, nos queremos ordenar a lista composta pelo segundo número em cada lista,
# colocamos o indice entre os parênteses do itemgetter,e assim ele nos retorna
# a lista de maneira ordenada pelo segundo valor em cada lista na lista composta.
print("A lista ordenada do menor para o maior de acordo com o segundo valor: ")
print(sorted(numeros, key=itemgetter(1)))
print(" ")

# Se quiser, podemos retornar a lista ordenada de maneira reversa, do maior 
# para o menor.
print("A lista ordenada do maior para o menor de acordo com o segundo valor: ")
print(sorted(numeros, key=itemgetter(1), reverse=True))
print(" ")

# E logicamente, podemos mudar a busca para o primeiro item em cada lista dentro da 
# lista composta, apenas mundando o indice de 1 para 0.
print("A lista ordenada do menor para o maior de acordo com o primeiro valor: ")
print(sorted(numeros, key=itemgetter(0)))
print(" ")

# Exercício: pegar um dicionário com nome de funcionários e data de aniversário, formatar 
# do mais novo e para o mais velho funcionário de acordo com a data de nascimento.

# Nos também podemos ordenar de acordo com a quantidade de caracteres dentro de cada
# item em uma lista ou dicionário.
clima = ["sol", "tempestade", "chuva", "nublado", "ensolarado"]
print("A lista ordenada de acordo com o item mais longo para o menor item: ")
print(sorted(clima, key=len))

# Voltando ao itemgetter, mas agora com exemplos utilizando os dicionários Python.
dic_num = {'k1': 9, "k2": 5, "k3": 2, "k4": 6, "k5": 3, "k6": 1}
# Aqui, nos queremos ordenar o dicionário do menor para o maior de acordo com o valor 
# das chaves.
print("O dicionário ordenado do menor para o maior de acordo com os valores das chaves:")
numeros_ordenado = sorted(dic_num.items(), key=itemgetter(1))
numeros_dic = dict(numeros_ordenado)
print(numeros_dic)
# e Olha só, podemos ordenar de acordo com o número nas chaves do dicionário também.
print("O dicionário ordenado do menor para o maior de acordo com as chaves: ")
numeros_ordenado2 = sorted(dic_num.items(), key=itemgetter(0))
numeros_dic2 = dict(numeros_ordenado2)
print(numeros_dic2)
# Só mais uma para fechar com chave de ouro, podemos ordenar de maneira alfabetica as
# chaves do dicionário.
dic_letras = {"c": 3, "b": 2, "d": 4, "a":1, "e": 5}
letras_ordenadas = sorted(dic_letras.items(), key=itemgetter(0)) 
letras_dic = dict(letras_ordenadas)
print("O dicionário ordenado de acordo com a ordem alfabetica das chaves: ")
print(letras_dic)





