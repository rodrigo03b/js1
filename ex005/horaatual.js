/*video 12 min:16:32*/
var agora = new Date()
var hora = agora.getHours()
console.log(`são exatamente ${hora} horas`)
if(hora < 12){
    console.log('bom dia')
}else if(hora <= 18){
    console.log('boa tarde')
}else{
    console.log('boa noite')
}
