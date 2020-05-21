
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //Bom dia
        img.src = '_imagens/amanhecer.png'
        document.body.style.background = '#e4cdb2'
}else if (hora >= 12 && hora < 18){
        //Boa tarde
        document.body.style.background = '#e27401'
        img.src = '_imagens/tarde.png'
}else{
        img.src = '_imagens/noite.png'
        document.body.style.background = '#001549' 
    //Boa noite!
}
}