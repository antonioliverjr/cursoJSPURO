var vel = 90;
console.log(`A velocidade do seu carro é ${vel}`)
if(vel > 80){
    console.log('Você ultrapassou a velocidade permitida. MULTADO!')
}
console.log('Dirija sempre usando cinto de segurança!')

var pais = 'Brasil'
console.log(`Vivendo em ${pais}`)
if(pais == 'Brasil'){
    console.log('Você é Brasileiro!')
} else{
    console.log('Você é estrangeiro!')
}

var idade = 66

if(idade < 16){
    console.log('Não vota')
} else if(idade < 18 || idade > 65){
    console.log('Voto é opcional')
} else{
    console.log('Vota')
}

var agora = new Date()
var diaSem = agora.getDay()

switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    default:
        console.log('Sábado')
        break
}