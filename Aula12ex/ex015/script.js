function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById ('txtano')
    var res = document.querySelector ('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert ('[ERRO!] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade Calculada ${idade}`
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade <= 10){
                //Criança
                img.setAttribute('src', '_imagens/Crianca-masc.png')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src', '_imagens/Jovem-masc.png')
            }else if (idade <= 50){
                //Adulto
                img.setAttribute('src', '_imagens/Adulto-masc.png')
            }else {
                //idoso
                img.setAttribute('src', '_imagens/Idoso-masc.png')
            }
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >= 0 && idade <= 10){
                //Criança
                img.setAttribute('src', '_imagens/Crianca-femi.png')
            }else if (idade <= 21) {
                img.setAttribute('src', '_imagens/Jovem-femi.png')
                // Jovem
            }else if (idade < 50){
                img.setAttribute('src', '_imagens/Adulto-fem.png')
                //Adulto
            }else {
                img.setAttribute('src', '_imagens/Idosa-femi.png')
                //Idosa
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.append(img)
        
    }
}