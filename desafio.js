console.log("DIAGNÓSTICO PRÉVIO")

var nome = prompt('Digite seu nome.')
console.log('NOME: ' + nome)


var sexo = prompt("Digite seu sexo.");
var feminino = "feminino";
var masculino = "masculino";

if(sexo == feminino)
{
   console.log("Sexo: " + feminino)
}
else if(sexo == masculino)
{
   console.log("Sexo: " + masculino)
}
else
{
   console.log("Sexo: não definido.")
}


var Idade = prompt("Digite sua idade.")
console.log("Idade: " + Idade)

var Altura = prompt("Digite sua altura.")
console.log("Altura: " + Altura)

var Peso = prompt("Digite seu peso.")
console.log("Peso: " + Peso)


if (Idade < 12 )
{
    console.log ("Categoria: INFANTIL")
}

if (Idade  >= 12 &&  Idade <= 20)
{
console.log ("Categoria: JUVENIL")
}
if (Idade  >= 21 && Idade <= 65)
{
console.log("Categoria: ADULTO")
}
if (Idade  > 65)
{
console.log("Categoria: IDOSO")
}

console.log("IMC Desejável: entre 20 e 24")

IMC = Peso / (Altura ** Altura)
console.log("Resultado IMC: " + IMC)


if(IMC < 20)
{
   console.log("Riscos: Muitas complicações de saúde como doenças pulmonares e cardiovasculares podem estar associadas ao baixo peso.")
   console.log("Recomandações: Inclua carboidratos simples em sua dieta, além de proteínas - indispensáveis para ganho de massa magra. Procure um profissional.")
}
else if(IMC >= 20 && IMC <= 24.9)
{
   console.log("Riscos: Seu peso está ideal para suas referências.")
   console.log("Recomandações: Mantenha uma dieta saudável e faça seus exames periódicos.")
}
else if(IMC >= 25 && IMC <= 29.9)
{
   console.log("Riscos: Aumento de peso apresenta risco moderado para outras doenças crônicas e cardiovasculares.")
   console.log("Recomandações: Adote um tratamento baseado em dieta balanceada, exercício físico e medicação. A ajuda de um profissional pode ser interessante.")
}
else if(IMC >= 30 && IMC <= 35)
{
   console.log("Riscos: Quem tem obesidade vai estar mais exposto a doenças graves e ao risco de mortalidade.")
   console.log("Recomandações: Adote uma dieta alimentar rigorosa, com o acompanhamento de um nutricionista e um médico especialista (endócrino).")
}
else
{
   console.log("Riscos: O obeso mórbido vive menos, tem alto risco de mortalidade geral por diversas causas.")
   console.log("Recomandações: Procure com urgência o acompanhamento de um nutricionista para realizar reeducação alimentar, um psicólogo e um médico especialista (endócrino).")
}