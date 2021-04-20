function calcular () {
    var txtv = document.getElementById('txtvel')
    var res = document.getElementById('res')
    var vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade é de <strong>${vel} Km/h</strong>.</p>`

    if (vel > 60) {
        res.innerHTML += `Você foi <strong>MULTADO</strong> por excesso de velocidade!`
        document.body.style.backgroundColor = 'red'
    }

    res.innerHTML += 'Dirija sempre com cuidado e com o cinto de seguraça.'
}
