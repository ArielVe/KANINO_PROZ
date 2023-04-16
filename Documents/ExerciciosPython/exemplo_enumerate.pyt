def exemplo_1():
    estacoes = ["inverno","primavera","outono","verao"]
    print(list(enumerate(estacoes)))# aqui exibira os items da lista e o seus índices.

def exemplo_2():
    valores= [2,5,6,4,7,5,2,1,2]
    numero = 2
    indices_num = []

    #uma variavel para o indice e a outra para o valores percorridos na lista.
    for indice, valor in enumerate(valores):
        if numero == valor:
            print(indice, valor)
            indices_num.append(indice)
    print(indices_num)
exemplo_2()

#A função enumerate() adiciona um contador a um iterável e o retorna na forma de um objeto.
#Após digitar enumerate(), você receberá 2 variáveis de loop da função, 
# que consistirá na contagem da iteração atual junto com o valor do item da iteração atual.
