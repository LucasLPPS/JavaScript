function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('tano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e digite novamente!')
    }
    else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var estado = ''
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                estado = 'criança'
            }
            else if (idade >=10 && idade < 21) {
                estado = 'jovem'
            }
            else if (idade >=21 && idade < 50) {
                estado = 'adulto(a)'
            }
            else {
                estado = 'idoso(a)'
            }
        }
        else {
            if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                estado = 'criança'
            }
            else if (idade >=10 && idade < 21) {
                estado = 'jovem'
            }
            else if (idade >=21 && idade < 50) {
                estado = 'adulto(a)'
            }
            else {
                estado = 'idoso(a)'
            }
            }
        }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos. Essa pessoa é um(a) ${estado}.`
}
