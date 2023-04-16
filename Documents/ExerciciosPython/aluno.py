# Faça um programa que leia nome e média de um aluno, guardando também a 
# situação em um dicionário.No final, mostre o conteúdo da estrutura na tela.

def guardar_dados(nome):
    aluno = dict()
    media = 11
    while media > 10:
        media = float(input(f"média de {nome}: "))
    if media >= 7:
        situacao_atual = "Aprovação!"
    elif 5<= media:
        situacao_atual = "Reprovado!"
    else:
        situacao_atual = "Recuperação!"
    aluno = {"nome": nome, "media": media, "situacao": situacao_atual}

    print(f"O nome do(a) aluno(a) é {aluno['nome']}")
    print(f"A média de {aluno['nome']} é igual a {aluno['media']}")
    print(f"E sua situação é de {aluno['situacao']}")

nome = str(input("Nome: "))
guardar_dados(nome)

def guardar_dados2():
    aluno = dict()
    aluno['nome'] = str(input("Nome: "))
    aluno['media'] = float(input(f"Média de {aluno['nome']}: "))
    if aluno['media'] >= 7:
        aluno['situacao'] = "Aprovado"
    elif 5<= aluno['media'] < 7:
        aluno["situacao"] = "Recuperação"
    else:
        aluno['situacao'] = "Reprovado"

    for k, v in aluno.items():
        print(f"{k} é igual a {v}")
#guardar_dados2()
    
