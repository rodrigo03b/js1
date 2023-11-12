var numer1 = window.document.getElementById('nmr1')
var res = document.getElementById('res')
function somar(){
    var num = Number(numer1.value)
    res.innerHTML = ''
    for(var tp1 = 0; tp1 <= 10; tp1++){
    res.innerHTML += `${tp1}+${num}=${tp1 + num}<br>`
}
}
function mult(){
    var cv = Number(numer1.value)
    res.innerHTML = ""
    for(var tcc = 1; tcc <= 10; tcc++){
        res.innerHTML += `${tcc} * ${cv}=${tcc * cv}<br>`
    }
}
function sub(){
    var pcc = Number(numer1.value)
    res.innerHTML = ''
    for(var pts = 1; pts <= 10; pts++){
        res.innerHTML += `${pts} - ${pcc} = ${pts - pcc}<br>`
    }
}