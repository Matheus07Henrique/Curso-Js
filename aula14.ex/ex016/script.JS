function contar() {
var inicio = document.getElementById('txtn1')
var fim = document.getElementById('txtn2')
var passo = document.getElementById('txtn3')
var res = document.getElementById('res')

if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    res.innerHTML = "Impossível Contar!"
}else{
    res.innerHTML = 'Resposta:'
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    if (p <= 0) {
        alert('[Passo inválido] Considerando passo 1:')
        p = 1
    }
    if (i < f){
        //contagem crescente
        for (var c = i; c <= f; c += p) {
            res.innerHTML += ` ${c} \u{1f449}`
        }
        res.innerHTML += `\u{1f3c1}`
    }else{
        //contagem regressiva
        for (var c = i; c >= f; c -= p) {
            res.innerHTML += ` ${c} \u{1f449}`
        }
        res.innerHTML += `\u{1f3c1}`
    }
        
    }
}
