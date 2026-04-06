function exercicio01(){
    let name = "Felipe";
    let dia = 16;
    let mes = 11;
    let anoNasc = 2006;
    let dataDeNascimento = (dia + "/" + mes + "/" + anoNasc)
    let anoAtual = 2026;
    let idade = anoAtual - anoNasc;
    let peso = 65.5;
    let altura = 1.65;
    let pesoEAltura = (peso + "kg " + ", " + altura + "m")
    let imc = (peso / (altura * altura)).toFixed(2);
    let jobs = 3;
    let jobValor = 100.00;
    let salario = jobValor * jobs;
    if (imc < 18.5) {
        categoria = "Abaixo do peso"
    } else if (imc >= 18.5 && imc <= 24.9) {
        categoria = "Normal"
    } else if (imc >= 24.9 && imc <= 29.9) {
        categoria = "Sobrepeso"
    } else if (imc >= 29.9 && imc <= 34.9) {
        categoria = "Obesidade Grau I"
    } else if (imc >= 34.9 && imc <= 39.9) {
        categoria = "Obesidade Grau II"
    } else if (imc > 39.9) {
        categoria = "Obesidade Grau III"
    }
    alert("Nome: " + name + "\n" +
    "Data de Nascimento: " + dataDeNascimento + "\n" +
    "Idade: " + idade + "\n" +
    "Peso e Altura: " + pesoEAltura + "\n" + 
    "IMC: " + imc + "\n" +
    "Categoria de IMC: " + categoria + "\n" +
    "Quantidade de jobs: " + jobs + "\n" +
    "Valor por jobs: " + "R$" + jobValor + "\n" +
    "Salário de jobs: " + "R$" + salario + "\n"
    );
}