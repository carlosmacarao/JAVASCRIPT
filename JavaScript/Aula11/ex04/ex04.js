function checar(){
    var val = window.document.getElementById('num');
    var n = Number(val.value);
    var res = window.document.querySelector('div#res');
    
    if (n % 2 == 0) {
        res.innerHTML = `<p><strong>Numero Par</strong>.</p>`;
    } else {
        res.innerHTML = `<p><strong>Numero Ímpar</strong>.</p>`
    }
}