function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verificar os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img =document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
            img.setAttribute('src','bebemasc.png')
            } else if (idade < 21) {
            img.setAttribute('src','jovemmasc.png')
            } else if (idade < 50) {
            img.setAttribute('src','adulto.png')    
            } else {
            img.setAttribute('src','senhor.png')    
            }
        }else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
            img.setAttribute('src','bebefemi.png')
            } else if (idade < 21) {
            img.setAttribute('src','jovemfemi.png')
            } else if (idade < 50) {
            img.setAttribute('src','adulta.png')    
            } else {
            img.setAttribute('src','senhora.png') 
            }
        }   
        res.style.textAling = 'center'
        res.innerHTML = `${gênero} com ${idade} anos`
        res.appendChild(img)
    }

}