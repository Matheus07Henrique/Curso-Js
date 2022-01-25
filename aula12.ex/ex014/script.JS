function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date
    var hora = data.getHours()
    var minutos = data.getMinutes()
    

    if (hora >= 0 && hora < 12) {
        document.body.style.background = '#e2cd9f'
        msg.innerHTML = `Bom Dia! Agora são ${hora} horas e ${minutos} minutos!`
        img.src = 'fotomanha.png'
    }else if (hora >= 12 && hora < 18){
        document.body.style.background = '#b9846f'
        msg.innerHTML = `Boa Tarde! Agora são ${hora} horas e ${minutos} minutos!`
        img.src = 'fototarde.png'
    }else{
        document.body.style.background = '#515154'
        msg.innerHTML = `Boa Noite! Agora são ${hora} horas e ${minutos} minutos!`
        img.src = 'fotonoite.png'
    }
}
