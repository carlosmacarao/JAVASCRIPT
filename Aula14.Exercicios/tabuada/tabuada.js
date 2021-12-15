function tabuada () {
    let num = document.getElementById('txtn');
    let tab = document.getElementById('seltab');

    let n = Number(num.value);

    if (n.value.length == 0) {
        alert('[Erro] Digite um numero para proseguir!')
    } else {

        for (let c = 1; c <= n; c++) {
            let t = n * c;
            res.innerHTML = `${n} x ${c} = ${t}`;
        }
    }
}