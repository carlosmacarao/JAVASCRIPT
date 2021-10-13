var nome = window.prompt("Nome: ");

var apel = window.prompt("Apelido: ");

var n1 = Number(window.prompt("Digite a primeira nota: "));

var n2 = Number(window.prompt("Digite a segunda nota: "));

var s = (n1*0.60 + n2*0.40);

document.write(`Nome: <strong>${apel}, ${nome}</strong>. 
</br> Teste 1 = <strong>${n1}</strong>, Teste 2 = <strong>${n2}</strong>
</br> Media Final: <strong>${s}</strong> valores. </br>`)

if (s >= 10 && s <=13) {
    document.write(`<strong>Admitido!</strong>`)
} 
if(s > 0 && s <= 9) {
    document.write(`<strong>Excluido!</strong>`)
}
if (s >= 14 && s <=20) {
    document.write("<strong>Dispensado!</strong>")
} 
  