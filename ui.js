class UI {
    AmountChange(result) {
        const amountui = document.getElementById('outputResult')
        amountui.placeholder = ''
        amountui.placeholder = result
        if (amountui.placeholder == 0) {
            amountui.placeholder = 'Sonuc Burada gözükecektir.'
        }
    }
}