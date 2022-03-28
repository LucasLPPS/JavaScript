function contar() {
    // a utilização do let substitui o uso de var, mudando apenas questão de escopo, pois só irá funcionar dentro dessa estrutura
    let ini = document.getElementById('tinicio')
    let fim = document.getElementById('tfim')
    let passo = document.getElementById('tpasso')
    let res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = `Impossível contar.`
    }
    else {
        res.innerHTML = "Contando: <br>"
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        // estruturas de repetição:
        /*
        ------------------
        while (condição) {

        }
        ------------------
        do {

        } while (condição)
        ------------------
        for (inicio; fim; incremento) {

        }
        ------------------
        outras formas, usando listas, semelhantes ao Python:
        for (let c=0; c <= lista.length; c++){

        }
        Equivalente a:
        for c in range(0, len(lista)):
        ------------------
        for (let c in lista) {

        }
        Equivalente a:
        for c in lista:
        -----------------
        Para listas:
        let num = [5, 8, 7]
        num[3] = 7
        num.push(7)
        Ambos os comandos acima adicionam 7 na 3º posição
        num.length -> retorna a quantidade de elementos da lista
        num.indexOf(7) -> retorna a posição do elemento 7, caso não ache, retorna o valor -1
        */
        if (p <= 0) {
            window.alert('Passo inválido. Considerando passo 1.')
            p = 1
        }
        if (i < f) {
            for (let c = i; c <= f; c = c + p) {
                res.innerHTML = `${res.innerHTML} ${c}
                \u{1F449}`
            }
        }
        else {
            for (let c = i; c >= f; c = c - p) {
                res.innerHTML = `${res.innerHTML} ${c}
                \u{1F449}`
            }
        }
        res.innerHTML = `${res.innerHTML} \u{1F3C1}`
    }
}