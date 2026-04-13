function exercicio01(){
    let nome = prompt("Digite seu nome");
    let idade = parseInt(prompt("Digite sua idade"));
    if (idade >= 0 && idade <= 17){
        alert(nome + "," + "\n" + "você precisa de mais de 18 para acessar");
    } else if (idade >= 18){
        alert(nome + "," + "\nbem-vindo(a)");
    } else {
        alert("Erro")
    }
}
function exercicio02(){
    let numero = parseInt(prompt("Digite um número"));
    if (numero >= 0 && numero <= 9){
        alert("Menor que 10")
    } else if (numero >= 10){
        alert("Maior que 10")
    } else {
        alert("Erro")
    }
}
function exercicio03(){
    let numero = parseFloat(prompt("Digite um número"));
    if (numero === 0){
        alert("É um 0")
    } else {
        alert("Não é um 0")
    }
}
function exercicio04(){
    let numero = parseFloat(prompt("Digite um número"));
    if (numero === 8001){
        alert("É 8001")
    } else {
        alert("Não é 8001")
    }
}
function exercicio05(){
    let x = parseInt(prompt("Digite número X"));
    let y = parseInt(prompt("Digite número Y"));
    let result = x + y;
    if (result >= 0){
        alert(result + " = Um número positivo")
    } else{
        alert(result + " = Não é um número positivo")
    }
}
function exercicio06(){
    let preco1 = parseFloat(prompt("Primeiro item"));
    let preco2 = parseFloat(prompt("Segundo item"));
    let preco3 = parseFloat(prompt("Terceiro item"));
    let custoTotal= preco1 + preco2 + preco3;
    if (custoTotal >= 100.01){
        alert("Preço total:" + "\nR$" + custoTotal + "\nSem saldo para comprar")
    } else {
        alert("Preço total: "+"\nR$"+custoTotal)
    }
}
function exercicio07(){
    let idade = parseInt(prompt("Digite sua idade"))
    if (idade <= 15 && idade >= 0){
        alert("Não pode votar")
    } else if (idade >= 16 && idade <= 17){
        alert("Voto opcional")
    } else {
        alert("Voto obrigatório")
    }
}
function exercicio08(){
    let numero = parseInt(prompt("Digite um número"));
    if (numero >= 1){
        alert("Número positivo")
    } else if (numero < 0){
        alert("Número negativo")
    } else if (numero === 0){
        alert("Zero/Nulo")
    }
}
function exercicio09(){
    let x = parseInt(prompt("Digite número X"));
    let y = parseInt(prompt("Digite número Y"));
    if (x > y){
        alert("Número X é maior que Y")
    } else if (x < y){
        alert("Número Y é maior que X")
    } else {
        alert("Número X e Y são iguais")
    }
}
function exercicio10(){
    let numero = parseInt(prompt("Digite número"));
    if (numero >= 10 && numero <= 20){
        alert(numero + " está entre 10 e 20")
    } else {
        alert(numero + " não está entre 10 e 20")
    }
}
function exercicio11(){
    let x = parseInt(prompt("Digite número X"));
    let y = parseInt(prompt("Digite número Y"));
    let z = parseInt(prompt("Digite número Z"));
    if (x >= 0 && y >= 0 && z >= 0){
        alert("Todos são positivos")
    } else {
        alert("Nem todos / Nenhum é positivo")
    }
}
function exercicio12(){
    let user = prompt("Digite seu email");
    let senha = prompt("Digite sua senha");
    if (user === "admin" && senha === "1234"){
        alert("Usuário verificado!")
    } else {
        alert("Usuário não verificado")
    }
}
function exercicio13(){
    let numero = parseInt(prompt("Digite seu número"));
    if (numero % 2 == 0){
        alert("Número par")
    } else {
        alert("Número ímpar")
    }
}
function exercicio14(){
    let salary = parseInt(prompt("Digite seu salário"));
    if (salary >= 0 && salary <= 1999){
        alert("Salário baixo")
    } else if (salary >= 2000 && salary <= 5000){
        alert("Salário médio")
    } else {
        alert("Salário alto")
    }
}
function exercicio15(){
    let temp = parseInt(prompt("Digite a temperatura"))
    if (temp <= 14){
        alert(temp + "°C está FRIO")
    } else if (temp >= 15 && temp <= 24){
        alert(temp + "°C está AGRADÁVEL")
    } else {
        alert(temp + "°C está QUENTE")
    }
}
function exercicio16(){
    let a = parseInt(prompt("Digite número A"));
    let b = parseInt(prompt("Digite número B"));
    if (a % b == 0){
        alert(a + " é múltiplo de " + b)
    } else {
        alert(a + " não é múltiplo de " + b)
    }
}
function exercicio17(){
    let notaMat = parseFloat(prompt("Digite nota de Matemática"));
    let notaHist = parseFloat(prompt("Digite nota de História"));
    let notaPort = parseFloat(prompt("DIgite nota de Língua Portuguesa"));
    let media = (notaMat + notaHist + notaPort) / 3;
    if (media >= 7){
        alert("Aprovado")
    } else if (media >= 5 && media <= 6.9){
        alert("Em recuperação")
    } else {
        alert("Reprovado")
    }
}
function exercicio18(){
    let idade = parseInt(prompt("Digite sua idade"));
    let renda = parseInt(prompt("Digite sua renda"));
    if (idade >= 18 && renda >= 2000){
        alert("Aprovado para crédito")
    } else {
        alert("Não aprovado")
    }
}
function exercicio19(){
    let hora = parseInt(prompt("Digite a hora atual"));
    if (hora >= 0 && hora <= 11){
        alert("Bom dia")
    } else if (hora >= 12 && hora <= 17){
        alert("Boa tarde")
    } else if (hora >= 18 && hora <= 23){
        alert("Boa noite")
    } else {
        alert("TARTARUS TIME")
    }
}
function exercicio20(){
    let x = parseInt(prompt("Digite X"));
    let y = parseInt(prompt("Digite Y"));
    let op = parseInt(prompt("Digite Operador (1 = +, 2 = -, 3 = /, 4 = *)"));
    if (op === 1){
        z = x + y
    } else if (op === 2){
        z = x - y
    } else if (op === 3){
        z = x / y
    } else if (op === 4){
        z = x * y
    } 
    if (op === 3 && y === 0){
        alert("Error")
    }
    alert("Resultado: " + z)
}
function exercicio21(){
    let x = parseInt(prompt("Digite número X"));
    let y = parseInt(prompt("Digite número Y"));
    let z = parseInt(prompt("Digite número Z"));
    if (x > y && y > z){
        alert(x + " " + y + " " + z);
    } else if (x > z && z > y){
        alert(x + " " + z + " " + y);
    } else if (y > x && x > z){
        alert(y + " " + x + " " + z);
    } else if (y > z && z > x){
        alert(y + " " + z + " " + x);
    } else if (z > x && x > y){
        alert(z + " " + x + " " + y);
    } else if (z > y && y > x){
        alert(z + " " + y + " " + x);
    } else if ((z = y) && (z = x) && (x = y)){
        alert("All equal")
    } else {
        alert("Error")
    }
}
function exercicio22(){
    let x = parseInt(prompt("Digite número X"));
    let y = parseInt(prompt("Digite número Y"));
    let z = parseInt(prompt("Digite número Z"));
    if (x > y && y > z){
        alert(x + " é o maior de todos")
    } else if (y > x && y > z){
        alert(y + " é o maior de todos")
    } else if (z > y && z > x){
        alert(z + " é o maior de todos")
    }
}
function exercicio23(){
    let x = parseInt(prompt("Digite número X"));
    let y = parseInt(prompt("Digite número Y"));
    let z = parseInt(prompt("Digite número Z"));
    if (x < y && x < z){
        alert(x + " é o menor de todos")
    } else if (y < x && y < z){
        alert(y + " é o menor de todos")
    } else if (z < y && z < x){
        alert(z + " é o menor de todos")
    }
}
function exercicio24(){
    let x = parseInt(prompt("Digite número X"));
    let y = parseInt(prompt("Digite número Y"));
    let z = parseInt(prompt("Digite número Z"));
    if (x > y && y > z){
        alert("Ordem decrescente")
    } else if (x < y && y < z){
        alert("Ordem crescente")
    } else {
        alert("Nadaver")
    }
}
function exercicio25(){
    let idade = parseInt(prompt("Digite sua idade"));
    if (idade >= 0 && idade <= 10){
        alert("Idade: " + idade + "\nCriança")
    } else if (idade >= 11 && idade <= 17){
        alert("Idade: " + idade + "\nAdolescente")
    } else if (idade >= 18 && idade <= 59){
        alert("Idade: "+idade+"\nAdulto")
    } else {
        alert("Idade: "+idade+"\nIdoso")
    }
}
function exercicio26(){
    let item = 100.00;
    let saldo = 100.00;
    let forma = prompt("Forma de Pagamento");
    let desconto = 0.99;
    if (forma = "crédito"){
        total = saldo - (item - desconto);
        descontoCheck = "Sim"
    } else if (forma = "débito"){
        total = saldo - item;
        descontoCheck = "Não"
    }
    alert("Forma de pagamento: " + forma + "\nDesconto: " + descontoCheck + "\nTroco: " + total.toFixed(2))
}
function exercicio27(){
    let x = parseInt(prompt("Digite X"))
    let y = parseInt(prompt("Digite Y"))
    if (x >= 0 && y >= 0){
        alert("Os dois são positivos")
    } else if (x <= 0 && y <= 0){
        alert("Os dois são negativos")
    } else if (x >= 0 && y <=0){
        alert("Y é negativo")
    } else if (x <= 0 && y >= 0){
        alert("X é negativo")
    }
}
function exercicio28(){
    let nota1 = parseInt(prompt("Digite Nota 1"))
    let nota2 = parseInt(prompt("Digite Nota 2"))
    let nota3 = parseInt(prompt("Digite Nota 3"))
    let media = (nota1 + nota2 + nota3)/3;
    let faltas = parseInt(prompt("Quantidade de faltas"))
}
/*
xyz
xzy
yxz
yzx
zxy
zyx
*/