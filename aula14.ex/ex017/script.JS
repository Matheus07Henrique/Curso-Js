function verificar() {
    var num = document.getElementById('txtn1')
    var res = document.getElementById('tabuada')
if (num.value.length == 0) {
    alert('Por favor digite um número.')
}else{
    var n = Number(num.value)
    var c = 1
    res.innerHTML = ''

    while(c <= 10) {
        var item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        item.value = `res${c}`
        res.appendChild(item)
        c++
    }
}
}