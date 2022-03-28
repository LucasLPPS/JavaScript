let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    }
    else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    }
    else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    }
    else {
        window.alert('Valor inválido ou já encontrado.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar.')
    }
    else {
        let tot = valores.length
        let maior = valores[0]
        let menor =  valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma = soma + valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma/tot        
        res.innerHTML = `Ao todo temos ${tot} números cadastrados.`
        res.innerHTML = `${res.innerHTML} <br> O maior valor encontrado foi ${maior}.`
        res.innerHTML = `${res.innerHTML} <br> O menor valor encontrado foi ${menor}.`
        res.innerHTML = `${res.innerHTML} <br> A soma dos valores é ${soma}.`
        res.innerHTML = `${res.innerHTML} <br> A média dos valores é ${media}.`
    }
}