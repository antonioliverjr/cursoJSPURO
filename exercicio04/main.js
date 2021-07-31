function rodar(){
    var numero = document.getElementById('numero')
    var num = Number(numero.value)
    var resposta = document.getElementById('res')
    var soma = document.getElementById('som')
    var subt = document.getElementById('sub')
    var mult = document.getElementById('mul')
    var divi = document.getElementById('div')

    if(numero.value.length == 0){
        alert('Digite um numero!')
    } else{
        resposta.innerHTML = 'Abaixo as tabuadas de Soma, Subtração, Multiplicação e Divisão!'
        soma.innerHTML = ''
        var cont = Number(1)
        for(cont;cont<=10;cont++){
            var resp = document.createElement('p')
            let text = document.createTextNode(`${num} + ${cont} = ${cont+num}`)
            resp.appendChild(text)
            soma.appendChild(resp)
            soma.style.border = 'solid'
            soma.style.borderRadius = '10px'
        }
        var cont = Number(1)
        subt.innerHTML = ''
        for(cont;cont<=10;cont++){
            var resp = document.createElement('p')
            let text = document.createTextNode(`${num} - ${cont} = ${cont-num}`)
            resp.appendChild(text)
            subt.appendChild(resp)
            subt.style.border = 'solid'
            subt.style.borderRadius = '10px'
        }
        var cont = Number(1)
        mult.innerHTML = ''
        for(cont;cont<=10;cont++){
            var resp = document.createElement('p')
            let text = document.createTextNode(`${num} x ${cont} = ${cont*num}`)
            resp.appendChild(text)
            mult.appendChild(resp)
            mult.style.border = 'solid'
            mult.style.borderRadius = '10px'
        }
        var cont = Number(1)
        divi.innerHTML = ''
        for(cont;cont<=10;cont++){
            var resp = document.createElement('p')
            let text = document.createTextNode(`${num} / ${cont} = ${(cont/num).toFixed(1)}`)
            resp.appendChild(text)
            divi.appendChild(resp)
            divi.style.border = 'solid'
            divi.style.borderRadius = '10px'
        }

    }
}
