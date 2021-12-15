function contar() {
    let tni = document.getElementById('txti') 
    let tnf = document.getElementById('txtf')
    let tnp = document.getElementById('txtp')
    
    let ini = Number(tni.value) //Recebe o valor da caixa de texto e converte em Numero.
    let fim = Number(tnf.value)
    let passo = Number(tnp.value)
    let res = document.getElementById('res')

        res.innerHTML = 'Contando: </br>'
        if (ini < fim) {
            for (let c = ini; c <= fim; c += passo) {
                res.innerHTML += `${c} - `
            }
        } else {
            for (let c = ini; c >= fim; c -= passo) {
                res.innerHTML += `${c} - `
            }
        }
        res.innerHTML += 'FIM!'
    
    
    
}    

