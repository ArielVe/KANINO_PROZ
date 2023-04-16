# acumuladores e contadores - Estrutura While

contador = 1
acumulador = 1

while contador <= 10:
  print("{} + ".format(contador), end="")
  print("{}".format(acumulador))
  #print(contador, acumulador)

  acumulador += contador
  contador += 1