nomes = ["jamile","joao","jonathan","jessica","joel"]
nomes_a = []
for nome in nomes:
    for letra in nome:
        if letra in 'a':
            nomes_a.append(nome)

print(nomes_a)
