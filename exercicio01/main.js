function rodar(){
    var horario = document.getElementById('horario')
    var  img = document.getElementById('foto')
    var rodape = document.getElementById('rodape')
    var agora = new Date()
    var hora = agora.getHours()
    
    if(hora >= 0 && hora < 5){
        horario.innerHTML = `<p><strong>Agora são ${hora} Horas!</strong></p>`
        img.src = 'img/madrugada.png'
        document.body.style.background = '#0e091f'
        rodape.style.color = 'yellow'
    }else if(hora >= 5 && hora < 12){
        horario.innerHTML = `<p><strong>Agora são ${hora} Horas!</strong></p>`
        img.src = 'img/manha.png'
        document.body.style.background = '#f5c74a'
        rodape.style.color = 'red'
    } else if(hora < 18){
        horario.innerHTML = `<p><strong>Agora são ${hora} Horas!</strong></p>`
        img.src = 'img/tarde.png'
        document.body.style.background = '#ac7f06'
        rodape.style.color = 'white'
    } else{
        horario.innerHTML = `<p><strong>Agora são ${hora} Horas!</strong></p>`
        img.src = 'img/noite.png'
        document.body.style.background = '#0e181a'
    }
}
