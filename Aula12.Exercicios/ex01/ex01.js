function carregar() {

    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();
    msg.innerHTML = `Agora são exatamente <strong>${hora}:${minuto}</strong> horas. </br>`;

    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        msg.innerHTML += '<p><strong>BOM DIA!</strong></p>'
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
    } else if(hora >= 12 && hora < 18){
        msg.innerHTML += '<p><strong>BOA TARDE!</strong></p>'
        //BOA TARDE!
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
    }else {
        //BOA NOITE!
        msg.innerHTML += '<p><strong>BOA NOITE!</strong></p>'
        img.src = 'noite.png'
        document.body.style.background = '#515154'
    }
}    