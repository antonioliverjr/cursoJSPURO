function rodar(){
    var residade = document.getElementById('residade')
    var rodape = document.getElementById('rodape')
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('nascimento')

    if(fano.value.length == 0 || fano.value > ano){
        alert('Verifique os dados e tente novamente!')
    }else{
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 18){
                img.setAttribute('src', 'img/menino.jpg')
                residade.innerHTML = `<p>Detectamos ${genero} jovem com ${idade} anos.</p>`
                residade.appendChild(img)
            } else if (idade < 50){
                img.setAttribute('src', 'img/homem.jpg')
                residade.innerHTML = `<p>Detectamos ${genero} Adulto com ${idade} anos.</p>`
                residade.appendChild(img)
            } else {
                img.setAttribute('src', 'img/velho.jpg')
                residade.innerHTML = `<p>Detectamos ${genero} Idoso com ${idade} anos.</p>`
                residade.appendChild(img)
            }
        } else if (sex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 18){
                img.setAttribute('src', 'img/menina.jpg')
                residade.innerHTML = `<p>Detectamos ${genero} jovem com ${idade} anos.</p>`
                residade.appendChild(img)
            } else if (idade < 50){
                img.setAttribute('src', 'img/mulher.jpg')
                residade.innerHTML = `<p>Detectamos ${genero} Adulta com ${idade} anos.</p>`
                residade.appendChild(img)
            } else {
                img.setAttribute('src', 'img/velha.jpg')
                residade.innerHTML = `<p>Detectamos ${genero} Idosa com ${idade} anos.</p>`
                residade.appendChild(img)
            }
        } else{
            alert('Marque o sexo correspondente!')
        }
        
    }
}
