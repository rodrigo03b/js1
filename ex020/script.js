function carregar(){
    var hor = document.getElementById('hor')
    var img = document.getElementById('foto')
    var cro = document.getElementById('cor')
    var dat = new Date()
    var hr = dat.getHours()
    if(hr >= 5 && hr <= 12){
        img.src = 'manhao.png'
        hor.innerHTML = 'bom dia!'
        cro.style.background = '#CF8856'
    }else if(hr >= 13 && hr <= 18){
        img.src = 'tarde.png'
        hor.innerHTML = 'boa tarde'
        cro.style.backgroundColor = '#FC7100'
    }else{
        img.src = 'noite.png'
        hor.innerHTML = 'boa noite'
        cro.style.backgroundColor = '#785760'
    }
    //hora
    var horas = document.getElementById('hora')
    var hora2 = dat.getHours()
    var minut = dat.getMinutes()
    var segun = dat.getSeconds()
    horas.innerHTML = `${hora2.toString().padStart(2, '0')}:${minut.toString().padStart(2, '0')}:${segun.toString().padStart(2, '0')}`;
    //mês
    var ms = document.getElementById('mes')
    var miss = dat.getMonth()+1
    switch(miss){
            case 1:
                ms.innerHTML = 'janeiro';
                break;
                case 2:
                ms.innerHTML = 'fevereiro';
                    break;
                    case 3:;
                    ms.innerHTML = 'março';
                        break;
                        case 4:
                        ms.innerHTML = 'abril';
                            break;
                            case 5: 
                            ms.innerHTML = 'maio';
                            break;
                            case 6:
                            ms.innerHTML = 'junho';
                                break;
                                case 7:
                                ms.innerHTML = 'julho';
                                    break;
                                    case 8: 
                                    ms.innerHTML = 'agosto';
                                    break;
                                    case 9:
                                    ms.innerHTML = 'setembro';
                                        break;
                                        case 10: 
                                        ms.innerHTML = 'outubro';
                                        break;
                                        case 11:
                                        ms.innerHTML = 'novembro';
                                            break;
                                            case 12: 
                                            ms.innerHTML = 'desembro';
                                            break;
    }
    var dma = document.getElementById("data")
    var dia = dat.getDate()
    var mess = dat.getMonth()+1
    var ano = dat.getFullYear()
    dma.innerHTML = `${dia}/${mess}/${ano}`
    //dia da semana
    var semana = document.getElementById('dia')
    var dda = dat.getDay()
    switch(dda){
        case 0:
            semana.innerHTML = 'domingo'
            break
            case 1:
            semana.innerHTML = 'segunda'
                break
                case 2:
                semana.innerHTML = 'terça'
                    break
                    case 3:
                    semana.innerHTML = 'quarta'
                        break
                        case 4:
                        semana.innerHTML = 'quinta'
                            break
                            case 5:
                            semana.innerHTML = 'sexta'
                                break
                                case 6:
                                semana.innerHTML = 'sabado'
                                    break
    }
}
setInterval(carregar, 1000)
carregar();