var hoje = new Date();
var mes = hoje.getMonth();

console.log(mes);
switch(mes) {
    case 0:
        console.log('JANEIRO');
        break;
    case 1:
        console.log('FEVEREIRO');
        break;
    case 2:
        console.log('MARÇO');
        break;
    case 3:
        console.log('ABRIL');
        break;
    case 4:
        console.log('MAIO');
        break;
    case 5:
        console.log('JUNHO');
        break;
    case 6:
        console.log('JULHO');
        break;
    case 7:
        console.log('AGOSTO');
        break;
    case 8:
        console.log('SETEMBRO');
        break;
    case 9:
        console.log('OUTUBRO');
        break;
    case 10:
        console.log('NOVEMBRO');
        break;
    case 11:
        console.log('DEZEMBRO');
        break;
    default:
        console.log('[ERRO]: Mes Invalido');
        break;                                                
}