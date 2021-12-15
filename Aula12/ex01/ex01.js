var idade = 19;
console.log(`Voce tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não Vota!');
} else if(idade < 18 || idade > 65){
    console.log('Voto Opcional');
}else if (idade > 18) {
    console.log('Voto Obrigatorio!')
}