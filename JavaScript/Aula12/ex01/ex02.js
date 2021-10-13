var agora = new Date();
var hora = agora.getHours();
var minuto = agora.getMinutes();

console.log(`Agora são exatamente ${hora}:${minuto} horas.`)
if (hora >= 6 && hora < 12) {
    console.log('Bom Dia!');
} else if(hora >= 12 && hora <= 17){
    console.log('Boa Tarde!');
}else if (hora >= 0 && hora <= 5) {
    console.log('Boa Madrugada!');
}else {
    console.log('Boa Noite!')
}