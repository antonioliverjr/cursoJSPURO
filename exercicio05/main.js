let dados = []
let valor = document.getElementById('valor')
let armazenamento = document.getElementById('armaz')
let resultado = document.getElementById('res')

function rodar(){    
    if(valor.value.length == 0){
        alert('Digite um numero!')
    }else if(dados.length == 0){
        var listagem = document.createElement('h3')
        textolist = document.createTextNode(`Lista`)
        listagem.appendChild(textolist)
        armazenamento.appendChild(listagem)
    }
    
    var val = Number(valor.value)
    var verif = Number(dados.indexOf(val))
    resultado.innerHTML = ''

    if(val < 1 || val > 100){
        alert(`O valor ${val} é invalido!`)
    } else if (verif >= 0){
        alert(`O valor ${val} já encontra-se na lista!`)
    } else {
        var paraf = document.createElement('p')
        texto = document.createTextNode(`O valor ${val} foi adicionado.`)
        paraf.appendChild(texto)
        armazenamento.appendChild(paraf)
        dados.push(val)
    }
    valor.value = ''
    valor.focus()
}

function calcular(){
    let contagem = dados.length
    if(contagem < 1){
        alert('Não há dados armazenados na lista!')
    } else {
        var titulo = document.createElement('h3')
        textotitulo = document.createTextNode(`Informações`)
        titulo.appendChild(textotitulo)
        resultado.appendChild(titulo)
        
        if(contagem == 1){
            resultado.innerHTML += `<p>Ao todo, temos ${contagem} número cadastrado.</p>`
        } else {
            resultado.innerHTML += `<p>Ao todo, temos ${contagem} números cadastrados.</p>`
        }
        
        let maior = dados[0]
        let menor = dados[0]
        let soma = 0
        let media = 0

        for(let pos in dados){
            soma += dados[pos]
            if(dados[pos] > maior){
                maior = dados[pos]
            } else if(dados[0] < menor) {
                menor = dados[pos]
            }
        }

        resultado.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        resultado.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        resultado.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        
        media = soma / contagem
        media.toFixed(1)
        resultado.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`

        var infor = document.getElementById('info')
        var info = document.createElement('p')
        textinfo = document.createTextNode('Abaixo os dados armazenados e seus resultados!')
        info.appendChild(textinfo)
        infor.innerHTML = ''
        infor.appendChild(info)
    }
}

function limpar(){
    resultado.innerHTML = ''
    armazenamento.innerHTML = ''
}
