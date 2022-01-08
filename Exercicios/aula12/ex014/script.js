function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()    
//var hora = 23 // para forçar a hora, para teste
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora< 12) {
    //BOM DIA #87CEFA
    img.src ='manha.png'
    document.body.style.background = '#87CEFA'
} else if (hora >= 12 && hora <18){
    //BOA TARDE  #8B4513
    img.src = 'tarde.png'
    document.body.style.background = '#8B4513'
} else {
    //boa noite 	#8B008B
    img.src = 'noite.png'
    document.body.style.background = '#8B008B'
}
}

