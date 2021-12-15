function calcular() {
    var tn1 = window.document.getElementById('txtn1')
    var n = Number(tn1.value)

    for (var i = 1; i <= 5; i++) {
        var tabu = n * i
        res.innerHTML = `${n} X ${i} = ${tabu}`
    }
}