function calcular () {
    var txtv = document.getElementById('txtvel')
    var res = document.getElementById('res')
    var vel = Number(txtv.value)
    res.innerHTML = `Sua velocidade é de <strong>${vel} Km/h</strong>.`
}
