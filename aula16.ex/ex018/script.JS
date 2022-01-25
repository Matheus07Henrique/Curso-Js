var num = document.getElementById("txtn1")
var lista = document.getElementById("selecao")
var res = document.getElementById("res")
var vetor = []
//-----------------------------------------------------------------------------------------------------------------
function isNumero(n) { //verifica se o valor de num está entre 1 e 100
    if (Number(n) >=1 && Number(n) <= 100) {
        return true
    }else{
        return false
    }
}
//-----------------------------------------------------------------------------------------------------------------
function inLista(n, l) { //verifica se o valor de num está presente em vetor
    if (l.indexOf(Number(n)) != - 1){
        return false
    }else{
        return true
    }
}
//-----------------------------------------------------------------------------------------------------------------
function adicionar() { 
    if (isNumero(num.value) && inLista(num.value, vetor) && num.value.length != 0) { //se a função isNumero receber true e inLista também... 

        vetor.push(Number(num.value)) //adiciona o número ao vetor
        var item = document.createElement('option') 
        item.text = `Valor ${num.value} adicionado!`
        lista.appendChild(item)
        res.innerHTML = '' //Limpa a caixa de resposta

    }else{
        window.alert('Número inválido ou já adicionado!')
    }
    num.value = '' //Limpa a caixa de adição de números
    num.focus()
}
//-----------------------------------------------------------------------------------------------------------------
function finalizar() {
    if (vetor.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    }else{
    vetor.sort

    var nelementos = vetor.length
    var maior = vetor.slice(-1)[0]
    var menor = vetor[0]
    var soma = 0
        for(var c = 0; c < vetor.length; c++) {
        soma += vetor[c]
        }
    var media = Number(soma) / Number(vetor.length)

    res.innerHTML = `<p>Ao todo, temos ${nelementos} números cadastrados!</p><p>O maior número informado
    foi ${maior}!</p><p>O menor valor informado foi ${menor}!</p><p>Somando os valores temos ${soma}!</p>
    <p>A média entre os valores é ${media}!`   
    }
//-----------------------------------------------------------------------------------------------------------------
}
var btn = document.getElementById("limpar")

btn.addEventListener("click" , function() { //quando clicar no botão de id limpar, executa a função reload.
    location.reload()
})