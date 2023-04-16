# Dicionários em Python - Variáveis Comspostas:
# Tuplas = () > parênteses
# Listas = [] > colchetes
# Dicionários = {} > chaves

dados = dict()
dados = {"nome": "Jamile", "idade": 19}
dados["sexo"] = "F"
#del dados["idade"] assim se remove algum dado dentro do dicionário.
print(dados)
print(dados["nome"])
print(dados["idade"])

filme = {"Titulo": "Corra!", "ano": 2017, "Diretor": "Jordan Peele"}
print(filme.values()) # values() exibe os valores do dicionário.
print(filme.keys()) # keys() exibe as chaves do dicionário.
print(filme.items()) # items() exibe as chaves e os valores do dicionário.

# Para cada chva e valor no dicionário Filme.
for k, v in filme.items():
    print(f"A chave {k} tem como valor {v}")

pessoas = {"nome": "Jamile", "idade": 19, "sexo": "F"}
print(f"{pessoas['nome']} tem {pessoas['idade']} anos de idade.")

#Para exibir cada Chave do dicionário.
for k in pessoas.keys():
    print(f"{k}")
#Para exibir cada Valor do dicionário.
for v in pessoas.values():
    print(f"{v}")
#Para exibir ambos(chaves e valores) do dicionário.
for k,v in pessoas.items():
    print(f"{k} = {v}")
print("") 

del pessoas['sexo']# Apaguei a chave Sexo, logo, ela não sera exibida no For.
for k,v in pessoas.items():
    print(f"{k} = {v}")
print("")

pessoas['nome'] = "Jamilaa"# Troquei o nome da pessoa.
for k, v in pessoas.items():
    print(f"{k} = {v}")
print("")

pessoas['peso'] = 64 # Adicionei uma nova chave ao dicionário pessoas.
for k, v in pessoas.items():
    print(f"{k} = {v}")
print("")

brasil = []
estado1 = {"uf": "Rio de Janeiro", "sigla": "Rj"}
estado2 = {"uf": "São Paulo", "sigla": "Sp"}
brasil.append(estado1)
brasil.append(estado2)

#Adicionamos os dois dicionários a lista Brasil.
print(brasil)

#Para acessar um dos dicionários dentro da lista, pode acessar pelo índice.
print(brasil[0])
print(brasil[1])

# Para acessar os valores das Chaves dos dicionários.
print(brasil[0]['uf'])
print(brasil[1]['sigla'])

estado = dict()
brazil = []
for c in range(0, 3):
    estado['uf'] = str(input("Unidade Federativa: "))
    estado['sigla'] = str(input("Sigla do Estado: "))
    brazil.append(estado.copy())# Em listas, se utiliza o [:] para fazer a copia de uma
    #lista para ser adicionada a outra, em dicionários se utiliza a função copy(). 
print(brazil)

#Como eu estou comdois dicionários dentro de uma lista, preciso de dois For
# para capturar as chaves e os valores dentro dos dicionários.O primeiro For
# passa por cada dicionário dentro da lista, já o segundo For, passa por cada item
# dentro dos dicionários.Como vemos abaixo:
for e in brazil:
    for k, v in e.items():
        print(f"O campo {k} tem valor {v}")

# Aqui acessamos apenas os valores das chaves.
for e in brazil:
    for v in e.values():
        print(f"valor: {v}")

#Aqui acessamos as chaves dos dicionários.
for e in brazil:
    for k in e.keys():
        print(f"Chave: {k}")