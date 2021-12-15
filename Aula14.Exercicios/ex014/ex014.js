function contar() {
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.getElementById('txtn2')
    var tn3 = window.document.getElementById('txtn3')

    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var n3 = Number(tn3.value)
    
    
    res.innerHTML = `<p>Contando: </>`
    for (var c = n1; c <= n2; c += n3) {
        res.innerHTML += `${c} - `
    }
    res.innerHTML += `<strong>FIM!</strong>`
}