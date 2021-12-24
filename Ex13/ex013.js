
function carregar(){
    var img = window.document.getElementById('imagem')
    var hour = window.document.getElementById('hour')
    var data = Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    hour.innerHTML = `Agora são ${hora}:${minuto}:${segundo}`
    if (hora >= 0 && hora < 12) {
        img.innerHTML = 'manha.png'
    } else if (hora >= 12 && hora < 18) {
        img.innerHTML = 'tarde.png'
    } else{
       img.innerHTML = 'noite.png'
       
   
    }
}