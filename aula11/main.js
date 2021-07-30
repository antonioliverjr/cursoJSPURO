document.getElementById('btn').addEventListener('click', calcular)

var dig = document.querySelector('input#txtvel')
dig.addEventListener('mouseenter', stilo)
dig.addEventListener('mouseout', stilo2)

function stilo(){
    dig.style.background = "white"
}

function stilo2(){
    dig.style.background = "red"
}

function calcular(){
    var txtv = document.getElementById('txtvel')
    var res = document.getElementById('resultado')
    var vel = Number(txtv.value)
    res.innerHTML = `Sua velocidade atual é de <strong>${vel}</strong> Km/h<br>`
    
    if(vel > 80){
        res.innerHTML += `<strong>Você foi multado por excesso de velocidade!</strong><br>`
    }
    res.innerHTML += `Dirija sempre com cinto de segurança!<br>`

}