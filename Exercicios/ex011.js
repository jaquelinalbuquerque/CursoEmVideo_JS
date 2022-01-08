var idade = 66
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log(`Não vota`)
} else if (idade <18 || idade > 65){ // lembrando que 2 pipes "||"" significa "OU".
        console.log('Voto opcional')
} else {
    console.log(`Voto obrigatório`)
}