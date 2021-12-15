function checar(){
    var txt = window.document.getElementById('txtv');
    var tn1 = Number(txt.value);
    var res = window.document.querySelector('div#res');
    
    if (tn1 >= 0) {
        res.innerHTML = `<p><strong>Valor Positivo</strong>.</p>`
        if (tn1 === 0) {
            res.innerHTML = `<p><strong>Igual a Zero</strong>.</p>`
        }
    } else {
        res.innerHTML = `<p><strong>Valor Negativo</strong>.</p>`
    }
}