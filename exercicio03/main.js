function rodar(){
    var inicio = document.getElementById('inicio')
    var ini = Number(inicio.value)
    var fim = document.getElementById('fim')
    var f = Number(fim.value)
    var passo = document.getElementById('passo')
    var pas = Number(passo.value)
    var resposta = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('Digite todos os números solicitados!')
    } else if(f > ini){
        resposta.innerHTML = ''
        for(ini;ini<=f;ini+=pas){
            resposta.innerHTML += `${ini} &#128073`
        }
        resposta.innerHTML += ' &#128540'
    } else if(f < ini){
        resposta.innerHTML = ''
        for(ini;ini>=f;ini-=pas){
            resposta.innerHTML += `${ini} &#128073`
        }
        resposta.innerHTML += ' &#128540'
    } else{
        alert('Os valores não possuem intervalo!')
    }
    
}
