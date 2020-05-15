function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
if (hora >= 0 && hora <12) {
    //Bom dia!
    img.src = '_imagens/cafe-manha.png'
    document.body.style.background = '#883408'
}else if (hora >= 12 && hora <18){
    //Boa tarde
    img.src = '_imagens/fimDeTarde.png'
    document.body.style.background = '#fda550'
}else{
    //Boa noite
    img.src = '_imagens/noite.png'
    document.body.style.background = '#e51338'
}
}