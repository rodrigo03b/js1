function relogio(){
    var data = new Date();
    //proxima hora
    var hora = data.getHours()+1;
    var mnt = data.getMinutes()+1;
    var sec = data.getSeconds()+1;
    var hr1 = document.getElementById('rx1')
    hr1.innerHTML = `${hora}:${mnt}:${sec}` 
    //hora certa
    var hr = data.getHours()
    var mt = data.getMinutes()
    var sc = data.getSeconds()
    var hr2 = document.getElementById('rx2')
    hr2.innerHTML = `${hr}:${mt}:${sc}` 
    //hora nega
    var hrs = data.getHours()-1
    var mts = data.getMinutes()-1
    var scs = data.getSeconds()-1
    var hr3 = document.getElementById('rx3')
    hr3.innerHTML = `${hrs}:${mts}:${scs}`
    //adicionba
}
setInterval(relogio, 1000)
relogio();  