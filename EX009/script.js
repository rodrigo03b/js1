function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('Imagens')
    var dia = new Date()
    var hora = dia.getHours()
    msg.innerHTML = `agora são ${hora} rs`
    if(hora >= 0 && hora < 12){
        //bom dia
        img.src = 'dia.png'
        msg.innerHTML += '<P>bom dia</p>'
        document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora <= 18){
        //boa tarde
        img.src = 'tarde.png'
        msg.innerHTML += '<P>boa tarde</p>'
        document.body.style.background = '#b9846f'
    }else{
        //boa noite
        img.src = 'noite.png'
        document.body.style.background = '#515'
        msg.innerHTML += '<P>boa noite</p>'
    }
    }