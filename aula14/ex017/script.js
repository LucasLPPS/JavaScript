function tabuada() {
    let num = document.getElementById('tnum')
    let tab = document.getElementById('res')
    if (num.value <= 0) {
        window.alert('Por favor, digite um número válido.')
    }
    else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            tab.innerHTML = `${tab.innerHTML}<br>${n} x ${c} = ${n*c}`
            c = c + 1
        }
    }

}