function calcular() {
    var cx1 = window.document.getElementById('na1')
    var cx2 = window.document.getElementById('ps1')
    var cx3 = window.document.getElementById('np1')
    var cx4 = window.document.getElementById('ps2')

    var nota1 = Number(cx1.value)
    var peso1 = Number(cx2.value)/10
    var nota2 = Number(cx3.value)
    var peso2 = Number(cx4.value)/10

    var nfat = nota1*peso1
    var nfpv = nota2*peso2
    var media = nfat + nfpv
    var res = window.document.getElementById('res')

    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (media >= 9) {
        img.setAttribute('src', 'Melhoresnotas.png')
        texto_res = 'Você arrasou, está de Parabéns!!!'
    } else if (media >= 7) {
        img.setAttribute('src', 'Boasnotas.png')
        texto_res = 'Muito bom, continue assim!'
    } else if (media >= 5) {
        img.setAttribute('src', 'Notamediana.png')
        texto_res = 'Bom... pelo menos ficou na média né.'
    } else if (media >= 3) {
        img.setAttribute('src', 'Abaixodamedia.png')
        texto_res = 'Sinto muito, você ficou de exame. #força'
    } else {
        img.setAttribute('src', 'Muitomal.png')
        texto_res = 'Você está de exame, mas se estudar passará!! #fé'
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Sua média foi de ${media}.${texto_res}`
    res.style.padding = 8
    res.appendChild(img)
}
