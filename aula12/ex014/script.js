function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 6 && hora < 12) {
        // dia
        img.innerHTML = `Bom dia!`
        img.style.backgroundColor = rgba(255, 255, 0, 0.493);
        
    }
    else {
        if (hora >=12 && hora < 18) {
            // tarde
            img.innerHTML = `Boa tarde!`
            img.style.backgroundColor = rgba(255, 166, 0, 0.575);
        }
        else {
            // noite
            img.innerHTML = `Boa noite!`
            img.style.backgroundColor = rgba(137, 43, 226, 0.685);
        }
    }
}
