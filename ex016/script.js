function relogio(){
    var data = new Date()
    var dia = data.getDay();
    var nmr = data.getDate();
    var mes = data.getMonth() +1;
    var fna = data.getFullYear();
    var resultado = document.getElementById('semana')
    var rst = document.getElementById('dtd')
    rst.innerHTML = `${nmr}/${mes}/${fna}<br>`
    switch(dia){
        case 0: 
        resultado.innerHTML = 'DOMINGO'
        break
        case 1:
            resultado.innerHTML = 'SEGUNDA'
            break
            case 2:
                resultado.innerHTML = 'TERÇA'
                break
                case 3:
                    resultado.innerHTML = 'QUARTA'
                    break
                    case 4:
                        resultado.innerHTML = 'QUINTA'
                        break
                        case 5:
                            resultado.innerHTML = 'SEXTA'
                            break
                            case 6:
                                resultado.innerHTML = 'SABADO'
                                break
    }
    var daya = new Date()
    var hora = daya.getHours()
    var minutos = daya.getMinutes()
    var segu = daya.getSeconds()
    hora = hora < 10 ? "0" + hora : hora;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segu = segu < 10 ? "0" + segu : segu;
    var res = document.getElementById('horas')
    res.innerHTML = `${hora}:${minutos}:${segu}`
}
setInterval(relogio, 1000)