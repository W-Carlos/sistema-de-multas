function calcular () {
    var txtv = document.getElementById('txtvel')
    var res = document.getElementById('res')
    var vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade é de <strong>${vel} Km/h</strong>.</p>`

    if (vel >= 80) {
        res.innerHTML += `Você foi <strong>MULTADO</strong> por excesso de velocidade!`
        document.body.style.backgroundColor = 'red'
    } else if (vel >= 70 && vel < 80 ) {
        res.innerHTML += `Você chegou perdo do limite de velocidade. Por favor preste mais atenção.`
        document.body.style.backgroundColor = 'yellow'
    } else {
        res.innerHTML += `Você está dentro do limite de velocidade.`
        document.body.style.backgroundColor = 'rgb(22, 189, 22)'
    }

    res.innerHTML += ' Dirija sempre com cuidado e com o cinto de seguraça.'
}
